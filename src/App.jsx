import Aboutpage from "./pages/Aboutpage"
import Connectpage from "./pages/Connectpage"
import Home from "./pages/Homepage"
import Skillspage from "./pages/Skillspage"
import Workspage from "./pages/Workspage"

import Footer from "./static/Footer"
import Header from "./static/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {


  return (
   <div style={{ fontFamily: 'Ubuntu, sans-serif' }}>
    <BrowserRouter>
      <Header />

        <Routes>
          <Route path="/" element= {<Home/>}/>
          <Route path="/about" element= {<Aboutpage/>}/>
          <Route path="/connect" element= {<Connectpage/>}/>
          <Route path="/skills" element= {<Skillspage/>}/>
          <Route path="/projects" element= {<Workspage/>}/>
        </Routes>

      <Footer />
    
    </BrowserRouter>
   </div>
      
  )
}

export default App
