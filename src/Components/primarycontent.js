import React from 'react'
import '../Styles/primarycontent.css'
import primary from '../Assets/primarycontent.png'
import red from '../Assets/reddot.png'
import yellow from '../Assets/yellowdot.png'
import green from '../Assets/greendot.png'
import right from '../Assets/rightarrow.png'
function primarycontent() {
  return (
    <div className='primary_main_container'>
        <div className='head_text_wrapper'>
            <a href='/' className='buttonicon'><p className='buttontext'>Get Started</p>
            <img src={right} className='arrowlogo'></img></a>
            <p className='subtext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut metus nunc, fermentum id ex non, dapibus hendrerit eros.</p>
            <p className='maintext'>Cubex makes it easy to run your business.</p>
            <div className='statusdes'><img src={red} className='redshow'/>
                <img src={yellow} className='yellowshow'/>
                <img src={green} className='greenshow'/>
            </div>
        </div>
        <div className='imageprimary'>
            <img src={primary}/>

        </div>



    </div>
  )
}

export default primarycontent