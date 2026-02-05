import React, { useState } from 'react'

function Footer() {
  // 모바일 아코디언 메뉴 상태 관리 (기존 common.js 797번 줄)
  const [activeAccordion, setActiveAccordion] = useState(null)

  // 아코디언 토글 함수 (기존 common.js 797번 줄)
  const handleAccordionToggle = (index) => {
    if (activeAccordion === index) {
      setActiveAccordion(null) // 이미 열려있으면 닫기
    } else {
      setActiveAccordion(index) // 새로운 아코디언 열기
    }
  }

  return (
    <footer id="footer" className="footer">
      <div className="inner">
        <div className="f_cont">
          <div className="f_wrap">
            {/* 푸터 로고 */}
            <div className="f_logo">
              <a href="#">
                <i className="ico"><span className="sr_only">오뚜기</span></i>
              </a>
            </div>

            {/* 푸터 메뉴 링크 */}
            <ul className="f_toggle">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Customer Service</a></li>
              <li><a href="#">Business Places</a></li>
              <li><a href="#" className="ico_arw">Otoki mall(kor)</a></li>
            </ul>

            {/* 우측 정보 영역 */}
            <div className="pos_right">
              {/* 고객센터 전화번호 */}
              <div className="f_number">
                <dl>
                  <dt>Ramen Customer Center</dt>
                  <dd>080-088-1212</dd>
                </dl>
                <span className="txt">(Weekdays Only 08:30~17:00)</span>
              </div>
              
              {/* 저작권 표시 (PC) */}
              <p className="copyright">© OTOKI CORP. ALL RIGHTS RESERVED</p>
            </div>
          </div>
        </div>

        {/* 저작권 표시 (모바일) */}
        <p className="copyright_m">© OTOKI CORP. ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  )
}

export default Footer
