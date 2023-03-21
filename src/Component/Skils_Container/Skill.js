import React from 'react'
import { Element } from "react-scroll"
// import web from "C:/My-React-Project/My-Portfolio/portfolio/src/Image/web.jpg"
import web from "../../Image/web.jpg"
import LinearProgress from "@mui/material/LinearProgress"
import "./Skill.css"
import Bounce from 'react-reveal/Bounce';

function Skill() {
    return (
        <>
            <Element id='skill' className='skills' >
                <div className='skill_image'>
                    <img src={web} alt='there is nothing'></img>
                </div>
                <div className='skill_text'>
                    <h2>
                    <Bounce top cascade><u>My Skills In Web Devolping</u>
                    </Bounce>
                    </h2>
                    <div className='skill_container'>
                        <h5 className='react_skill'><Bounce top cascade>React.JS </Bounce></h5>
                        <div className='color_slider1' id='progress'>
                            <LinearProgress className="line1" variant='determinate' value={90} ></LinearProgress>
                        </div>
                    </div>

                    <div className='skill_container'>
                        <h5 className='react_skill'><Bounce top cascade>HTML</Bounce></h5>
                        <div className='color_slider2' id='progress'>
                            <LinearProgress variant='determinate' value={95} className="line2"></LinearProgress>
                        </div>
                    </div>



                    <div className='skill_container'>
                        <h5 className='react_skill'><Bounce top cascade>Css</Bounce></h5>
                        <div className='color_slider3' id='progress'>
                            <LinearProgress variant='determinate' value={75} className="line3"></LinearProgress>
                        </div>
                    </div>



                    <div className='skill_container'>
                        <h5 className='react_skill'><Bounce top cascade>JavaScript</Bounce></h5>
                        <div className='color_slider4' id='progress'>
                            <LinearProgress variant='determinate' value={65} className="line4"></LinearProgress>
                        </div>
                    </div>


                    <div className='skill_container'>
                        <h5 className='react_skill'><Bounce top cascade>TypeScript</Bounce></h5>
                        <div className='color_slider5' id='progress'>
                            <LinearProgress variant='determinate' value={60} className="line5"></LinearProgress>
                        </div>
                    </div>

                    <div className='skill_container'>
                        <h5 className='react_skill'><Bounce top cascade>Node.JS</Bounce></h5>
                        <div className='color_slider6' id='progress'>
                            <LinearProgress variant='determinate' value={50} className="line6"></LinearProgress>
                        </div>
                    </div>


                </div>


            </Element>

        </>
    )
}

export default Skill