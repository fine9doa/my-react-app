import React, { useEffect, useRef } from 'react'
import AOS from 'aos'
import lottie from 'lottie-web'

function EsgManage() {
  // Lottie 애니메이션을 위한 ref
  const lottieEsg = useRef(null)

  useEffect(() => {
    // AOS 초기화
    AOS.init({
      duration: 750,
      once: false,
    })

    // Lottie 애니메이션 로드
    if (lottieEsg.current) {
      const animEsg = lottie.loadAnimation({
        container: lottieEsg.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/assets/json/esg1_201x201.json'
      })

      return () => animEsg.destroy()
    }
  }, [])

  return (
    <section className="esg_manage max_1440">
      <div className="inner">
        {/* 메인 타이틀 */}
        <h3 className="tit_main" data-aos="fade-up">
          <span className="d_block">
            <span className="br">We will create</span>
            <span className="br">future value</span>
          </span>
          <span className="br">and a sustainable</span>
          <span className="br">food culture.</span>
        </h3>

        {/* ESG 컨텐츠 영역 */}
        <div className="esg_cont_wrap" data-aos="fade-up">
          <div className="esg_cont">
            {/* 이미지 영역 */}
            <div className="img_area">
              <div className="img_wrap">
                <img src="/assets/images/common/main_esg1.jpg" alt="Environment Society Governance" />
              </div>
              <div className="lt_wrap">
                <div ref={lottieEsg}></div>
              </div>
            </div>

            {/* 텍스트 영역 */}
            <div className="txt_wrap">
              <div className="tit_box">
                <strong className="tit">
                  Environment<br />Society<br />Governance
                </strong>
              </div>
              <div className="desc">
                <p>"We take meaningful steps to create a world of happiness through taste, and harmonizing with nature."</p>
                <a href="#" className="btn_more" title="ESG경영 소개 더보기">
                  <span className="sr_only">더보기</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EsgManage
