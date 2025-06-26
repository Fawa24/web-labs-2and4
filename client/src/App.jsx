import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [binanceData, setBinanceData] = useState()

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:5165/ws')
    ws.onmessage = (event) => {
      setBinanceData(event.data)
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
      <pre style={{whiteSpace: 'pre-wrap', wordBreak: 'break-all'}}>{binanceData ?? 'Waiting for data...'}</pre>
    </>
  )
}

export default App
