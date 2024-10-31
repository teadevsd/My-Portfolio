import styled from "styled-components"
import scroll from "../assets/png/scroll.png"
import laptop from "../assets/png/lappt.png"

const About = () =>{
    return (
        <Wrapper>
            <Aboutcont>
                <Headimg>
                    <img src={scroll} alt="" />
                </Headimg>

                <Aboutdetails>
                    <Detailsabout>
                        <button>About Me</button>

                        <Hellodiv>
                            <p>Hello!</p>
                            <article>
                            
                                My name is Temitope Anjorin and I specialize in web developement that utilizes HTML, CSS, JS, and REACT etc. <br/><br/>
                                I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving.
                                Beyond coding, you’ll often find me immersed in design, exploring music, or working on creative projects like photography. <br/><br/>
                                I like to have my perspective and belief systems challenged so that I see the world through new eyes.
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
    background-color: #80808016;
    /* width: 100%; */
    height: auto;
    margin: 0 auto;
`
const Aboutcont = styled.div`
    max-width: 1920px;
    width: 85%;
    margin: 0 auto;
`
const Headimg = styled.div`
display: flex;
justify-content: center;
padding: 50px 0;
   img {
    width: 20px;
   }
`
const Aboutdetails = styled.div`
    display: flex;
    flex-wrap: wrap ;
    /* border: 1px solid; */
    justify-content: space-evenly;
    align-items: center;
    margin: 40px 0;
    /* gap: 120px; */

    img {
        width: 300px;
    }
`
const Detailsabout = styled.div`
    button{
        padding: 16px 60px;
        font-size: 16px;
        border-radius: 30px 0;
        background-color: #494949;
        color: white;
        border: 5px solid lightgray;
    }
    
`
const Hellodiv =styled.div`
    max-width: 600px;
    border-radius: 30px;
    height: auto;
    background-color: #292F36;
    padding: 20px;
    margin: 30px 0;

    article{
        font-size: 14px;
        color: white;
        
    }
    p{
        font-size: 40px;
        color: #a7a7a7;
    }
`