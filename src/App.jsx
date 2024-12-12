



import Footer from "./static/Footer"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./static/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Connect from "./components/Connect"
import Skills from "./components/Skills"
import Works from "./components/Works"


function App() {


  return (
   <div style={{ fontFamily: 'Ubuntu, sans-serif' }}>
    <BrowserRouter>
      <Header/>

        <Routes>
          <Route path="/" element = {<Hero/>}/>
          <Route path="/about" element = {<About/>}/>
          <Route path="/contact" element = {<Connect/>}/>
          <Route path="/skills" element = {<Skills/>}/>
          <Route path="/projects" element = {<Works/>}/>


          
        </Routes>

      {/* <Footer /> */}
    
    </BrowserRouter>
   </div>
      
  )
}

export default App
