import React, { useEffect, useRef, useState } from 'react'
import AOS from 'aos'
import Swiper from 'swiper'

function OttogiSns() {
  const swiperRef = useRef(null)
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    // AOS 초기화
    AOS.init({
      duration: 750,
      once: false,
    })

    // 초기 화면 너비 설정
    setWindowWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    // SNS Swiper 초기화 (기존 main.html 1032번 줄)
    let snsSwiper = null

    function initSnsSwiper() {
      const currentWidth = window.innerWidth

      // 모바일에서만 Swiper 활성화 (1023px 이하)
      if (currentWidth <= 1023) {
        if (!snsSwiper) {
          snsSwiper = new Swiper('.ottogi_sns .swiper-container', {
            speed: 600,
            slidesPerView: 1.15,
            spaceBetween: 15,
            observer: true,
            observeParents: true,
          })
          swiperRef.current = snsSwiper
        }
      } else {
        // PC에서는 Swiper 제거
        if (snsSwiper) {
          snsSwiper.destroy()
          snsSwiper = null
          swiperRef.current = null
        }
      }
    }

    // 초기화
    initSnsSwiper()

    // 리사이즈 이벤트 처리 (기존 main.html 1061번 줄)
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      initSnsSwiper()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      if (snsSwiper) {
        snsSwiper.destroy()
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [windowWidth])

  return (
    <section className="ottogi_sns max_1440">
      <div className="inner">
        {/* 타이틀 영역 */}
        <div className="tit_wrap">
          <h4 className="tit_depth4" data-aos="fade-up">SNS</h4>
          <a href="#" className="btn_more" title="오뚜기 SNS 더보기">
            더보기
          </a>
        </div>

        {/* 탭 컨텐츠 영역 */}
        <div className="tab_cont_wrap">
          {/* tab1 */}
          <div className="swiper-container slide1 tab_cont active" title="열림">
            <ul className="swiper-wrapper list">
              {/* 슬라이드 1 */}
              <li className="swiper-slide">
                <a href="#" target="_blank" title="새창열림">
                  <p className="sns_id">otoki_daily</p>
                  <div className="img_box">
                    <img src="/assets/images/temp/temp.jpg" alt="" />
                  </div>
                  <div className="txt_box">
                    <p className="tit">Bodle Bodle Cheese Ramen Brand Day in Thailand🇹🇭K-Ramen Brand...</p>
                  </div>
                </a>
              </li>

              {/* 슬라이드 2 */}
              <li className="swiper-slide">
                <a href="#" target="_blank" title="새창열림">
                  <p className="sns_id">otoki_daily</p>
                  <div className="img_box">
                    <img src="/assets/images/temp/temp2.jpg" alt="" />
                  </div>
                  <div className="txt_box">
                    <p className="tit">Bodle Bodle Stir-Fry Cheese Ramen🧀Do you remember the previous...</p>
                  </div>
                </a>
              </li>

              {/* 슬라이드 3 */}
              <li className="swiper-slide">
                <a href="#" target="_blank" title="새창열림">
                  <p className="sns_id">otoki_daily</p>
                  <div className="img_box">
                    <img src="/assets/images/temp/temp3.jpg" alt="" />
                  </div>
                  <div className="txt_box">
                    <p className="tit">What's for dinner?🤨⠀Mine's "Otoki Spicy Cheese Ramen"!</p>
                  </div>
                </a>
              </li>

              {/* 슬라이드 4 */}
              <li className="swiper-slide">
                <a href="#" target="_blank" title="새창열림">
                  <p className="sns_id">otoki_daily</p>
                  <div className="img_box">
                    <img src="/assets/images/temp/temp4.jpg" alt="" />
                  </div>
                  <div className="txt_box">
                    <p className="tit">✨Trendy K-PLACE X K-FOOD✨ Season 11Do you know 'JEON'?</p>
                  </div>
                </a>
              </li>

              {/* 슬라이드 5 */}
              <li className="swiper-slide">
                <a href="#" target="_blank" title="새창열림">
                  <p className="sns_id">otoki_daily</p>
                  <div className="img_box">
                    <img src="/assets/images/temp/temp5.jpg" alt="" />
                  </div>
                  <div className="txt_box">
                    <p className="tit">WELCOME TO TTOGI's KITCHEN Ep.2👨‍🍳The 2nd K-food that we...</p>
                  </div>
                </a>
              </li>

              {/* 슬라이드 6 */}
              <li className="swiper-slide">
                <a href="#" target="_blank" title="새창열림">
                  <p className="sns_id">otoki_daily</p>
                  <div className="img_box">
                    <img src="/assets/images/temp/temp6.jpg" alt="" />
                  </div>
                  <div className="txt_box">
                    <p className="tit">Food tour around the world with Yellows🌎It's time to reveal the...</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          {/* //tab1 */}
        </div>
      </div>
    </section>
  )
}

export default OttogiSns
