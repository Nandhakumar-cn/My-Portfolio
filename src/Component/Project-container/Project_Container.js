import React from 'react'
import { Element } from "react-scroll"
import Project from '../Project/Project';
import "./Project_Container.css"
import img1 from "C:/My-React-Project/new-portfolio/src/Component/Project-container/application.png"
import img2 from "C:/My-React-Project/new-portfolio/src/Component/Project-container/calculator.png"
import img3 from "C:/My-React-Project/new-portfolio/src/Component/Project-container/clock.png"
import img4 from "C:/My-React-Project/new-portfolio/src/Component/Project-container/slider.png"
import img5 from "C:/My-React-Project/new-portfolio/src/Component/Project-container/Quiz.png"
import img6 from "C:/My-React-Project/new-portfolio/src/Component/Project-container/website.png"

function Projectcontainer() {

    const myproject = [
        {
            img: `${img1}`,
            title: "Application",
            content: "This is My Very First Simple Application Form Project ",
            link:"https://nandhakumar-cn.github.io/Simple-Application-Form/"

        },

        {
            img: `${img2}`,
            title: "Digital Calculator",
            content: "This Digital Calculator is My Second Simple Project",
            link:"https://nandhakumar-cn.github.io/Caluclator/"

        },

        {
            img: `${img3}`,
            title: "Digital Clock",
            content: "This Digital Clock is My Thirt  Project ",
            link:"https://nandhakumar-cn.github.io/Digital-Clock/"

        },

        {
            img: `${img4}`,
            title: "Indian Cricket Team Slider",
            content: "This Slider is My Fourth  Project ",
            link:"https://nandhakumar-cn.github.io/Image-Sliders/"

        },

        {
            img: `${img5}`,
            title: "Quiz Game",
            content: "This Quiz Game is My Fivth Project,And It Was Very Intersting Project For Me To Work ",
            link:"https://nandhakumar-cn.github.io/Quiz-Game/"

        },

        {
            img: `${img6}`,
            title: "Real-Time-Website",
            content: "This is my First Real-Time Project ,And It was Fully Created By Me And My Co-Partner",
            link:"https://nandhakumar-cn.github.io/My-RealTime-Website/"

        },
    ];
    return (
        <Element className='project_container' id='projects'>
            <h1>My Projects</h1>
            <p>
                Here My Some Projects which fully Maded by Me..
            </p>
            <div className='projectcontainer_projects'>
                {
                    myproject.map((project, index) => {

                        return (
                            <Project key={index}
                                img={project.img}
                                title={project.title}
                                content={project.content} 
                                link={project.link}/>
                        )
                    })
                }

            </div>
        </Element>
    )
}

export default Projectcontainer