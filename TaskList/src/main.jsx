import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import '../src/components/App.jsx'
import '../src/styles/Menu.css'
import '../src/styles/Index.css'
import '../src/styles/Tasklist.css'
import '../src/styles/Taskitem.css'
import '../src/styles/Taskform.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="container-fluid">
      <App />
    </div>
  </React.StrictMode>,
)
