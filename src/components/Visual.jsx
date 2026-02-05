import React, { useEffect, useRef, useState } from 'react'
import Swiper from 'swiper'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

function Visual() {
  const swiperRef = useRef(null)
  const swiper2Ref = useRef(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef(null)

  useEffect(() => {
    let mainSwiper = null
    let mainSwiper2 = null
    let vid = null

    // 메인비쥬얼 슬라이드 (기존 main.html 745번 줄)
    function initMainSwiper() {
      if (mainSwiper) { mainSwiper.destroy() }
      if (mainSwiper2) { mainSwiper2.destroy() }

      // Swiper 옵션 설정 (기존 main.html 752번 줄)
      const swiperOptions = {
        modules: [Navigation, Pagination, Autoplay],
        navigation: {
          nextEl: '.main_visual .swiper-button-next',
          prevEl: '.main_visual .swiper-button-prev',
        },
        a11y: {
          prevSlideMessage: '이전 슬라이드',
          nextSlideMessage: '다음 슬라이드',
          slideLabelMessage: '총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.',
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        speed: 1000,
        loop: true,
        pagination: {
          el: '.main_visual .swiper-pagination',
          type: 'fraction',
          clickable: true,
          renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span><span> / </span><span class="' + totalClass + '"></span>'
          },
        },
        breakpoints: {
          // 1023 이상 (기존 main.html 776번 줄)
          1023: {
            pagination: {
              formatFractionCurrent: function (number) {
                return ('0' + number).slice(-2)
              },
              formatFractionTotal: function (number) {
                return ('0' + number).slice(-2)
              },
              renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' +
                  '<span class="' + totalClass + '"></span>'
              }
            }
          }
        },
        on: {
          init: function () {
            // 초기화시 aria 속성 설정 (기존 main.html 794번 줄)
            const slides = document.querySelectorAll('.main_visual .swiper-slide')
            slides.forEach(slide => slide.setAttribute('aria-hidden', 'true'))
            const activeSlide = document.querySelector('.main_visual .swiper-slide.swiper-slide-active')
            if (activeSlide) {
              activeSlide.setAttribute('aria-hidden', 'false')
              const link = activeSlide.querySelector('a')
              if (link) link.setAttribute('tabIndex', '0')
            }

            // 네비게이션 버튼 안의 자동 생성된 SVG 제거
            const prevBtn = document.querySelector('.main_visual .swiper-button-prev')
            const nextBtn = document.querySelector('.main_visual .swiper-button-next')
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
            // 슬라이드 변경시 (기존 main.html 799번 줄)
            const index = this.activeIndex
            const slides = document.querySelectorAll('.main_visual .swiper-slide')

            slides.forEach(slide => {
              slide.setAttribute('aria-hidden', 'true')
              const link = slide.querySelector('a')
              if (link) link.setAttribute('tabIndex', '-1')
            })

            if (slides[index]) {
              slides[index].setAttribute('aria-hidden', 'false')
              const link = slides[index].querySelector('a')
              if (link) link.setAttribute('tabIndex', '0')
            }

            // 비디오 처리 (기존 main.html 806번 줄)
            const videoElement = slides[index]?.querySelector('video.video')
            if (videoElement) {
              vid = videoElement
              videoElement.setAttribute('id', 'myVideo' + index)
              const vidValue = videoElement.getAttribute('id')
              const vidValue2 = document.getElementById(vidValue)
              const cntSlide = document.querySelectorAll('.main_visual .swiper-slide')
              const pauseBtn = document.querySelector('.btn_wrap button')

              if (pauseBtn && pauseBtn.style.display === 'none') {
                vidValue2.pause()
              } else {
                vidValue2.play()
              }

              vidValue2.onloadedmetadata = function () {
                cntSlide[index].dataset.swiperAutoplay = Math.floor(vidValue2.duration) + '000'
              }
              if (index > 1) {
                cntSlide[index].dataset.swiperAutoplay = Math.floor(vidValue2.duration) + '000'
              }

              videoRef.current = vidValue2
            }
          }
        },
      }

      // mainSwiper 초기화 (기존 main.html 833번 줄)
      mainSwiper = new Swiper('.main_visual .swiper-container', swiperOptions)

      // mainSwiper2 초기화 - pagination2용 (기존 main.html 834번 줄)
      mainSwiper2 = new Swiper('.main_visual .swiper-container', {
        modules: [Pagination],
        a11y: {
          prevSlideMessage: '이전 슬라이드',
          nextSlideMessage: '다음 슬라이드',
          slideLabelMessage: '총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.',
        },
        loop: true,
        pagination: {
          el: '.main_visual .swiper-pagination2',
          type: 'bullets',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '<i></i>' + '<b></b>' + '</span>'
          },
        },
        breakpoints: {
          // 1023 이상
          1023: {
            pagination: {
              type: 'progressbar',
            }
          }
        },
      })

      swiperRef.current = mainSwiper
      swiper2Ref.current = mainSwiper2
    }

    initMainSwiper()

    // 리사이즈 이벤트 처리 (기존 main.html 866번 줄)
    const handleResize = () => {
      initMainSwiper()
      // 정지버튼 클릭후 resize되었을때 정지버튼 노출
      const playButton2 = document.querySelector('.main_visual .swiper-button-play')
      const pauseButton2 = document.querySelector('.main_visual .swiper-button-pause')
      if (playButton2) playButton2.style.display = 'none'
      if (pauseButton2) pauseButton2.style.display = 'block'
      setIsPlaying(true)
    }

    window.addEventListener('resize', handleResize)

    // 슬라이드 포커스되었을때 자동재생 정지 (기존 main.html 875번 줄)
    function pauseAutoplay2() { if (mainSwiper) mainSwiper.autoplay.stop() }
    function resumeAutoplay2() { if (mainSwiper) mainSwiper.autoplay.start() }

    const slides2 = document.querySelectorAll('.main_visual .swiper-slide a')
    let isPausedByButton2 = false

    slides2.forEach(function (slide) {
      // 탭 키로 슬라이드에 포커스되었을 때 이벤트 처리 (기존 main.html 883번 줄)
      slide.addEventListener('focus', function () {
        if (!isPausedByButton2) {
          pauseAutoplay2()
        }
      })

      // 포커스가 해제되면 다시 자동 재생 시작 (기존 main.html 892번 줄)
      slide.addEventListener('blur', function () {
        if (!isPausedByButton2) {
          resumeAutoplay2()
        }
      })
    })

    // 정지 버튼 클릭 (기존 main.html 899번 줄)
    const pauseButton2 = document.querySelector('.main_visual .swiper-button-pause')
    const playButton2 = document.querySelector('.main_visual .swiper-button-play')

    const handlePauseClick = () => {
      pauseAutoplay2()
      isPausedByButton2 = true
      if (pauseButton2) pauseButton2.style.display = 'none'
      if (playButton2) {
        playButton2.style.display = 'block'
        playButton2.focus()
      }
      if (videoRef.current) {
        videoRef.current.pause()
      }
      setIsPlaying(false)
    }

    // 재생 버튼 클릭 (기존 main.html 909번 줄)
    const handlePlayClick = () => {
      resumeAutoplay2()
      isPausedByButton2 = false
      if (playButton2) playButton2.style.display = 'none'
      if (pauseButton2) {
        pauseButton2.style.display = 'block'
        pauseButton2.focus()
      }
      if (videoRef.current) {
        videoRef.current.play()
      }
      setIsPlaying(true)
    }

    if (pauseButton2) pauseButton2.addEventListener('click', handlePauseClick)
    if (playButton2) playButton2.addEventListener('click', handlePlayClick)

    // 정리 함수
    return () => {
      if (mainSwiper) mainSwiper.destroy()
      if (mainSwiper2) mainSwiper2.destroy()
      window.removeEventListener('resize', handleResize)
      if (pauseButton2) pauseButton2.removeEventListener('click', handlePauseClick)
      if (playButton2) playButton2.removeEventListener('click', handlePlayClick)
    }
  }, [])

  return (
    <section className="main_visual">
      <div className="inner">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {/* 슬라이드 1 */}
            <div className="swiper-slide">
              <div className="pc_visual">
                <img src="/assets/images/temp/main_slide4_pc.jpg" alt="" />
                <a href="#" className="btn_link">
                  <img src="/assets/images/temp/main_slide4_pc_btn.png" alt="" />
                </a>
              </div>
              <div className="mo_visual">
                <img src="/assets/images/temp/main_slide4.jpg" alt="" />
                <a href="#" className="btn_link">
                  <img src="/assets/images/temp/main_slide4_btn.png" alt="" />
                </a>
              </div>
            </div>

            {/* 슬라이드 2 */}
            <div className="swiper-slide">
              <div className="pc_visual">
                <img src="/assets/images/temp/main_slide5_pc.jpg" alt="" />
                <a href="#" className="btn_link">
                  <img src="/assets/images/temp/main_slide5_pc_btn.png" alt="" />
                </a>
              </div>
              <div className="mo_visual">
                <img src="/assets/images/temp/main_slide5.jpg" alt="" />
                <a href="#" className="btn_link">
                  <img src="/assets/images/temp/main_slide5_btn.png" alt="" />
                </a>
              </div>
            </div>

            {/* 슬라이드 3 */}
            <div className="swiper-slide">
              <div className="pc_visual">
                <img src="/assets/images/temp/main_slide6_pc.jpg" alt="" />
                <a href="#" className="btn_link">
                  <img src="/assets/images/temp/main_slide6_pc_btn.png" alt="" />
                </a>
              </div>
              <div className="mo_visual">
                <img src="/assets/images/temp/main_slide6.jpg" alt="" />
                <a href="#" className="btn_link">
                  <img src="/assets/images/temp/main_slide6_btn.png" alt="" />
                </a>
              </div>
            </div>

            {/* 슬라이드 4 */}
            <div className="swiper-slide">
              <div className="pc_visual">
                <img src="/assets/images/temp/main_slide7_pc.jpg" alt="" />
                <a href="#" className="btn_link">
                  <img src="/assets/images/temp/main_slide7_pc_btn.png" alt="" />
                </a>
              </div>
              <div className="mo_visual">
                <img src="/assets/images/temp/main_slide7.jpg" alt="" />
                <a href="#" className="btn_link">
                  <img src="/assets/images/temp/main_slide7_btn.png" alt="" />
                </a>
              </div>
            </div>

            {/* 슬라이드 5 - 비디오 슬라이드 */}
            <div className="swiper-slide" data-swiper-autoplay="10000">
              <div className="pc_visual">
                <strong className="msg_hidden">WELCOME TO<br />OTOKI'S GLOVAL<br />INSTAGRAM</strong>
                <video className="video mask" autoPlay muted preload="auto" loop playsInline>
                  <source src="/assets/video/main_video.mp4" type="video/mp4" />
                </video>
                <div className="slide_cont">
                  <h2 className="tit_slide">
                    We contribute to the health <br />and improve the dietary habits of all mankind
                  </h2>
                </div>
              </div>
              <div className="mo_visual">
                <img src="/assets/images/temp/main_slide0.jpg" alt="" />
                <div className="slide_cont">
                  <h2 className="tit_slide">
                    We contribute to the health <br />and improve the dietary habits of all mankind
                  </h2>
                </div>
              </div>
            </div>

            {/* 슬라이드 6 */}
            <div className="swiper-slide">
              <a href="#">
                <div className="pc_visual">
                  <img src="/assets/images/temp/main_slide1_pc.jpg" alt="" />
                </div>
                <div className="mo_visual">
                  <div className="slide_cont">
                    <h2 className="tit_slide">
                      We contribute to the health <br />and improve the dietary habits of all mankind
                    </h2>
                  </div>
                  <img src="/assets/images/temp/main_slide1.jpg" alt="" />
                </div>
              </a>
            </div>

            {/* 슬라이드 7 */}
            <div className="swiper-slide">
              <a href="#">
                <div className="pc_visual">
                  <img src="/assets/images/temp/main_slide2_pc.jpg" alt="" />
                </div>
                <div className="mo_visual">
                  <div className="slide_cont">
                    <h2 className="tit_slide">
                      We contribute to the health <br />and improve the dietary habits of all mankind
                    </h2>
                  </div>
                  <img src="/assets/images/temp/main_slide2.jpg" alt="" />
                </div>
              </a>
            </div>

            {/* 슬라이드 8 */}
            <div className="swiper-slide">
              <a href="#">
                <div className="pc_visual">
                  <img src="/assets/images/temp/main_slide3_pc.jpg" alt="" />
                </div>
                <div className="mo_visual">
                  <div className="slide_cont">
                    <h2 className="tit_slide">
                      We contribute to the health <br />and improve the dietary habits of all mankind
                    </h2>
                  </div>
                  <img src="/assets/images/temp/main_slide3.jpg" alt="" />
                </div>
              </a>
            </div>
          </div>

          {/* 컨트롤러 영역 - 기존 HTML과 완전 동일 */}
          <div className="controls">
            <div className="swiper-pagination"></div>
            <div className="swiper-pagination2"></div>
            <div className="btn_wrap">
              <button type="button" className="swiper-button-pause type2">
                <span className="sr_only">전체 정지</span>
              </button>
              <button type="button" className="swiper-button-play type2">
                <span className="sr_only">전체 재생</span>
              </button>
            </div>
            <button type="button" className="swiper-button-prev type2"></button>
            <button type="button" className="swiper-button-next type2"></button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Visual
