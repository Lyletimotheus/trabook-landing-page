import React from 'react'
import TestimonialCard from './TestimonialCard'

function Testimonials() {
  return (
    <section className='px-32 my-[120px] py-[120px] bg-white-lilac'>
        <div className='container max-w-screen-xl mx-auto flex'>
            <div className='mr-[120px]'>
                <h2 className='font-bold font-serif text-5xl'>What people say<br /><span className='text-crusta'> about us.</span></h2>
                <p className='mt-6 mb-16 text-dove-gray-200'>Our Clients send us bunch of smilies with our services and we love them.</p>
            </div>
            <TestimonialCard />
        </div>
    </section>  )
}

export default Testimonials