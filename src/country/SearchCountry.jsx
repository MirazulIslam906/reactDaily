import React, { useEffect, useState } from 'react'


const SearchCountry = (props) => {
  const [value, setValue] = useState("")
  
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  useEffect(() => {
    props.handleSearchCountry(value)
  }, [value])
  
  return (
    <div className='flex justify-center items-center'>
        <input className='w-1/2 outline-none border-[1px] py-2 px-4 mx-auto rounded-md' onChange={handleChange} value={value} placeholder='Find your country' type="text" />
    </div>
  )
}

export default SearchCountry
