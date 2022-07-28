import React from 'react'

function Header() {
  return (
    <nav className='container mx-auto px-32 pt-8 pb-[96px]'>
        <div className='flex items-center justify-between'>
            <img src='/images/logo.png' alt='' className='w-[101px] h-fit'/>
            <ul className='flex items-center justify-between gap-x-8'>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>Destination</li>
                <li className='cursor-pointer'>Tour</li>
                <li className='cursor-pointer'>Blog</li>
            </ul>
            <ul className='flex items-center'>
                <li className='cursor-pointer mr-14'>Login</li>
                <li className='cursor-pointer w-[178px] py-[14px] px-[28px] rounded-[5px] bg-crusta text-white-lilac font-medium text-center'>Sign up</li>
            </ul>
        </div>
    </nav>
  )
}

export default Header