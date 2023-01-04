import React from 'react'
import "./Experiencediv.css"

const Experiencediv=({number,title,style})=> {
  return (
    <div style={{...style}} className="experience">
        <h1>{title}</h1>
        <p>{number}</p>
    </div>
  )
}

export default Experiencediv