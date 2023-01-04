import { IconButton } from '@mui/material'
import React from 'react'
import { Element } from 'react-scroll'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import "./Contact.css"

        
const Contact = () => {
  return (
<Element className='contact' id='contact'>
<h1>Contact Me</h1>
<div className='contact_container'>
    <h5>
        Email : <span>nandhakumar@codenatives.com</span>
    </h5>
    <h5>
        Github UserName : <span>Nandhakumar-cn</span>
    </h5>
    <div className='contact_icons'>
        <a href='https://www.linkedin.com/in/nandhakumar-s-803106248' target="blank">
            <IconButton>
                <LinkedInIcon/>
                
            </IconButton>

        </a>

        <a href='https://www.facebook.com/people/Nandha-Kumar/100011036684297/?mibextid=ZbWKwL' target="blank">
            <IconButton>
                <FacebookIcon/>
                
            </IconButton>

        </a>

        <a href='https://instagram.com/__nandha__007?igshid=YmMyMTA2M2Y=' target="blank">
            <IconButton>
                <InstagramIcon/>
                
            </IconButton>

        </a>

        <a href='https://accounts.zoho.com/home#profile' target="blank">
            <IconButton>
                <ContactMailIcon/>
                
            </IconButton>

        </a>
    </div>
</div>
</Element>

  )
}

export default Contact