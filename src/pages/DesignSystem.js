import React from 'react'

function DesignSystem() {
  return (
    <section className="container mx-auto">
      <h1 className="text-center text-7xl font-bold">Design System</h1>
      <div>
        <h2 className='font-bold font-sans text-[50px] text-outer-space text-center mt-12'>Colors</h2>

        <div className='flex'>
          <div className='mr-[156px]'>
            <h3 className='mb-6 text-lg font-semibold text-outer-space'>Primary Colors</h3>
            <div className='flex'>
              <div className='flex flex-col mr-7'>
                <span className="w-20 h-20 bg-crusta"></span>
                <span className='mt-2 ml-2 text-xs'>#FA7436</span>
              </div>
              <div className='flex flex-col'>
                <span className="w-20 h-20 bg-mine-shaft"></span>
                <span className='mt-2 ml-2 text-xs'>#222222</span>
              </div>
            </div>
          </div>
          {/* SECONDARY COLORS */}
          <div>
            <h3 className='mb-6 text-lg font-semibold text-outer-space'>Secondary Colors</h3>
            <div className='flex'>
              <div className='flex flex-col mr-7'>
                <span className="w-20 h-20 bg-dodger-blue"></span>
                <span className='mt-2 ml-2 text-xs'>#4086F4</span>
              </div>
              <div className='flex flex-col'>
                <span className="w-20 h-20 bg-selective-yellow"></span>
                <span className='mt-2 ml-2 text-xs'>#FFB60A</span>
              </div>
            </div>
          </div>
        </div>

        <div className='flex mt-12'>
          <div className='mr-12'>
              <h3 className='mb-6 text-lg font-semibold text-outer-space'>Text Colors</h3>
              <div className='flex'>
                <div className='flex flex-col mr-7'>
                  <span className="w-20 h-20 bg-mine-shaft"></span>
                  <span className='mt-2 ml-2 text-xs'>#222222</span>
                </div>
                <div className='flex flex-col mr-7'>
                  <span className="w-20 h-20 bg-tundora"></span>
                  <span className='mt-2 ml-2 text-xs'>#444444</span>
                </div> 
                <div className='flex flex-col'>
                  <span className="w-20 h-20 bg-dove-gray-200"></span>
                  <span className='mt-2 ml-2 text-xs'>#666666</span>
                </div> 
              </div>
          </div>
          {/* ICON COLORS */}
          <div>
              <h3 className='mb-6 text-lg font-semibold text-outer-space'>Icon Colors</h3>
              <div className='flex'>
                <div className='flex flex-col mr-7'>
                  <span className="w-20 h-20 bg-dusty-gray"></span>
                  <span className='mt-2 ml-2 text-xs'>#999999</span>
                </div>
                <div className='flex flex-col mr-7'>
                  <span className="w-20 h-20 bg-mercury"></span>
                  <span className='mt-2 ml-2 text-xs'>#E5E5E5</span>
                </div> 
                <div className='flex flex-col'>
                  <span className="w-20 h-20 bg-crusta"></span>
                  <span className='mt-2 ml-2 text-xs'>#FA7436</span>
                </div> 
              </div>
          </div>
        </div>

        <div className='flex mt-12'>
          <div className='mr-60'>
              <h3 className='mb-6 text-lg font-semibold text-outer-space'>Button</h3>
              <div className='flex'>
                <div className='flex flex-col mr-7'>
                  <span className="w-20 h-20 bg-crusta"></span>
                  <span className='mt-2 ml-2 text-xs'>#FA7436</span>
                </div>
              </div>
          </div>
          {/* ICON COLORS */}
          <div>
              <h3 className='mb-6 text-lg font-semibold text-outer-space'>Background</h3>
              <div className='flex'>
                <div className='flex flex-col mr-7'>
                  <span className="w-20 h-20 bg-crusta"></span>
                  <span className='mt-2 ml-2 text-xs'>#FA7436</span>
                </div>
                <div className='flex flex-col mr-7'>
                  <span className="w-20 h-20 bg-bianca border-2 border-dusty-gray"></span>
                  <span className='mt-2 ml-2 text-xs'>#FEFCFB</span>
                </div> 
                <div className='flex flex-col'>
                  <span className="w-20 h-20 bg-white-lilac"></span>
                  <span className='mt-2 ml-2 text-xs'>#F7F8FC</span>
                </div> 
              </div>
          </div>
        </div>

      </div>

      <div className='flex flex-col'>
        <h2 className='font-bold font-sans text-[50px] text-outer-space text-center mt-12'>Typography</h2>
        <div className='flex flex-col justify-between'>
          <h3 className='text-5xl'><span className='font-bold'>Font:</span> Poppins, Volkhov</h3>
          <p className='font-bold font-serif text-[64px]'>Headline 1, 64px</p>
          <p className='font-bold font-serif text-5xl'>Headline 2, 48px</p>
          <p className='font-2xl font-medium'>Headline 3, 24px</p>
          <p className='font-2xl font-medium'>Title, 24px</p>
          <p className='text-xl'>Paragraph 1, 20px</p>
          <p className='text-lg'>Paragraph 2, 18px</p>
          <p className='text-base'>Content, 16px</p>
          <p className='text-base'>Paragraph, 16px</p>
          <p className='text-base'>Nav Menu, 16px</p>
        </div>
      </div>

      <div>
        <h2 className='font-bold font-sans text-[50px] text-outer-space text-center mt-12'>Buttons</h2>
        <button className='w-[178px] border-2 py-[14px] px-[28px] rounded-[5px] border-crusta mr-12'>Discover Now</button>
        <button className='w-[178px] py-[14px] px-[28px] rounded-[5px] bg-crusta text-white-lilac font-medium'>Sign Up</button>
      </div>
    </section>
  )
}

export default DesignSystem
