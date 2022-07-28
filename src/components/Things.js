import React from 'react'
import ThingsCard from './ThingsCard'

function Things() {
  return (
    <section className='bg-white-lilac px-32 my-[120px] w-full'>
        <div className='text-center pt-32'>
            <h2 className='font-bold font-serif text-5xl'>Things you need <span className='text-crusta'>to do</span></h2>
            <p className='mt-6 text-dove-gray-200'>We ensure that you’ll embark on a perfectly planned,<br /> safe vacation at a price you can afford.</p>
        </div>
        <div className='container mx-auto flex justify-center gap-[30px]'>
            <ThingsCard 
                image="/images/thing-1.png" 
                title="Sign Up"
                description="Completes all the work associated with planning and processing"
            />
            <ThingsCard 
                image="/images/thing-2.png" 
                title="Worth of Money"
                description="After successful access then book from exclusive deals & pricing"
            />
            <ThingsCard 
                image="/images/thing-3.png" 
                title="Exciting Travel"
                description="Start and explore a wide range of exciting travel experience."
            />
        </div>

    </section>
  )
}

export default Things