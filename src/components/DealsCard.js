import React, { useState, useEffect } from 'react'
import { client } from "../client"
import { FaStar, FaMapMarkerAlt } from "react-icons/fa"
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

function DealsCard() {
    const [dealsData, setDealsData] = useState([]);
    const [hideBtn, setHideBtn] = useState(-1);

  useEffect(() => {
    client
      .fetch(`*[_type == "deals"]{
        city,
        rating,
        location,
        actualPrice,
        discountedPrice,
        imgUrl{
            asset->{
                _id,
                url
            },
            alt
        }
      }`)
      .then((data) => setDealsData(data))
      .catch(console.error);
    }, [])

  return (
    <div className='container mx-auto'>
        <Swiper
            spaceBetween={50}
            slidesPerView={4}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {dealsData.map((deal, index) => ( 
                <SwiperSlide key={index}>
                    <div 
                        className='border-2 w-[270px] border-mercury rounded-lg'
                        onMouseEnter={() => setHideBtn(index)}
                        onMouseLeave={() => setHideBtn(-1)}
                    >
                        <div className='relative'>
                            <img 
                                src={deal.imgUrl.asset.url} 
                                alt="" 
                                className='h-72 w-full object-cover rounded hover:opacity-75 '
                            />
                            <button className={hideBtn === index ? 'btn' : 'hidden'}>CLICK HERE</button>
                        </div>
                        <div className='flex justify-between items-center mt-8'>
                            <h4 className='text-2xl font-medium ml-4'>{deal.city}</h4>
                            <div className='flex items-center'>
                                <FaStar color="#FFC107"/>
                                <span className='ml-2 mr-4'>{deal.rating}</span>
                            </div>
                        </div>
                        <div className='flex justify-between mt-[18px] mb-8'>
                            <div className='flex items-center'>
                                <FaMapMarkerAlt color="#999999" className='ml-4 mr-2'/>
                                <span>{deal.location}</span>
                            </div>
                            <div>
                                <span className='line-through'>${deal.actualPrice}</span>
                                <span className='ml-2 mr-4 bg-karry rounded py-0.5 px-[5px] text-base font-semibold text-crusta'>${deal.discountedPrice}</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>

  )
}

export default DealsCard