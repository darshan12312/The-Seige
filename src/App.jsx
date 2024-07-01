import React from 'react'
import Home from './Home'
import Discography from './Discography'
import Collobaration from './Collobaration'
import About from './About'
import Footer from './Footer'


function App() {
  return (
    <div className=' font-["Varent_Grotesk_Regular"] bg-custom-gradient  bg-no-repeat bg-contain' >
      <Home/>
      <Discography/>
      <Collobaration/>
      <About/>
    </div>
  )
}

export default App
