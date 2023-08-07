import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

import casa1 from '../casa1.jpeg'
import casa2 from '../casa2.jpeg'
import casa3 from '../casa3.jpeg'
import casa4 from '../casa1.jpeg'
import casa5 from '../casa2.jpeg'
import casa6 from '../casa3.jpeg'

const houseImages = [
    { id: 1, src: casa1, alt: 'Casa 1' },
    { id: 2, src: casa2, alt: 'Casa 2' },
    { id: 3, src: casa3, alt: 'Casa 3' },
    { id: 4, src: casa4, alt: 'Casa 4' },
    { id: 5, src: casa5, alt: 'Casa 5' },
    { id: 6, src: casa6, alt: 'Casa 6' },
];

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        
        {houseImages.map((image) => (
            <div key={image.id} className="col-md-4 mb-4">
                <SwiperSlide>
                    <img src={image.src} alt={image.alt} className="img-fluid rounded" />
                </SwiperSlide>
            </div>
        ))}
      </Swiper>
    </>
  );
}
