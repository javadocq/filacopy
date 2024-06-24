import React from 'react';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';

import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import '../Homepage.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Homepage() {
  return (
    <div className="homepage-container">
      <nav className="navbar">
        <div className="navbar-brand">
          <a href="/">
            <h1 className="logo">FILA</h1>
          </a>
        </div>
        <div className="navbar-nav">
          <span className="nav-item">MEMBERS</span>
          <span className="nav-item">WEEK</span>
          <span className="nav-item">WOMEN</span>
          <span className="nav-item">MEN</span>
          <span className="nav-item">KIDS</span>
          <span className="nav-item">TENNIS</span>
          <span className="nav-item">BRAND</span>
        </div>
      </nav>

      <div className="banner-container">
        <Swiper
          className="banner"
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <div className="banner-image" style={{ backgroundImage: `url(${image3})` }} />
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner-image" style={{ backgroundImage: `url(${image4})` }} />
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner-image" style={{ backgroundImage: `url(${image5})` }} />
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner-image" style={{ backgroundImage: `url(${image6})` }} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
