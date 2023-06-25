// 'ues client'

// import React from 'react'
// import { Navigation, Pagination } from 'swiper';
// // Direct React component imports
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Styles must use direct files imports
// // import 'swiper/swiper.scss'; // core Swiper
// // import 'swiper/modules/navigation/navigation.scss'; // Navigation module
// // import 'swiper/modules/pagination/pagination.scss'; // Pagination module


//  //import "swiper/swiper/min.css";

//  import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";



// export const PropertySlider = () => {
//   return (
//     <Swiper
//     slidesPerView={3}
//     spaceBetween={30}
//     pagination={{
//       clickable: true,
//     }}

//     className="mySwiper"
//   >
//     <SwiperSlide>Slide 1</SwiperSlide>
//     <SwiperSlide>Slide 2</SwiperSlide>
//     <SwiperSlide>Slide 3</SwiperSlide>
//     <SwiperSlide>Slide 4</SwiperSlide>
//     <SwiperSlide>Slide 5</SwiperSlide>
//     <SwiperSlide>Slide 6</SwiperSlide>
//     <SwiperSlide>Slide 7</SwiperSlide>
//     <SwiperSlide>Slide 8</SwiperSlide>
//     <SwiperSlide>Slide 9</SwiperSlide>
//   </Swiper>
//   )
// }

'ues client'

import { Navigation, Pagination,  Autoplay } from 'swiper';
import FeatureCard from './featureCard'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const PropertySlider = ({data}) => {

  return (
    <Swiper
   
    spaceBetween={10}
    slidesPerView={3}
    loop={true}
    loopfillgroupwithblank={true}
    centeredSlides={true}
    autoplay={{delay:2000,disableOnIntraction:true}}
    pagination={{dynamicBullets:true}}
    modules={[Autoplay,Pagination]}
    className='mySwiper'
    
    >
     {data.map((property) =>(
        <SwiperSlide key={property.id}>
        <FeatureCard {...property} />
        </SwiperSlide>
        
    ))} 
    
    </Swiper>
  );
};
