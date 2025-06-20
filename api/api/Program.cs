using System.Collections.Concurrent;
using System.Net.WebSockets;
using System.Text;

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

                    foreach (var frontendSocket in FrontendSockets)
                    {
                        if (frontendSocket.State == WebSocketState.Open)
                        {
                            var msgBytes = Encoding.UTF8.GetBytes(message);
                            await frontendSocket.SendAsync(new ArraySegment<byte>(msgBytes), WebSocketMessageType.Text, true, CancellationToken.None);
                        }
                    }
                }
            }
        }
    }
}
