import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
//  2.png
import 'swiper/css/navigation';

import { Pagination,EffectCoverflow,Navigation } from 'swiper/modules';
import './Page6.css';

import slide_image_1 from './../assets/beautifulinterface/image1.svg';
import slide_image_2 from './../assets/beautifulinterface/image2.svg';
import slide_image_3 from './../assets/beautifulinterface/image3.svg';
import slide_image_4 from './../assets/beautifulinterface/image4.svg';
import slide_image_5 from './../assets/beautifulinterface/image5.svg';
// import { Heading } from './../components/Heading';


const Page6 = () => {
    return (
      // <div>
        
<div className="bg-[#eaf0ff] pt-[7.5rem] flex flex-col justify-center items-center">
  <h1 className="text-[#008080] text-[2rem] mb-2 font-bold">
    Beautiful Interface
  </h1>
  <div className="text-center"> 
    <h2 className="text-[#4c4cdb] text-[2.5rem] font-bold">
      User friendly interface making it easy to use<br/>
      for people of every age group
    </h2>


        
        {/* card container */}
        <div className="container">
      
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        // spaceBetween={10}
        initialSlide={2} // Set initial slide to the third one
        slidesPerView={3}
        // spaceBetween={'0px'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="slide_image" />
        </SwiperSlide> */}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow" hidden>
            
          </div>
          <div className="swiper-button-next slider-arrow" hidden>
            
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
     </div>
          </div>
    // </div>
      // </div>
      // </div>
    );
  };
  
  export default Page6;
  