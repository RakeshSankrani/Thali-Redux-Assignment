import React from 'react'
import Thali from '../Images/Thali.png'

const Banner = () => {
  return (
    <div className='header-container py-5'>
        <div className='banner-body p-2'>
            <div className=''>
             <img src={Thali} alt='' className='banner_image'/>
            </div>
            <div className=''>
              <h1>Order Your Happiness</h1>
              <p> As you need, When you need...</p>
            </div>
        </div>
    </div>
  )
}

export default Banner