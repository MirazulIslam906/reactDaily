import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Child from "./inheritance/Child.jsx"
import Counter from './components/Counter.jsx'
import WithCounter from './higherOrderComponent/WithCounter.jsx'
import TestFile from './higherOrderComponent/TestFile.jsx'
import ClickButton from './ClickableFunction/ClickButton.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Child />
    {/* <Class name="Mirazul"/> */}
    <Counter />
    {/* <WithCounter/> */}
    <ClickButton/>
    <TestFile/>
  </React.StrictMode>,
)
