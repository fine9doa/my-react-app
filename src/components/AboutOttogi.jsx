import React, { useEffect, useRef } from 'react'
import AOS from 'aos'
import lottie from 'lottie-web'

function AboutOttogi() {
  // Lottie 애니메이션을 위한 ref
  const lottie1 = useRef(null)
  const lottie2 = useRef(null)
  const lottie3 = useRef(null)
  const lottie4 = useRef(null)

  useEffect(() => {
    // AOS 초기화
    AOS.init({
      duration: 750,
      once: false,
    })

    // Lottie 애니메이션 로드 (기존 HTML의 lottie-player를 lottie-web으로 변환)
    
    // Lottie 1 - about1_600x255.json
    if (lottie1.current) {
      const anim1 = lottie.loadAnimation({
        container: lottie1.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/assets/json/about1_600x255.json'
      })
      
      return () => anim1.destroy()
    }
  }, [])

  useEffect(() => {
    // Lottie 2 - about2_420x290.json
    if (lottie2.current) {
      const anim2 = lottie.loadAnimation({
        container: lottie2.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/assets/json/about2_420x290.json'
      })
      
      return () => anim2.destroy()
    }
  }, [])

  useEffect(() => {
    // Lottie 3 - about3_410x285.json
    if (lottie3.current) {
      const anim3 = lottie.loadAnimation({
        container: lottie3.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/assets/json/about3_410x285.json'
      })
      
      return () => anim3.destroy()
    }
  }, [])

  useEffect(() => {
    // Lottie 4 - lab4_567x689.json
    if (lottie4.current) {
      const anim4 = lottie.loadAnimation({
        container: lottie4.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/assets/json/lab4_567x689.json'
      })
      
      return () => anim4.destroy()
    }
  }, [])

  return (
    <section className="about_ottogi">
      <div className="inner">
        {/* 스크롤 아이콘 */}
        <i className="ico" data-aos="fade-up">
          <span className="sr_only">SCROLL</span>
        </i>

        {/* 메인 타이틀 */}
        <h3 className="tit_main" data-aos="fade-up">
          Delighting Taste World<br />Global Otoki
        </h3>

        {/* 아이템 영역 */}
        <div className="item_wrap">
          {/* 아이템 1 - Superior Quality Products */}
          <div className="item item1">
            <div className="img_box" data-aos="fade-up">
              <div className="thumb">
                <img src="/assets/images/common/clip1.jpg" alt="" className="fade1" />
                <img src="/assets/images/common/clip1_1.jpg" alt="" className="fade2" />
              </div>
              <div className="lt_wrap" data-aos="fade-up">
                <div ref={lottie1}></div>
              </div>
            </div>
            <div className="txt_box" data-aos="fade-up">
              <p className="tit">
                Superior Quality<br />
                <span className="point">Products</span>
              </p>
              <p className="desc">
                Otoki manufactures and delivers products using automated state-of-the-art production lines and in hygienic environments.
              </p>
              <a href="#" className="btn_more">
                <span className="sr_only">Products &gt; items 페이지로 이동</span>
              </a>
            </div>
          </div>

          {/* 아이템 2 - Since 1969 */}
          <div className="item item2">
            <div className="img_box" data-aos="fade-up">
              <div className="thumb">
                <svg className="svg">
                  <clipPath id="my-clip-path3" clipPathUnits="objectBoundingBox">
                    <path d="M0.5,1 C0.469,1,0.439,0.996,0.419,0.989 L0.049,0.855 C0.025,0.846,0,0.809,0,0.781 V0.219 C0,0.191,0.025,0.154,0.049,0.145 L0.419,0.011 C0.439,0.004,0.469,0,0.5,0 C0.531,0,0.561,0.004,0.581,0.011 L0.951,0.145 C0.975,0.154,1,0.191,1,0.219 V0.781 C1,0.809,0.975,0.846,0.951,0.855 L0.581,0.989 C0.561,0.996,0.531,1,0.5,1"></path>
                  </clipPath>
                </svg>
                <div className="clipped path3">
                  <img src="/assets/images/common/clip2.jpg" alt="" className="fade1" />
                  <img src="/assets/images/common/clip2_1.jpg" alt="" className="fade2" />
                </div>
              </div>
              <div className="lt_wrap" data-aos="fade-up">
                <div ref={lottie2}></div>
              </div>
            </div>
            <div className="txt_box" data-aos="fade-up">
              <p className="tit">
                For greater nutrition,<br />
                <span className="point">Since 1969</span>
              </p>
              <p className="desc">
                <span className="br_pc">For over 50 years, Otoki's heartfelt food products</span> have been a source of nourishment for people.
              </p>
              <a href="#" className="btn_more">
                <span className="sr_only">overview 페이지로 이동</span>
              </a>
            </div>
          </div>

          {/* 아이템 3 - Better Food */}
          <div className="item item3">
            <div className="img_box" data-aos="fade-up">
              <div className="thumb">
                <svg className="svg">
                  <clipPath id="my-clip-path2" clipPathUnits="objectBoundingBox">
                    <path d="M0.9,0.9 C0.633,1,0.367,1,0.1,0.9 C-0.033,0.633,-0.033,0.367,0.1,0.1 C0.367,-0.033,0.633,-0.033,0.9,0.1 C1,0.367,1,0.633,0.9,0.9"></path>
                  </clipPath>
                </svg>
                <div className="clipped path2">
                  <img src="/assets/images/common/clip3.jpg" alt="" className="fade1" />
                  <img src="/assets/images/common/clip3_1.jpg" alt="" className="fade2" />
                </div>
              </div>
              <div className="lt_wrap" data-aos="fade-up">
                <div ref={lottie3}></div>
              </div>
            </div>
            <div className="txt_box" data-aos="fade-up">
              <p className="tit">
                We are striving<br />to <span className="point">provide better food.</span>
              </p>
              <p className="desc">
                Otoki always experiencing the joy and fulfillment of creation. We present advanced food to humanity.
              </p>
              <a href="#" className="btn_more">
                <span className="sr_only">overview_business 페이지로 이동</span>
              </a>
            </div>
          </div>

          {/* 아이템 4 - Global OTOKI */}
          <div className="item item4">
            <div className="img_box" data-aos="fade-up">
              <div className="thumb">
                <img src="/assets/images/common/clip4.jpg" alt="" className="fade1" />
                <img src="/assets/images/common/clip4_1.jpg" alt="" className="fade2" />
              </div>
              <div className="lt_wrap" data-aos="fade-up">
                <div ref={lottie4}></div>
              </div>
            </div>
            <div className="txt_box" data-aos="fade-up">
              <p className="tit">
                <span className="point">Global OTOKI</span>
              </p>
              <p className="desc">
                Until the day Otoki is placed on the tables of <span className="br_pc">people around the world, Otoki will continuously</span> listen to the needs of global customers.
              </p>
              <a href="#" className="btn_more">
                <span className="sr_only">overview 페이지로 이동</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutOttogi
