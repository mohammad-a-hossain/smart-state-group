
'ues client'

import { Pagination,  Autoplay } from 'swiper';
import FeatureCard from './featureCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useDesktop } from '@/hooks/useDesktopHook';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export const PropertySlider = ({data}) => {
  const { isDesktop} = useDesktop()

  return (
    <Swiper
   
    spaceBetween={10}
    slidesPerView={isDesktop ? 3 : 1}
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
