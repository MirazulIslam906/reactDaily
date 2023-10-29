import {React,useEffect,useState } from 'react'
import img from '../assets/weatherimage.png'
const Weather = () => {
  const [loading, setLoading] = useState(false)
  const [val, setVal] = useState("")
  const [data, setDeta] = useState([]);
  const handleValue = event => {
      const fallBack =  event.target.value
     setVal(fallBack)
  } 
  useEffect(() => {
      console.log("Hi I am useEffect Hook")
  },[])
  const click = async () => {
      setLoading(true)
    const appKey = "f670da5d8401d3723dd36403464de1f9";
    const uri = `https://api.openweathermap.org/data/2.5/weather?q=${val}&units=Metric&APPID=${appKey}`;
    await fetch(uri)
      .then((req) => req.json())
        .then((data) => setDeta(data));
    setLoading(false)
  }

  console.log(data)
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className="main md:w-1/3 mx-2 h-[80vh] p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md relative">
        {data.message == 'Nothing to geocode' ? <div className='absolute  bg-black top-[70px] left-0 flex justify-center items-center w-full h-full'>
             <h2 className='-mt-20 text-2xl text-white'>Opps! we find no country</h2>
        </div> :  data.message == 'city not found' ?  <div className='absolute  bg-black top-[70px] left-0 flex justify-center items-center w-full h-full'>
             <h2 className='-mt-20 text-2xl text-white'>Opps! we find no country</h2>
        </div> : ''
        }

        <div className="input flex gap-4 w-fit mx-auto">
          <input onChange={handleValue} name='name' value={val} placeholder='Search your country' className='outline-0 rounded-full p-2' type="text" />
          <div onClick={click} className='bg-white p-2 w-fit rounded-full cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>

          </div>
        </div>
        {loading && <h2 className='text-2xl text-white text-center'>Loading...</h2>}
        <img className='w-6/12 mx-auto my-4' src={img} alt="tsr" />
        <h3 className='text-center text-white'>{val =="" ? 'Search From Input Box' : "" }</h3>
        <h1 className={`text-center ${val !== "" ? "text-[70px]" : "text-[10px]" } text-white`}>{val =="" ? 'No country found': Math.floor(data?.main?.temp)} °C</h1>
        <h2 className='text-center text-white text-2xl'>{data?.name}</h2>
        <div className="flex gap-10 mt-10 justify-center">
        <div className="humidity">
            <p className='text-center text-white'>{data?.main?.humidity }</p>
          <h2 className='text-center text-white'>Humidity</h2>
          </div>
          
        <div className="humidity">
          <p className='text-center text-white'>45k/per hour</p>
          <h2 className='text-center text-white'>Wind speed</h2>
        </div>
        </div>
     </div>
    </div>
  )
}

export default Weather
