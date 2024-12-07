import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../styles/TopSlider.scss'; 
import '../styles/custom.scss'
import 'swiper/swiper-bundle.css';  
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const TopSlider = () => {
  const slides = [
    '5 days easy returns',
    'Styled more than 100,000 Clients',
    'Shipping Happiness to 200 Countries (FREE Over US$200)',
    'Seamless Video Shopping Experience',
    'Designer Quality styles',
    'Free Shipping within India',
  ];

  return (
    <div className="top-info-slider bg-black py-2 text-white">
      <Swiper
        loop={true}
        autoplay={{ delay: 2000 }}
        spaceBetween={5}
        speed={2000}
        slidesPerView={1}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {slides.map((text, index) => (
          <SwiperSlide key={index}>
            <div className="d-flex align-items-center justify-content-center gap-2">
              <span className="text-xs text-center">{text}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopSlider;

