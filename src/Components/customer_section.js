import React from 'react'
import '../Styles/customer_section.css'
import contentgraphic from '../Assets/imahge.svg.png'
import checkmarkicon from '../Assets/63d91e2f8268300de2ee81f1_Check%20Icon.svg.png'
import rightarr from '../Assets/rightarrow.png'
import logodivide from '../Assets/div.logo-divider.png'
import icon1 from '../Assets/div.feature-icon-block-1.png'
import icon2 from '../Assets/div.feature-icon-block-2.png'
import icon3 from '../Assets/div.feature-icon-block-3.png'


function customer_section() {
  return (
    <div className='customer_main'>
        <div className='feature_wrapper'>
           <div className='feature1'>
                <p className='feature1text'>Deliver an enterprise quality project in minutes.</p>
                <img src={icon1} className='icon1place'/>
           </div>
           <img src={logodivide} className='logodiv1'/>
           <img src={logodivide} className='logodiv2'/>
           <div className='feature2'>
                <p className='feature2text'>Easy to edit and customise for your own project.</p>
                <img src={icon2} className='icon2place'/>
           </div>
            <div className='feature3'>
                <p className='feature3text'>Save time and build better with cubex template.</p>
                <img src={icon3} className='icon3place'/>
            </div> 

        </div>
        <div className='content_block'>
            <div className='mainlayout'>
                <img src={contentgraphic} className='contentgraphicclass'/>
                <div className='maintext'>
                    <div classname = 'buttonmain'>
                        <p className='buttontext'>Get Started</p>
                        <img src={rightarr} className='buttonsymbol'/>
                    </div>
                    <div classname = 'featuretextwrapper'>
                        <div className='featuretext1'>
                            <img src={checkmarkicon} className='check1'/>
                            <p className='featuredes1'>Add a feature section about the product.</p>
                        </div>
                        <div className='featuretext2'>
                            <img src={checkmarkicon} className='check2'/>
                            <p className='featuredes2'>Add a feature section about the product.</p>
                        </div>
                        <div className='featuretext3'>
                            <img src={checkmarkicon} className='check3'/>
                            <p className='featuredes3'>Add a feature section about the product.</p>
                        </div>


                    </div>
                    <p className='maintexthead'>Describe your products for all customers</p>
                </div>





            </div>

        </div>
    </div>




  )
}

export default customer_section