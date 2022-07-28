import React, { useState, useEffect } from 'react'
import { client } from "../client"
import { FaStar, FaLocationArrow } from "react-icons/fa"
import { Swiper, SwiperSlide } from 'swiper/react'

function PlanCard() {
    const [vacationData, setVacationData] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "vacation"]{
        city,
        rating,
        tripLength,
        price,
        imgUrl{
            asset->{
                _id,
                url
            },
            alt
        }
      }`)
      .then((data) => setVacationData(data))
      .catch(console.error);
    }, [])

  return (
    <div>
        <Swiper
            spaceBetween={80}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className="mySwiper"
        >
            {vacationData.map((vacation, index) => ( 
                <SwiperSlide key={index}>
                    <div className='border-2 w-[369px] border-mercury rounded-lg cursor-pointer'>
                        <div className='relative'>
                            <img src={vacation.imgUrl.asset.url} alt="" className='h-72 w-full object-cover rounded hover:opacity-75 '/>
                        </div>
                        <div className='flex justify-between items-center mt-8'>
                            <h4 className='text-2xl font-medium ml-4'>{vacation.city}</h4>
                            <div className='flex items-center'>
                                <span className='ml-2 mr-4 text-crusta text-2xl font-semibold'>${vacation.price}k</span>
                            </div>
                        </div>
                        <div className='flex justify-between mt-[18px] mb-8'>
                            <div className='flex items-center'>
                                <FaLocationArrow color="#FA7436" className='ml-4 mr-2'/>
                                <span className='text-base text-dove-gray-200'>{vacation.tripLength} Days Trip</span>
                            </div>
                            <div className='flex items-center'>
                                <FaStar color="#FFC107"/>
                                <span className='ml-2 mr-4 text-base text-dove-gray-200'>${vacation.rating}</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>

  )
}

export default PlanCard