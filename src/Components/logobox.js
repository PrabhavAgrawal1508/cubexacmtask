import React from 'react'
import '../Styles/logobox.css'
import logodivide from '../Assets/div.logo-divider.png'
import xpenglogo from '../Assets/xpeng.svg.png'
import veroxfloor from '../Assets/veroxfloor.svg.png'
import triballogo from '../Assets/tribal.svg.png'
import rpublicalogo from '../Assets/rpublica.svg.png'
import invoice2logo from '../Assets/invoice2gologo.svg.png'
import ampllogo from '../Assets/amplitudelogo.svg.png'


function logobox() {
  return (
   <div className='logostates'> 
   <img src={ampllogo} className='amplogoplace' />
   <img src={logodivide} className='logodiv1lb' />
   

   <img src={rpublicalogo} className='rpublicaplace' />
   <img src={logodivide} className='logodiv2lb' />
   
   <img src={veroxfloor} className='veroxplace' />
   <img src={logodivide} className='logodiv3' />

   <img src={xpenglogo} className='xpengplace' />
   <img src={logodivide} className='logodiv4' />

   <img src={triballogo} className='tribalplace' />
   <img src={logodivide} className='logodiv5' />

   <img src={invoice2logo} className='invoiceplace' />
   
         
   
   </div>
  )
}

export default logobox