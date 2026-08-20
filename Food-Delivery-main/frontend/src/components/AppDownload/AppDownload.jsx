import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/frontend_assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        {/* Yahan spelling theek kar di hai aur Tomato ki jagah CraveCart likh diya hai */}
        <p>For Better Experience Download <br /> CraveCart App</p>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt="Play Store" />
            <img src={assets.app_store} alt="App Store" />
        </div>
    </div>
  )
}

export default AppDownload