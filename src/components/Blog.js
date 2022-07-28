import React from 'react'
import BlogCard from './BlogCard'

function Blog() {
  return (
        <section className='px-32 my-[120px]'>
            <div className='text-center'>
                <h2 className='font-bold font-serif text-5xl'>Get update with <span className='text-crusta'> latest blog</span></h2>
            </div>
            <BlogCard />
        </section>  
  )
}

export default Blog