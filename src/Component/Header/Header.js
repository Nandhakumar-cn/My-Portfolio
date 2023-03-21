import React from 'react'
import { Link } from "react-scroll"
import "./Header.css"
import { Grid } from '@mui/material';


function Header() {
    return (
        <Grid item xs={12} lg={12} sm={12}>

<nav class="navbar navbar-expand-lg">
  <div class="container">
  <div className='header_left'>
    <h1>Develop<span>er</span></h1>
  </div>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div  class="collapse navbar-collapse" id="navbarSupportedContent">
    <div className='header_right'>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link to='about' smooth={true} duration={500}>
                    <h3>
                        About Me
                    </h3>
                </Link>
        </li>
        <li class="nav-item">
        <Link to='skills' smooth={true} duration={500}>
                    <h3>
                        Skills
                    </h3>
                </Link>
        </li>
        <li class="nav-item">
           <Link to='projects' smooth={true} duration={500}>
                    <h3>
                        Projects
                    </h3>
                </Link>
        </li>
        <li class="nav-item">
        <Link to='exp' smooth={true} duration={500}>
                    <h3>
                        Experience
                    </h3>
                </Link>
        </li>
        <li class="nav-item">
        <Link to='contact' smooth={true} duration={500}>
                    <h3>
                        Contact
                    </h3>
                </Link>
        </li>
      </ul>
      </div>
    </div>
  </div>
</nav>

        {/* <div className='header'>
            <div className='header_left'>
                <h1>Develop<span>er</span></h1>
            </div>
            <div className='header_right'>
                <Link to='about' smooth={true} duration={500}>
                    <h3>
                        About Me
                    </h3>
                </Link>

                <Link to='skills' smooth={true} duration={500}>
                    <h3>
                        Skills
                    </h3>
                </Link>

                <Link to='projects' smooth={true} duration={500}>
                    <h3>
                        Projects
                    </h3>
                </Link>

                <Link to='exp' smooth={true} duration={500}>
                    <h3>
                        Experience
                    </h3>
                </Link>

                <Link to='contact' smooth={true} duration={500}>
                    <h3>
                        Contact
                    </h3>
                </Link>

            </div>
        </div>
        <div class="nav-mobile">
            <div class="menu-toggle"></div>
            <span>Menu</span>
        </div> */}
        </Grid>
    )
}

export default Header