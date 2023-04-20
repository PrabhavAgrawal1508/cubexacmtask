import React from 'react'
import '../Styles/footer.css'
import bgbottom from '../Assets/backgroundbottom.svg.png'
import bgfoot from '../Assets/backgroundbanner.svg.png'
import divider from '../Assets/div.footer-divider.png'
import fbfoot from '../Assets/fbsociallinkfooter.png'
import twtfoot from '../Assets/twtsociallinkfooter.png'
import igfoot from '../Assets/igsociallinkfooter.png'
import footlogo from '../Assets/footerlogo.svg.png'

function footer() {
  return (
    <div className='footermain'>
        <div className='footerwrapper'>
        <img src={bgfoot} className='bgrightpattern'/>
        <img src={bgbottom} className='bgleftpattern'/>
        <div className='footercontainer'>
            <div className='copyrightpara'>
                <p className='copyrighttext'>
                Copyright © Cubex Theme - Powered by Webflow Built by Flowbase
                </p>
            </div>
            <img src={divider} className='footdivide'/>
            <div className='footgridmain'>
                <div className='submain'>
                    <div className='sociallinks'>
                        <img src={fbfoot} className='fbfootbutton'/>
                        <img src={twtfoot} className='twtfootbutton'/>
                        <img src={igfoot} className='igfootbutton'/>
                    </div>
                    <p className='submaintext'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante dui Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante dui
                    </p>
                    <img src={footlogo} className='footercubexlogo'/>

                </div>
                <div className='submain2'>
                    <div className='Pagescol'>
                        <p className='text1pages'>Pages</p>
                        <p className='text2pages'>Overview</p>
                        <p className='text3pages'>Home</p>
                        <p className='text4pages'>About</p>
                        <p className='text5pages'>Features</p>
                        <p className='text6pages'>Pricing</p>


                    </div>
                    <div className='Companycol'>
                        <p className='text1company'>Company</p>
                        <p className='text2company'>Integration</p>
                        <p className='text3company'>Blog</p>
                        <p className='text4company'>Blog Article</p>
                        <p className='text5company'>Contact</p>
                        


                    </div>
                    <div className='Contactscol'>
                        <p className='text1contact'>Contact</p>
                        <p className='text2contact'>Login</p>
                        <p className='text3contact'>Register</p>
                        <p className='text4contact'>Forgot Password</p>
                        <p className='text5contact'>Update Password</p>
                        

                    </div>


                </div>


            </div>



            

            </div>



        </div>
        
        
        
        
        
        
    </div>
  )
}

export default footer