import React from 'react'
import '../Styles/Announcement_bar.css'
import des1 from '../Assets/design_announcement.png'
function Announcement_bar() {
  return (
    <div className='announcement_bar_main_container'> 
        <div className='bar_design_left'>
            <img src={des1} className='des1l_1'/>
            <img src={des1} className='des1l_2'/>
            <img src={des1} className='des1l_3'/>
            <img src={des1} className='des1l_4'/>
        </div>
        <div className='announcement_text'>
            Use this announcement bar to inform visitors of something important.
        </div>
        <div className='bar_design_right'>
            <img src={des1} className='des1r_1'/>   
            <img src={des1} className='des1r_2'/>
            <img src={des1} className='des1r_3'/>
            <img src={des1} className='des1r_4'/>
        </div>
    
    
    </div>
  )
}

export default Announcement_bar