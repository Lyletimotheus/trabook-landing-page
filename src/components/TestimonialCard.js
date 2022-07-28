import React, { useState, useEffect } from 'react'
import { client } from "../client"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

function TestimonialCard() {
    const [testimonialData, setTestimonialData] = useState([]);

    useEffect(() => {
        client
          .fetch(`*[_type == "testimonials"]{
            fullName,
            location,
            description,
            imgUrl{
                asset->{
                    _id,
                    url
                },
                alt
            }
          }`)
          .then((data) => setTestimonialData(data))
          .catch(console.error);
        }, [])

  return (
    <div>      
        <Swiper
            loop={true}
            direction={"vertical"}
            className="mySwiperTestimonial"
        >
            {testimonialData.map((testimonial, index) => (
            <SwiperSlide>
                <div className='cursor-pointer relative shadow-lg rounded pt-7 pr-[68px] pb-[121px] pl-[34px] w-[504px] h-[245px] ml-4'>
                    <img src={testimonial.imgUrl.asset.url} alt="" className='absolute top-[-23px] left-[-13px] rounded-full w-[50px] h-[50px] object-cover'/>
                    <div className='ml-6'>
                        <p className='text-base font-medium text-tundora mb-[34px]'>“{testimonial.description}”</p>
                        <span className='text-lg font-semibold text-mine-shaft mb-[5px] leading-[27px]'>{testimonial.fullName}</span>
                        <span className='block text-sm font-medium text-dove-gray-200'>{testimonial.location}</span>
                    </div>
                </div>
            </SwiperSlide>
            ))}
        </Swiper>
  </div>
  )
}

export default TestimonialCard