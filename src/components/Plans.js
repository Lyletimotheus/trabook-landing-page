import React from 'react'
import PlanCard from './PlanCard'

function Plans() {
  return (
        <section className='px-32 my-[120px]'>
            <div className='text-center'>
                <h2 className='font-bold font-serif text-5xl'>Best <span className='text-crusta'> vacation plan</span></h2>
                <p className='mt-6 mb-16 text-dove-gray-200'>Plan your perfect vacation with our travel agency. Choose<br /> among hundreds of all-inclusive offers!</p>
            </div>
            <PlanCard />
        </section>  
    )
}

export default Plans