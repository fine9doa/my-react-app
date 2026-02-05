import React, { useEffect, useRef } from 'react'
import AOS from 'aos'
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

function Product() {
  const swiperRef = useRef(null)

  useEffect(() => {
    // AOS 초기화
    AOS.init({
      duration: 750,
      once: false,
    })

    // Product Swiper 초기화 (기존 main.html 976번 줄)
    const mainprdSwiper = new Swiper('.main_prd_list .swiper-container', {
      modules: [Navigation, Pagination],
      pagination: {
        el: '.main_prd_list .swiper-pagination',
        type: 'fraction',
        formatFractionCurrent: function (number) {
          return ('' + number).slice(-2)
        },
        formatFractionTotal: function (number) {
          return ('' + number).slice(-2)
        },
        renderFraction: function (currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' +
            ' / ' +
            '<span class="' + totalClass + '"></span>'
        }
      },
      navigation: {
        nextEl: '.main_prd_list .swiper-button-next',
        prevEl: '.main_prd_list .swiper-button-prev',
      },
      a11y: {
        prevSlideMessage: '이전 슬라이드',
        nextSlideMessage: '다음 슬라이드',
        slideLabelMessage: '총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.',
      },
      speed: 800,
      slidesPerView: 1,
      observer: true,
      observeParents: true,
      breakpoints: {
        // 1024 이상
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
          slidesPerGroup: 4,
        }
      },
      on: {
        init: function () {
          // 초기화시 aria 속성 설정 (기존 main.html 1015번 줄)
          const slides = document.querySelectorAll('.main_prd_list .swiper-slide')
          slides.forEach(slide => slide.setAttribute('aria-hidden', 'true'))
          const activeSlide = document.querySelector('.main_prd_list .swiper-slide.swiper-slide-active')
          if (activeSlide) {
            activeSlide.setAttribute('aria-hidden', 'false')
            const txtBox = activeSlide.querySelector('.txt_box')
            if (txtBox) txtBox.setAttribute('tabIndex', '0')
          }

          // 네비게이션 버튼 SVG 제거
          const prevBtn = document.querySelector('.main_prd_list .swiper-button-prev')
          const nextBtn = document.querySelector('.main_prd_list .swiper-button-next')
          if (prevBtn) {
            const svg = prevBtn.querySelector('svg')
            if (svg) svg.remove()
          }
          if (nextBtn) {
            const svg = nextBtn.querySelector('svg')
            if (svg) svg.remove()
          }
        },
        slideChange: function () {
          // 슬라이드 변경시 (기존 main.html 1020번 줄)
          const index = this.activeIndex
          const slides = document.querySelectorAll('.main_prd_list .swiper-slide')
          
          slides.forEach(slide => {
            slide.setAttribute('aria-hidden', 'true')
            const txtBox = slide.querySelector('.txt_box')
            if (txtBox) txtBox.setAttribute('tabIndex', '-1')
          })

          if (slides[index]) {
            slides[index].setAttribute('aria-hidden', 'false')
            const txtBox = slides[index].querySelector('.txt_box')
            if (txtBox) txtBox.setAttribute('tabIndex', '0')
          }
        }
      },
    })

    swiperRef.current = mainprdSwiper

    return () => {
      if (mainprdSwiper) mainprdSwiper.destroy()
    }
  }, [])

  return (
    <section className="main_prd_list max_1440">
      <div className="inner">
        {/* 타이틀 */}
        <h4 className="tit_depth4" data-aos="fade-up">Product</h4>

        {/* Swiper 슬라이더 */}
        <div className="swiper-container slider" data-aos="fade-up">
          <ul className="prd_list_wrap swiper-wrapper">
            {/* 슬라이드 1 - NEW */}
            <li className="new swiper-slide">
              <a href="#">
                <div className="img_area">
                  <div className="img_wrap">
                    <img src="/assets/images/temp/prd_list_img1.png" alt="" />
                  </div>
                </div>
                <p className="txt_item">YANG-NYEOM CHICKEN SAUCE_ORIGINAL</p>
              </a>
            </li>

            {/* 슬라이드 2 */}
            <li className="swiper-slide">
              <a href="#">
                <div className="img_area">
                  <div className="img_wrap">
                    <img src="/assets/images/temp/prd_list_img2.png" alt="" />
                  </div>
                </div>
                <p className="txt_item">HONEY CITRON TEA(HALAL)</p>
              </a>
            </li>

            {/* 슬라이드 3 */}
            <li className="swiper-slide">
              <a href="#">
                <div className="img_area">
                  <div className="img_wrap">
                    <img src="/assets/images/temp/prd_list_img1.png" alt="" />
                  </div>
                </div>
                <p className="txt_item">YANG-NYEOM CHICKEN SAUCE_ORIGINAL</p>
              </a>
            </li>

            {/* 슬라이드 4 */}
            <li className="swiper-slide">
              <a href="#">
                <div className="img_area">
                  <div className="img_wrap">
                    <img src="/assets/images/temp/prd_list_img2.png" alt="" />
                  </div>
                </div>
                <p className="txt_item">HONEY CITRON TEA(HALAL)</p>
              </a>
            </li>

            {/* 슬라이드 5 */}
            <li className="swiper-slide">
              <a href="#">
                <div className="img_area">
                  <div className="img_wrap">
                    <img src="/assets/images/temp/prd_list_img1.png" alt="" />
                  </div>
                </div>
                <p className="txt_item">YANG-NYEOM CHICKEN SAUCE_ORIGINAL</p>
              </a>
            </li>

            {/* 슬라이드 6 */}
            <li className="swiper-slide">
              <a href="#">
                <div className="img_area">
                  <div className="img_wrap">
                    <img src="/assets/images/temp/prd_list_img2.png" alt="" />
                  </div>
                </div>
                <p className="txt_item">HONEY CITRON TEA(HALAL)</p>
              </a>
            </li>

            {/* 슬라이드 7 */}
            <li className="swiper-slide">
              <a href="#">
                <div className="img_area">
                  <div className="img_wrap">
                    <img src="/assets/images/temp/prd_list_img1.png" alt="" />
                  </div>
                </div>
                <p className="txt_item">YANG-NYEOM CHICKEN SAUCE_ORIGINAL</p>
              </a>
            </li>

            {/* 슬라이드 8 */}
            <li className="swiper-slide">
              <a href="#">
                <div className="img_area">
                  <div className="img_wrap">
                    <img src="/assets/images/temp/prd_list_img2.png" alt="" />
                  </div>
                </div>
                <p className="txt_item">HONEY CITRON TEA(HALAL)</p>
              </a>
            </li>

            {/* 슬라이드 9 */}
            <li className="swiper-slide">
              <a href="#">
                <div className="img_area">
                  <div className="img_wrap">
                    <img src="/assets/images/temp/prd_list_img1.png" alt="" />
                  </div>
                </div>
                <p className="txt_item">YANG-NYEOM CHICKEN SAUCE_ORIGINAL</p>
              </a>
            </li>

            {/* 슬라이드 10 */}
            <li className="swiper-slide">
              <a href="#">
                <div className="img_area">
                  <div className="img_wrap">
                    <img src="/assets/images/temp/prd_list_img2.png" alt="" />
                  </div>
                </div>
                <p className="txt_item">HONEY CITRON TEA(HALAL)</p>
              </a>
            </li>
          </ul>
        </div>

        {/* 컨트롤러 */}
        <div className="controls" data-aos="fade-up">
          <div className="swiper-pagination"></div>
          <a href="#" className="swiper-button-prev btn_prev">
            <span className="sr_only">이전 페이지로</span>
          </a>
          <a href="#" className="swiper-button-next btn_next">
            <span className="sr_only">다음 페이지로</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Product
