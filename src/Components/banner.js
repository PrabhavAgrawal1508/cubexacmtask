import React from 'react'
import '../Styles/banner.css'
import backbg from '../Assets/backgroundbanner.svg.png'
import backdes from '../Assets/div.cta-block.png'
import rightlogo from '../Assets/rightarrow.png'
function banner() {
  return (
    <div className='bannermain'>
        <img src={backdes} className='bannerlayout'/>
        
        <div className='featurelayout'>
            <p className='featuretextbanner'>Save Time and build products faster</p>
            <div className='bannerdesc'>
                <p className='bannerdesctext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut metus nunc.</p>
                <div className='buttonbanner'>
                    <img src={rightlogo} className='rightimgbannerbutton'/>
                    <p className='bannertext'>Get Started</p>
                </div>
            </div>
        </div>
        <img src={backbg} className='backgroundbannerdes'/>
        






    </div>
  )
}

export default banner