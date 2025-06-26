using System.Collections.Concurrent;
using System.Net.WebSockets;
using System.Text;
using Google.Protobuf;
using System.Text.Json;

namespace api
{
    public class Program
    {
        private static readonly ConcurrentBag<WebSocket> FrontendSockets = new();

        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            var app = builder.Build();

            app.UseWebSockets();
            app.Map("/ws", async context =>
            {
                if (context.WebSockets.IsWebSocketRequest)
                {
                    var webSocket = await context.WebSockets.AcceptWebSocketAsync();
                    FrontendSockets.Add(webSocket);
                    Console.WriteLine("Frontend connected");
                    var buffer = new byte[1024 * 4];
                    while (webSocket.State == WebSocketState.Open)
                    {
                        var result = await webSocket.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);
                        if (result.MessageType == WebSocketMessageType.Close)
                        {
                            await webSocket.CloseAsync(WebSocketCloseStatus.NormalClosure, string.Empty, CancellationToken.None);
                        }
                    }
                }
                else
                {
                    context.Response.StatusCode = 400;
                }
            });

            Task.Run(ConnectToBinanceWebSocket);

            app.Run();
        }

        public static async Task ConnectToBinanceWebSocket()
        {
            var ws = new ClientWebSocket();
            var uri = new Uri("wss://stream.binance.com:9443/ws/btcusdt@trade");
            await ws.ConnectAsync(uri, CancellationToken.None);

            Console.WriteLine("Connected to Binance WebSocket");

            var buffer = new byte[4096];
            while (ws.State == WebSocketState.Open)
            {
                var result = await ws.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);
                if (result.MessageType == WebSocketMessageType.Close)
                {
                    await ws.CloseAsync(WebSocketCloseStatus.NormalClosure, string.Empty, CancellationToken.None);
                }
                else
                {
                    var message = Encoding.UTF8.GetString(buffer, 0, result.Count);
                    Console.WriteLine($"Received: {message}");

                    try
                    {
                        using var doc = JsonDocument.Parse(message);
                        var root = doc.RootElement;

                        var trade = new BinanceTrade
                        {
                            E = root.GetProperty("e").GetString() ?? string.Empty,
                            Et = root.GetProperty("E").GetInt64(),
                            S = root.GetProperty("s").GetString() ?? string.Empty,
                            T = root.GetProperty("t").GetInt64(),
                            P = root.GetProperty("p").GetString() ?? string.Empty,
                            Q = root.GetProperty("q").GetString() ?? string.Empty,
                            Tt = root.GetProperty("T").GetInt64(),
                            M = root.GetProperty("m").GetBoolean(),
                            I = root.GetProperty("M").GetBoolean()
                        };

                        using var ms = new MemoryStream();
                        trade.WriteTo(ms);
                        var protoBytes = ms.ToArray();

                        foreach (var frontendSocket in FrontendSockets)
                        {
                            if (frontendSocket.State == WebSocketState.Open)
                            {
                                await frontendSocket.SendAsync(
                                    new ArraySegment<byte>(protoBytes),
                                    WebSocketMessageType.Binary,
                                    true,
                                    CancellationToken.None
                                );
                            }
                        }
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine($"Failed to map JSON to BinanceTrade: {ex.Message}");
                    }
                }
            }
        }
    }
}
