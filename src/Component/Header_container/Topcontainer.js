import React from 'react'
import {Element} from 'react-scroll'
import Topcontent from './Topcontent'
import "./Topcontiner.css"
function Topcontainer() {
  return (
    <div>
        <Element name="about" className="topcontainer">
     <Topcontent/>
        </Element>

    </div>
  )
}

export default Topcontainer