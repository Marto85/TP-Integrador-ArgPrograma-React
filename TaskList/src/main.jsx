import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import '../src/components/App.jsx'
import '../src/styles/Index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="container-fluid">
      <App />
    </div>
  </React.StrictMode>,
)
