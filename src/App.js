import React from 'react'
import Header from './Component/Header/Header'

import Skill from './Component/Skils_Container/Skill'
import Topcontainer from './Component/Header_container/Topcontainer'
import Projectcontainer from './Component/Project-container/Project_Container'
import ExperienceContainer from './Component/Experience-Container/ExperienceContainer'
import Contact from './Component/Concactus/Contact'

function App() {
  return (
    <div>
      <Header />
      <Topcontainer />
      <Skill />
      {/* <Json/> */}
      <Projectcontainer />
   <ExperienceContainer/>
   <Contact/>
    </div>
  )
}

export default App