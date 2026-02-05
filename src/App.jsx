import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Visual from './components/Visual'
import AboutOttogi from './components/AboutOttogi'
import EsgManage from './components/EsgManage'
import BrandStory from './components/BrandStory'
import Product from './components/Product'
import OttogiSns from './components/OttogiSns'
import FloatingPopup from './components/FloatingPopup'
import TopButton from './components/TopButton'

function App() {
  return (
    <div className="wrap">
      <Header />
      <main id="container" className="container main">
        <Visual />
        <AboutOttogi />
        <EsgManage />
        <BrandStory />
        <Product />
        <OttogiSns />
      </main>
      <Footer />
      <FloatingPopup />
      <TopButton />
    </div>
  )
}

export default App
