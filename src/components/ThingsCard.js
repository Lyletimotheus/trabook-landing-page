import React from 'react'

function ThingsCard(props) {
  return (
    <div className='rounded w-[370px] drop-shadow-2xl bg-bianca h-[278px] p-10 my-32'>
        <img src={props.image} alt="" className='mb-12'/>
        <h4 className='font-2xl font-semibold text-mine-shaft mb-4'>{props.title}</h4>
        <p className='text-base text-dove-gray-200'>{props.description}</p>
    </div>
  )
}

export default ThingsCard