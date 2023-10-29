import React from 'react'
import SingleCountey from './SingleCountey'


const Countries = (props) => {
  return (
    <div className='grid md:grid-cols-4'>
      {
        props.countries.map((item) => {
          return <SingleCountey removeCountry={props.handleRemoveCountry} singleCountey={item} />
   })
      }

      
    </div>
  )
}

export default Countries
{/* <SingleCountry singleCountry={item} /> */}