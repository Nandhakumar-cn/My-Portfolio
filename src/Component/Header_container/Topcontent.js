import React from 'react'
import { Link } from 'react-scroll'
import "./Topcontent.css"
function Topcontent() {
  return (
    <div className='topcontent'>
      <div className='topcontent_container'>
        <h1>Mr.S.NandhaKumar </h1>
        <h5>A Professional Web Developer And Export In React.JS</h5>
        <a href='https://github.com/Nandhakumar-cn' target="blank">
          <button className='github_button'> My Github</button>
        </a>
        <Link name='project' smooth={true} duration={500}>
          <button className='work_button'>Social Media</button>
        </Link>
      </div>

    </div>
  )
}

export default Topcontent