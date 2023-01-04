import React from 'react'
import json from "./skill.json"
import LinearProgress from "@mui/material/LinearProgress"

function Json() {
    return (
        <div className='skill_text'>
            <h2><u>My Skills In Web Devolping</u></h2>
            {
                json.map((o, index) => {
                    return (
                        <div className='skill_container' key={index}>
                            <h5 className='react_skill'>{o.skill}&nbsp;&nbsp;{o.Percentage}</h5>
                            <div className='color_slider2' id='progress'>
                                <LinearProgress variant='determinate' value={o.value} className="line2"></LinearProgress>
                            </div>
                        </div>

                    )
                }
                )}
        </div>
    )
}

export default Json