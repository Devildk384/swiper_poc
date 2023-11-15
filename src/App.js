import React from 'react';
// import logo from '../public/kopie.png';
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
    <div className='prime_ads_wrapper'>
    <section className="prime_slider_section">
    <Swiper {...params}>
      {/* <div>
        <img
          alt="img"
          data-src="https://d1820pa95bipcd.cloudfront.net/files/a011dcc4777e4c88b074ded8d85934c0/content?width=426"
          className="swiper-lazy"
        />
        <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
      </div> */}
            <div className="slider_container">
                <div className="slider_inner">
                    {/* <ol className="slider_indicators">
                        <li className="active">&nbsp;</li>
                        <li>&nbsp;</li>
                        <li>&nbsp;</li>
                        <li>&nbsp;</li>
                        <li>&nbsp;</li>
                    </ol> */}
                    <div className="slider_item">
                        <img src="https://d1820pa95bipcd.cloudfront.net/files/c50b3e44a5634874bfdec41cce412fdc/content?width=426" className="h_100 img-fluid" alt="slider 01"/>
                        <div className="prime_decriptioin">
                            <div className="d-flex align-items-center">
                                <img src="svg_prime/kabs_icon.svg" className="prime_logo" alt="Kabs Prime"/>
                                <div className="text_prime">Prime</div>
                            </div>
                            <h2 className="type_h2 mt-3">GEOFF</h2>
                            <h5 className="type_h5">Ecksofa</h5>
                        </div>
                        <div className="slider_caption">
                            <h5 className="type_h5 letter_spacing">Probesitzen</h5>
                            <a href="javascript:void(0)" className="prime_btn mt-2">In den Warenkorb</a>
                        </div>
                        <div className="slider_footer">
                            <div className="footer_elem">
                                <img src="svg_prime/XMLID_1377_.svg"/>
                                <div className="footer_caption">Echtleder Bezug</div>
                            </div>
                            <div className="footer_elem">
                                <img src="svg_prime/XMLID_1107_.svg"/>
                                <div className="footer_caption">Sitzthärte: weich</div>
                            </div>
                            <div className="footer_elem">
                                <img src="svg_prime/XMLID_2951_.svg"/>
                                <div className="footer_caption">Pro Sitz: bis 140 Kg</div>
                            </div>
                            <div className="footer_elem">
                                <img src="svg_prime/Group 2784.svg"/>
                                <div className="footer_caption">Echtholz Rahmen</div>
                            </div>
                        </div>
                    </div>
                </div>
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
  </section>
  </div>
  );
}

export default App;
