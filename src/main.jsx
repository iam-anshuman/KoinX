import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TrendingCoinProvider from './Context/TrendingCoinContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TrendingCoinProvider>
      <App />
    </TrendingCoinProvider>
  </React.StrictMode>,
)
