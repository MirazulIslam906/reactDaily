import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Class from './components/Class.jsx'
import Child from "./inheritance/Child.jsx"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Child />
    {/* <Class name="Mirazul"/> */}
  </React.StrictMode>,
)
