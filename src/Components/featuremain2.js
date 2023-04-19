import React from 'react'
import '../Styles/featuremain2.css'
import feature2mainphoto from '../Assets/featureblock2.png'
import rightarr from '../Assets/rightarrow.png'
import checkbox from '../Assets/63d91e2f8268300de2ee81f1_Check%20Icon.svg.png'
function featuremain2() {
  return (
    <div className='feature2layout'>
        <img className='feature2mainphoto' src={feature2mainphoto}/>
        <div className='feature2boxlayout'>
            <div className='feature2buttonmain'>
                <p className='feature2buttontext'>Get Started</p>
                <img src={rightarr} className='feature2buttonpng'/>
            </div>
            <p className='feature2head'>Customise the template to suit any brand</p>
            <div className='feature2subtext'>
                <div className='subtextfeature1'>
                    <p className='feature1text'>Add a feature about the product</p>
                    <img className='checkbox1' src={checkbox}/>
                </div>
                <div className='subtextfeature2'>
                    <p className='feature2text'>Add a feature about the product</p>
                    <img className='checkbox2' src={checkbox}/>

                </div>
                <div className='subtextfeature3'>
                    <p className='feature3text'>Add a feature about the product</p>
                    <img className='checkbox3' src={checkbox}/>

                </div>


            </div>




        </div>






    </div>
    
  )
}

export default featuremain2