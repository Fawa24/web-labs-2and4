import './App.css'
import { useEffect, useState } from 'react'
import { BinanceTrade } from './generated/binance_pb'

function App() {
  const [binanceData, setBinanceData] = useState()

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:5165/ws')
    ws.binaryType = 'arraybuffer'
    ws.onmessage = (event) => {
      const bytes = new Uint8Array(event.data)
      const trade = BinanceTrade.decode(bytes)
      setBinanceData(BinanceTrade.toObject(trade))
    }
    ws.onopen = () => {
      console.log('Connected to backend WebSocket')
    }
    ws.onclose = () => {
      console.log('WebSocket closed')
    }
    return () => ws.close()
  }, [])

  console.log(binanceData);

  return (
    <>
      <h2>Data from Binance via backend:</h2>
      <pre style={{whiteSpace: 'pre-wrap', wordBreak: 'break-all'}}>{binanceData ? JSON.stringify(binanceData, null, 2) : 'Waiting for data...'}</pre>
    </>
  )
}

export default App
