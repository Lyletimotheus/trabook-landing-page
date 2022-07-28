import React from 'react'
import { FaAngleDown } from "react-icons/fa";


function Jumbotron() {
  return (
    <section className='container mx-auto px-32 flex flex-col items-center'>
        <div className='flex items-center justify-around'>
            <div className='flex flex-col'>
                <h1 className='font-bold font-serif text-[64px] leading-[70px]'>Get started with your exciting <span className='text-crusta'>journey</span> with us.</h1>
                <p className='text-xl text-dove-gray-200 mt-8'>A Team of experienced tourism professionals will provide you with the best advice and tips for your desire place.</p>
                <button className='w-[178px] border-2 py-[14px] px-[28px] rounded-[5px] border-crusta text-crusta mt-16'>Discover Now</button>
            </div>
            <img src="/images/home-image.png" alt="" className='w-[785px]'/>
        </div>

        <div className='shadow-lg flex justify-around py-8 px-6 rounded mt-14 w-[890px]'>
            <div>
                <div className='flex items-center'>
                    <p className='text-base font-medium mr-1.5'>Location</p>
                    <FaAngleDown color="#FA7436" />
                </div>
                <p className='text-xs mt-2.5 text-dove-gray-200'>Where are you going</p>
            </div>
            <div className='mx-[100px]'>
                <div className='flex items-center'>
                    <p className='text-base font-medium mr-1.5'>Date</p>
                    <FaAngleDown color="#FA7436" />
                </div>
                <p className='text-xs mt-2.5 text-dove-gray-200'>When will you go</p>
            </div>
            <div className='mr-[100px]'>
                <div className='flex items-center'>
                    <p className='text-base font-medium mr-1.5'>Guest</p>
                    <FaAngleDown color="#FA7436" />
                </div>
                <p className='text-xs mt-2.5 text-dove-gray-200'>Number of guest</p>
            </div>
            <button className='w-[178px] py-[14px] px-[28px] rounded-[5px] bg-crusta text-white-lilac font-medium'>Sign Up</button>
        </div>

    </section>
  )
}

export default Jumbotron