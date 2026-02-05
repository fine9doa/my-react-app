import React, { useState, useEffect } from 'react'

function FloatingPopup() {
  const [isOpen, setIsOpen] = useState(true) // 기본값: 열려있음
  const [reachEnd, setReachEnd] = useState(false) // 푸터 도달 여부

  // 열기 버튼 클릭 (기존 main.html 922번 줄)
  const handleOpenClick = () => {
    setIsOpen(true)
  }

  // 닫기 버튼 클릭 (기존 main.html 929번 줄)
  const handleCloseClick = () => {
    setIsOpen(false)
  }

  // 키보드 Enter 이벤트 처리 (기존 main.html 933번 줄)
  const handleCloseKeyDown = (e) => {
    if (e.key === 'Enter') {
      const openBtn = document.querySelector('.fixed_floating .btn_open')
      if (openBtn) {
        openBtn.setAttribute('tabindex', '0')
        openBtn.focus()
      }
      const links = document.querySelectorAll('.fixed_floating .img_wrap a, .fixed_floating .img_wrap button')
      links.forEach(link => link.setAttribute('tabindex', '-1'))
    }
  }

  const handleOpenKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      const openBtn = document.querySelector('.fixed_floating .btn_open')
      if (openBtn) openBtn.setAttribute('tabindex', '-1')
      setIsOpen(true)
      
      const closeBtn = document.querySelector('.fixed_floating .btn_close')
      if (closeBtn) closeBtn.focus()
      
      const links = document.querySelectorAll('.fixed_floating .img_wrap a, .fixed_floating .img_wrap button')
      links.forEach(link => link.setAttribute('tabindex', '0'))
    }
  }

  // 푸터에 닿는 시점에 팝업과 푸터 겹치지 않도록 (기존 main.html 952번 줄)
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const footer = document.querySelector('.footer')
      
      if (footer) {
        const footerTop = footer.offsetTop
        const scrollPosition = windowHeight + window.scrollY

        if (scrollPosition >= footerTop) {
          setReachEnd(true)
        } else {
          setReachEnd(false)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`fixed_floating ${isOpen ? 'open' : ''} ${reachEnd ? 'reach_end' : ''}`}>
      <button 
        type="button" 
        className="btn_open" 
        tabIndex="-1"
        onClick={handleOpenClick}
        onKeyDown={handleOpenKeyDown}
      >
        <span className="sr_only">팝업 열기</span>
      </button>
      <div className="img_wrap">
        <div className="img_box">
          <a href="#">
            <img src="/assets/images/common/floating_popup1.png" alt="" />
          </a>
        </div>
        <div className="img_box">
          <a href="#">
            <img src="/assets/images/common/floating_popup2.png" alt="" />
          </a>
        </div>
        <button 
          type="button" 
          className="btn_close"
          onClick={handleCloseClick}
          onKeyDown={handleCloseKeyDown}
        >
          <span className="sr_only">팝업 닫기</span>
        </button>
      </div>
    </div>
  )
}

export default FloatingPopup
