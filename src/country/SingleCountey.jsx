import React from 'react'

const SingleCountey = (props) => {
  const { name ,flags,maps} = props.singleCountey

  const onRemoveCountry = (name) => {
   props.removeCountry(name)
  }
  return (
    <div className=''>
      <div className="bg-gray-200 m-4 rounded-md p-6">
        <h1 className='text-2xl'>{name.common}</h1>
        <p>currencie:</p>
        <img src={flags.png} alt="" />
        <div className="googleMap">
          <a target='_blank' href={maps.googleMaps}>Show in google map</a>
          <button onClick={() => {
            onRemoveCountry(name.common)
          }} className='mt-4 py-2 px-4'>Remove Contry</button>
        </div>
      </div>
    </div>
  )
}

export default SingleCountey
