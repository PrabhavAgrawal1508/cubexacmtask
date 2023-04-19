import React from 'react'
import '../Styles/integration_block.css'
import buttoncard from '../Assets/buttoncard.png'
import disc from '../Assets/discordlogo.svg.png'
import faceb from '..//Assets/fblogo.svg.png'
import mailc from '../Assets/mailchimplogo.svg.png'
import slackfig from '../Assets/slack_figmalogo.svg.png'
import trello from '../Assets/trellologo.svg.png'
function integration_block() {
  return (
    <div className='integblock_main'>
        <div className='integtext_main'>
            <p className='integtext_head'>Deploy your project with right tools</p>
            <p className='integtext_subhead'>INTEGRATIONS</p>
        </div>
        <div className='integblock_grid'>
            <div className='integfigma'>
                <img src={buttoncard} className='buttoncardfigma'/>
                <div className='integfigmadetail'>
                    <img src={slackfig} className='figlogo'/>
                    <div className='textsetfigma'>
                        <p className='figmahead'>Figma</p>
                        <p className='figmasubhead'>Design Tool</p>
                    </div>

                </div>

            </div>
            <div className='integdiscord'>
                <img src={buttoncard} className='buttoncarddiscord'/>
                <div className='integdiscorddetail'>
                    <img src={disc} className='discordlogo'/>
                    <div className='textsetdiscord'>
                        <p className='discordhead'>Discord</p>
                        <p className='discordsubhead'>Chat Service</p>
                    </div>

                </div>

            </div>
            <div className='integmailchimp'>
                <img src={buttoncard} className='buttoncardmailc'/>
                <div className='integmailchimpdetail'>
                    <img src={mailc} className='mailclogo'/>
                    <div className='textsetmailc'>
                        <p className='mailchead'>Mail Chimp</p>
                        <p className='mailcsubhead'>Mail Service</p>
                    </div>

                </div>

            </div>
            <div className='integfacebook'>
                <img src={buttoncard} className='buttoncardfacebook'/>
                <div className='integfacebookbdetail'>
                    <img src={faceb} className='facebooklogo'/>
                    <div className='textsetfacebook'>
                        <p className='facebookhead'>Facebook</p>
                        <p className='facebooksubhead'>Social Media</p>
                    </div>

                </div>

            </div>
            <div className='integtrello'>
                <img src={buttoncard} className='buttoncardtrello'/>
                <div className='integtrellodetail'>
                    <img src={trello} className='trellologo'/>
                    <div className='textsettrello'>
                        <p className='trellohead'>Trello</p>
                        <p className='trellosubhead'>Note Service</p>
                    </div>

                </div>

            </div>
            <div className='integslack'>
                <img src={buttoncard} className='buttoncardslack'/>
                <div className='integslackdetail'>
                    <img src={slackfig} className='slacklogo'/>
                    <div className='textsetslack'>
                        <p className='slackhead'>Slack</p>
                        <p className='slacksubhead'>Communication</p>
                    </div>

                </div>

            </div>

        </div>







    </div>
  )
}

export default integration_block