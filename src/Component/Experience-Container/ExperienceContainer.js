import React from 'react'
import { Element } from "react-scroll"
import Experiencediv from '../Experiencediv/Experiencediv'
import "./ExperienceContainer.css"

function ExperienceContainer() {
  return (
    <Element className='exp_container' id="exp">
      <h1>Experience</h1>
      <div className='exp_info'>
        <Experiencediv number="+10" title="Clients" style={{ backgroundColor: "gold" }} />
        <Experiencediv number="+22" title="Projects" style={{ backgroundColor: "gold" }} />
        <Experiencediv number="1" title="Internship" style={{ backgroundColor: "gold" }} />
      </div>

    </Element>

  )
}

export default ExperienceContainer