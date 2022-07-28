import React, { useState, useEffect } from 'react'
import { client } from "../client"
import { Swiper, SwiperSlide } from 'swiper/react'
// import required modules
import { Pagination } from "swiper";

function BlogCard() {
    const [blogData, setBlogData] = useState([]);

      useEffect(() => {
    client
      .fetch(`*[_type == "blog"]{
        title,
        date,
        imgUrl{
            asset->{
                _id,
                url
            },
            alt
        }
      }`)
      .then((data) => setBlogData(data))
      .catch(console.error);
    }, [])

  return (
    <div>
        <Swiper
            loop={true}
            centeredSlides={false}
            spaceBetween={30}
            slidesPerView={4}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className="mySwiperBlog max-w-screen-xl mt-16 mx-auto"
        >
            {blogData.map((blog, index) => ( 
                <SwiperSlide key={index}>
                    <div className='w-[270px] rounded-lg cursor-pointer'>
                        <div className='relative'>
                            <img src={blog.imgUrl.asset.url} alt="" className='h-72 w-full object-cover rounded hover:opacity-75 '/>
                        </div>
                        <div className='mt-6'>
                            <h4 className='text-lg font-medium text-mine-shaft'>{blog.title}</h4>
                            <span className='block mt-4 text-dusty-gray text-base font-normal'>{blog.date}</span>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>

    </div>
  )
}

export default BlogCard