import React from 'react'
import DealsCard from './DealsCard'

function Deals() {
  return (
    <section className='px-32 my-[120px]'>
      <div className='text-center'>
          <h2 className='font-bold font-serif text-5xl'>Exclusive<span className='text-crusta'> deals & discounts</span></h2>
          <p className='mt-6 mb-16 text-dove-gray-200'>Discover our fantastic early booking discounts<br /> & start planning your journey.</p>
      </div>
      <DealsCard />
    </section>

  )
}

export default Deals