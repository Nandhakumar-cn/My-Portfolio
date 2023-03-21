import React from 'react'
import Header from './Component/Header/Header'
import { Grid } from '@mui/material';
import Skill from './Component/Skils_Container/Skill'
import Topcontainer from './Component/Header_container/Topcontainer'
import Projectcontainer from './Component/Project-container/Project_Container'
import ExperienceContainer from './Component/Experience-Container/ExperienceContainer'
import Contact from './Component/Concactus/Contact'

function App() {
  return (
    <Grid container>
      <Grid item xs={12} lg={12} sm={12}>
      <Header />
      <Topcontainer />
      <Skill />
      {/* <Json/> */}
      <Projectcontainer />
   <ExperienceContainer/>
   <Contact/>
   </Grid>
    </Grid>
  )
}

export default App