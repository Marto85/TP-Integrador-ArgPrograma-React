import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import './Menu.css'
import './Index.css'
import './Tasklist.css'
import './Taskitem.css'
import './Taskform.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="container-fluid">
      <App />
    </div>
  </React.StrictMode>,
)
