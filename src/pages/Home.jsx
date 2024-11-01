import About from "../components/About"
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
        </div>
    )
}

export default Home