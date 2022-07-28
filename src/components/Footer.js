import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"


function Footer() {
  return (
    <section className='container mx-auto px-32'>
        <div className='flex justify-between'>
            <div>
                <img src="/images/logo.png" alt="" className='w-[130px] pb-6' />
                <p className='pb-4 text-base font-medium text-dove-gray-200 leading-8'>Book your trip in minutes, get full<br /> control for much longer.</p>
                <div className='flex'>
                    <FaFacebook className='text-tundora text-3xl cursor-pointer bg-white-lilac shadow-md rounded-full p-[5px]'/>
                    <FaInstagram className='cursor-pointer mx-5 bg-crusta text-3xl rounded-full p-[5px] text-white-lilac shadow-md'/>
                    <FaTwitter className='text-tundora text-3xl cursor-pointer bg-white-lilac shadow-md rounded-full p-[5px]'/>
                </div>
            </div>
            <div>
                <h5 className='text-lg font-semibold text-mine-shaft pb-4'>Company</h5>
                <h6 className='pb-4 text-lg text-dove-gray-200'>About</h6>
                <h6 className='pb-4 text-lg text-dove-gray-200'>Careers</h6>
                <h6 className='pb-4 text-lg text-dove-gray-200'>Logistic</h6>
                <h6 className='pb-4 text-lg text-dove-gray-200'>Privacy & Policy</h6>
            </div>
            <div>
                <h5 className='text-lg font-semibold text-mine-shaft pb-4'>Contact</h5>
                <h6 className='pb-4 text-lg text-dove-gray-200'>Help/FAQ</h6>
                <h6 className='pb-4 text-lg text-dove-gray-200'>Affiliates</h6>
            </div>
            <div>
                <h5 className='text-lg font-semibold text-mine-shaft pb-4'>More</h5>
                <h6 className='pb-4 text-lg text-dove-gray-200'>Press Centre</h6>
                <h6 className='pb-4 text-lg text-dove-gray-200'>Low fare tips</h6>
            </div>
        </div>
        <div className='border-b-[1px] border-dusty-gray my-10'></div>
        <div className='flex justify-between'>
            <span className='text-base text-dove-gray-200'>Copyright, Trabook 2022. All rights reserved.</span>
            <span className='text-base text-dove-gray-200'>Terms & Conditions</span>
        </div>
    </section>
  )
}

export default Footer