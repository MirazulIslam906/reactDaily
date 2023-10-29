import { React, useEffect, useState } from 'react'
import Countries from './Countries';
import SearchCountry from './searchCountry';

const Country = () => {
const [loading, setLoadig] = useState(false);
  const [error, setError] = useState('');
  const [data, setDeta] = useState([]) 
  const [filterCountry, setFilterCountry] = useState([])
//  console.log(filterCountry)
  
  const faceData = async () => {
    
    try {
    setLoadig(true)
  const URI = "https://restcountries.com/v3.1/all"
  const feceData = await fetch(URI);
  const data = await feceData.json()
      setDeta(data)
      setFilterCountry(data)
   setLoadig(false)   

  } catch (e) {
    setError(e.message)
  }

}
   useEffect(() => {
      
      faceData()
   },[])
   
  // const handleFilterCountry = () => {
      
  //   }
  
  
  console.log(error)
  
  // data.map((item) => {
  //   console.log(item.name.common)
  // })
  function handleRemoveCountry(counrty) {
    const resultFromFilterCountry = filterCountry.filter((singleCountry) => {
       
       return singleCountry.name.common !== counrty
    }) 

    console.log(resultFromFilterCountry)
   setFilterCountry(resultFromFilterCountry) 

  }
   
  const handleSearchCountry = (name) => {
    const value = name.toLowerCase()
      const resultFromFilterCountry = data.filter((singleCountry) => {
        const country = singleCountry.name.common.toLowerCase();
        return country.startsWith(value)
        //  setFilterCountry(searchResult) 
      
      //  return singleCountry.name.common !== counrty
      }) 
    
    console.log(resultFromFilterCountry)
 setFilterCountry(resultFromFilterCountry)
  }

  return (
    <div className='mx-20 '>
      <SearchCountry handleSearchCountry ={handleSearchCountry}  />
      <h1>{error}</h1>
      {loading ? <h2 className='text-2xl'>Loading...</h2> : ''}

      {filterCountry && <Countries handleRemoveCountry={handleRemoveCountry}  countries={filterCountry} />}
    </div>
  )
}

export default Country
