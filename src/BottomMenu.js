import React from 'react'
import Footer from './Footer'
import Contact from './Contact'
import './css/bottomMenu.css'

export default function BottomMenu() {
  return (
    <div className='bottom-menu'>
        <Contact />
        <Footer />
    </div>
  )
}
