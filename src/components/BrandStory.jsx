import React, { useEffect } from 'react'
import AOS from 'aos'

function BrandStory() {
  // AOS 초기화
  useEffect(() => {
    AOS.init({
      duration: 750,
      once: false,
    })

    window.addEventListener('scroll', () => {
      AOS.refresh()
    })

    return () => {
      window.removeEventListener('scroll', () => {
        AOS.refresh()
      })
    }
  }, [])

  return (
    <section className="brand_story">
      <div className="inner">
        {/* 메인 타이틀 */}
        <h3 className="tit_main" data-aos="fade-up">
          <span className="d_block">We believe</span> 
          <span className="br"> "delicious food starts</span> with fresh ingredients"
        </h3>

        {/* 비주얼 영역 */}
        <div className="visual">
          <img src="/assets/images/temp/main_brand_mo.jpg" alt="" />
          
          {/* 텍스트 영역 */}
          <div className="txt_wrap">
            <span className="ottogi" data-aos="fade-up">OTOKI</span>
            <div className="d_flex" data-aos="fade-up">
              <span className="brand">BRAND</span>
              <span className="story">STORY</span>
            </div>
            <p className="desc" data-aos="fade-up">
              Otoki's Story: Tradition & Evolution, Synergy, Potential, Value and the Future.
            </p>
          </div>

          {/* 더보기 버튼 */}
          <div className="btn_wrap" data-aos="fade-up">
            <a href="#" className="btn_more type2" title="브랜드스토리 더보기">
              <span className="sr_only">더보기</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandStory
