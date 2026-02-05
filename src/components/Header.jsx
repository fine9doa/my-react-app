import React, { useState, useEffect } from 'react'

function Header() {
  // 상태 관리
  const [isMenuOpen, setIsMenuOpen] = useState(false) // 모바일 메뉴 열림/닫힘
  const [isLangOpen, setIsLangOpen] = useState(false) // 언어 선택 메뉴 열림/닫힘
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false) // 2depth 메뉴 열림/닫힘
  const [isHeaderOver, setIsHeaderOver] = useState(false) // PC 메뉴 호버 상태
  const [windowWidth, setWindowWidth] = useState(0) // 현재 화면 너비

  // 컴포넌트가 처음 로드될 때 화면 너비 설정
  useEffect(() => {
    setWindowWidth(window.innerWidth)
    
    // 화면 크기 변경 감지 (기존 common.js의 resize 이벤트)
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      
      // PC 화면으로 전환시 모바일 메뉴 초기화
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false)
        setIsSubMenuOpen(false)
        document.body.classList.remove('layer_activated')
      }
    }

    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // 모바일 햄버거 메뉴 클릭 (기존 common.js 730번 줄)
  const handleMenuToggle = () => {
    window.scrollTo(0, 0)
    setIsMenuOpen(!isMenuOpen)
    setIsSubMenuOpen(false)
    
    // body에 layer_activated 클래스 토글
    if (!isMenuOpen) {
      document.body.classList.add('layer_activated')
    } else {
      document.body.classList.remove('layer_activated')
    }
  }

  // 모바일 1depth 메뉴 클릭 (기존 common.js 755번 줄)
  const handleSubMenuToggle = (e) => {
    e.preventDefault()
    if (windowWidth < 1024 && isMenuOpen) {
      setIsSubMenuOpen(!isSubMenuOpen)
    }
  }

  // 모바일 뒤로가기 버튼 클릭 (기존 common.js 763번 줄)
  const handleBackClick = () => {
    setIsSubMenuOpen(false)
  }

  // 언어 선택 버튼 클릭 (기존 common.js 698번 줄)
  const handleLangToggle = () => {
    setIsLangOpen(!isLangOpen)
  }

  // PC 메뉴 마우스 오버 (기존 common.js 631번 줄)
  const handleMouseEnter = () => {
    if (windowWidth > 1023) {
      setTimeout(() => {
        setIsHeaderOver(true)
      }, 200)
    }
  }

  // PC 메뉴 마우스 아웃 (기존 common.js 640번 줄)
  const handleMouseLeave = () => {
    if (windowWidth > 1023) {
      setIsHeaderOver(false)
    }
  }

  return (
    <header 
      id="header" 
      className={`header abs_header col_white ${isMenuOpen ? 'bg_white' : ''} ${isHeaderOver ? 'header_over' : ''}`}
      onMouseLeave={handleMouseLeave}
    >
      <div className="inner">
        <div className="h_wrap">
          {/* 로고 */}
          <h1 className="logo" style={{ display: isSubMenuOpen ? 'none' : 'block' }}>
            <a href="#">
              <i className="ico"><span className="sr_only">오뚜기</span></i>
            </a>
          </h1>

          {/* 뒤로가기 버튼 (모바일 2depth에서만 표시) */}
          <a 
            href="javascript:;" 
            className="btn_back" 
            onClick={handleBackClick}
            style={{ display: isSubMenuOpen ? 'block' : 'none' }}
          >
            이전메뉴
          </a>

          {/* 햄버거 메뉴 버튼 (모바일) */}
          <a 
            href="javascript:;" 
            className={`btn_dropdown ${isMenuOpen ? 'active' : ''}`}
            onClick={handleMenuToggle}
          >
            {isMenuOpen ? '닫기' : '전체메뉴'}
          </a>

          {/* 네비게이션 메뉴 */}
          <nav id="nav" className="nav">
            <ul className={`navbar ${isMenuOpen ? 'active' : ''}`}>
              {/* Company 메뉴 */}
              <li className="menu_item" onMouseEnter={handleMouseEnter}>
                <a href="" onClick={handleSubMenuToggle}><span>Company</span></a>
                <ul className={`sub_menu ${isSubMenuOpen && windowWidth < 1024 ? 'active' : ''}`} style={{ display: isHeaderOver && windowWidth > 1023 ? 'block' : '' }}>
                  <li className="menu_item"><a href="#">Overview</a></li>
                  <li className="menu_item"><a href="#">About Us</a></li>
                  <li className="menu_item"><a href="#">Business Places</a></li>
                </ul>
              </li>

              {/* ESG 메뉴 */}
              <li className="menu_item" onMouseEnter={handleMouseEnter}>
                <a href="" onClick={handleSubMenuToggle}><span>ESG</span></a>
                <ul className={`sub_menu ${isSubMenuOpen && windowWidth < 1024 ? 'active' : ''}`} style={{ display: isHeaderOver && windowWidth > 1023 ? 'block' : '' }}>
                  <li className="menu_item"><a href="#">Overview</a></li>
                  <li className="menu_item"><a href="#">Report</a></li>
                </ul>
              </li>

              {/* Products 메뉴 */}
              <li className="menu_item" onMouseEnter={handleMouseEnter}>
                <a href="" onClick={handleSubMenuToggle}><span>Products</span></a>
                <ul className={`sub_menu ${isSubMenuOpen && windowWidth < 1024 ? 'active' : ''}`} style={{ display: isHeaderOver && windowWidth > 1023 ? 'block' : '' }}>
                  <li className="menu_item"><a href="#">Brands</a></li>
                  <li className="menu_item"><a href="#">Products</a></li>
                </ul>
              </li>

              {/* PR 메뉴 */}
              <li className="menu_item" onMouseEnter={handleMouseEnter}>
                <a href="" onClick={handleSubMenuToggle}><span> PR</span></a>
                <ul className={`sub_menu ${isSubMenuOpen && windowWidth < 1024 ? 'active' : ''}`} style={{ display: isHeaderOver && windowWidth > 1023 ? 'block' : '' }}>
                  <li className="menu_item"><a href="#">SNS</a></li>
                  <li className="menu_item"><a href="#">AD</a></li>
                  <li className="menu_item"><a href="#">Character</a></li>
                  <li className="menu_item"><a href="#">rolypoly</a></li>
                </ul>
              </li>

              {/* Contact Us 메뉴 */}
              <li className="menu_item" onMouseEnter={handleMouseEnter}>
                <a href="" onClick={handleSubMenuToggle}><span>Contact Us</span></a>
                <ul className={`sub_menu ${isSubMenuOpen && windowWidth < 1024 ? 'active' : ''}`} style={{ display: isHeaderOver && windowWidth > 1023 ? 'block' : '' }}>
                  <li className="menu_item"><a href="#">Contact Us</a></li>
                </ul>
              </li>

              {/* 사이트맵 */}
              <li className="menu_item sitemap">
                <a href="#" className="btn_menu"><span className="sr_only">사이트맵으로 이동</span></a>
              </li>

              {/* 모바일 유틸 메뉴 */}
              <li className="util mo">
                <ul>
                  <li><a href="#" className="link">Otoki Mall</a></li>
                </ul>
              </li>
            </ul>
          </nav>

          {/* 언어 선택 */}
          <div className="lang" style={{ display: isSubMenuOpen ? 'none' : 'block' }}>
            <a 
              href="javascript:;" 
              className={`btn_lang ${isLangOpen ? 'active' : ''}`}
              onClick={handleLangToggle}
              aria-haspopup="true" 
              aria-expanded={isLangOpen}
            >
              EN
            </a>
            <div id="dropLang" className="lang_menu" style={{ display: isLangOpen ? 'block' : 'none' }}>
              <ul>
                <li><a href="#" target="_blank" title="새창열림">KR</a></li>
                <li className="active"><a href="#" target="_blank" title="새창열림">EN</a></li>
              </ul>
            </div>
          </div>

          {/* PC 유틸 메뉴 */}
          <div className="util pc">
            <ul>
              <li><a href="#" target="_blank" className="link" title="새창열림">Otoki mall</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
