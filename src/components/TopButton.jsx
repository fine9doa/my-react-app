import React, { useState, useEffect } from 'react'

function TopButton() {
  const [isVisible, setIsVisible] = useState(false)

  // 스크롤 이벤트 처리 (기존 common.js 58번 줄)
  useEffect(() => {
    const handleScroll = () => {
      const windowTop = window.scrollY
      
      if (windowTop > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 상단 이동 클릭 (기존 common.js 67번 줄)
  const handleClick = (e) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="fixed_area">
      <a 
        href="#" 
        className={`btn_top ${isVisible ? 'on' : ''}`}
        onClick={handleClick}
      >
        <span className="sr_only">상단으로 이동하기</span>
      </a>
    </div>
  )
}

export default TopButton
