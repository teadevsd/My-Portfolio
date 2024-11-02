import About from "../components/About"
import Connect from "../components/Connect"
import Hero from "../components/Hero"
import Skills from "../components/Skills"
import Works from "../components/Works"

const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Skills/>
            <Works />
            <Connect/>
        </div>
    )
}

export default Home