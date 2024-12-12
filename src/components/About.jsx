import styled from "styled-components"
import scroll from "../assets/png/scroll.png"
import laptop from "../assets/png/lappt.png"

const About = () =>{
    return (
        <Wrapper>
            <Aboutcont>
                {/* <Headimg>
                    <img src={scroll} alt="" />
                </Headimg> */}

                <Aboutdetails>
                    <Detailsabout>
                        <button>About Me</button>

                        <Hellodiv>
                            <p>Hi, I'm Temitope Anjorin!</p>
                            <strong>MERN Fullstack Developer</strong>
                            <article>
                          
                               
                            I specialize in building dynamic, responsive, and scalable web applications using the MERN stack (MongoDB, Express.js, React.js, and Node.js) along with foundational technologies like HTML, CSS, and JavaScript. <br/><br/>I am a highly motivated problem solver and eternal optimist dedicated to delivering clear, efficient, and robust code. My passion for continuous learning drives me to stay at the forefront of emerging technologies and best practices in software development. <br/><br/>When I'm not coding, you’ll likely find me exploring creative pursuits like design, music, or photography, all of which inspire my work as a developer. I also enjoy engaging in thought-provoking conversations that challenge my perspectives and broaden my worldview.<br/><br/>Let’s connect and create something amazing together!
                            </article>
                        </Hellodiv>
                    </Detailsabout>

                    <img src={laptop} alt="" />
                </Aboutdetails>
            </Aboutcont>
        </Wrapper>
    )
}

export default About

const Wrapper = styled.div`
    margin: 80px auto;
    height: 100vh;
    
`
const Aboutcont = styled.div`
    max-width: 1920px;
    width: 85%;
    margin: 0 auto;
    
    /* border: 1px solid white; */
`
// const Headimg = styled.div`
//     display: flex;
//     justify-content: center;
//     padding: 20px 0;
//     img {
//         width: 20px;
//     }
// `
const Aboutdetails = styled.div`
    display: flex;
    flex-wrap: wrap ;
    /* border: 1px solid; */
    justify-content: space-evenly;
    align-items: center;
    padding-top: 60px;

    img {
        width: 280px;
    }
`
const Detailsabout = styled.div`
    button{
        padding: 12px 30px;
        font-size: 14px;
        border-radius: 4px;
        background-color: #ededed;
        color: black;
        border: none;
    }
    
`
const Hellodiv =styled.div`
    display: flex;
    flex-direction: column;
    max-width: 600px;
    border-radius: 4px;
    height: auto;
    background-color: #083352;
    padding: 20px;
    margin: 30px 0;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

    article{
        font-size: 12px;
        color: white;
        text-align: justify;
    }
    p{
        font-size: 32px;
        font-weight: 400;
        color: #00abf0;
    }

    strong {
        color: white;
        font-size: 18px;
    }
`