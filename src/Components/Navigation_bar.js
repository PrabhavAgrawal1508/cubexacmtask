import React from 'react'
import '../Styles/Navigation_bar.css'
import logo from '../Assets/logo.png'
import des2 from '../Assets/logo side.png'
import arrow from '../Assets/downarrow.png'

function Navigation_bar() {
  return (
    <div className='navigation_main_container'>
      <div className='navigation_sub_main_container'>
        <div className='navigation_button'>
          <a href="/" className="loginbutton"><p className='logintext'>Login</p></a>
          <a href='/' className='registerbutton'><p className='registertext'>Register</p></a>
        </div>
        <div className='navigation_link_wrapper'>
          <img src={logo} className='logo'/>
          <img src={des2} className='des2l'/>
          <div className='navigationwrapper_buttons'>
            <p className='overviewtext'>Overview</p>
            <a href="/" className="homebutton"><p className='hometext'>Home</p></a>
            <p className='abouttext'>About</p>
            <p className='pricingtext'>Pricing</p>
            <div className='dropdownpages'>
              <p className="pagestext">Pages</p>
              <img src={arrow} className='arrowclass'/>
            </div>
          </div>
         
        
        </div>
        
        </div> 

    </div>
  )
}

export default Navigation_bar