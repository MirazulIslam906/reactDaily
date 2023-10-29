import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child from './inheritance/Child'
import Counter from './components/Counter'
import ClickButton from './ClickableFunction/ClickButton'
import Weather from './weatherapp/weather'
import Country from './country/Country'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="">
       <Weather />
       <Country />
       
    {/* <Child /> */}
    {/* <Class name="Mirazul"/> */}
    {/* <Counter /> */}
    {/* <WithCounter/> */}
    {/* <ClickButton/> */}
    {/* <TestFile/> */}
      </div>

    </>
  )
}

export default App
