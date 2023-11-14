import React from 'react';
import logo from './logo.svg';
import './App.css';
import Swiper from 'react-id-swiper';

function App() {
  const params = {
    lazy: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }
  return (
    <div>
    <Swiper {...params}>
      <div>
        <img
          alt="img"
          data-src="https://d1820pa95bipcd.cloudfront.net/files/a011dcc4777e4c88b074ded8d85934c0/content?width=426"
          className="swiper-lazy"
        />
        <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
      </div>
      <div>
        <img
          alt="img"
          data-src="https://d1820pa95bipcd.cloudfront.net/files/c2684d5adcb34af2a4299f4a88cb3b59/content?width=426"
          className="swiper-lazy"
        />
        <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
      </div>
      <div>
        <img
          alt="img"
          data-src="https://d1820pa95bipcd.cloudfront.net/files/44ae66fc97db467c8a195b7e3963e5a1/content?width=426"
          className="swiper-lazy"
        />
        <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
      </div>
      <div>
        <img
          alt="img"
          src="https://d1820pa95bipcd.cloudfront.net/files/c50b3e44a5634874bfdec41cce412fdc/content?width=426"
          className="swiper-lazy"
        />
        <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
      </div>
    </Swiper>
  </div>
  );
}

export default App;
