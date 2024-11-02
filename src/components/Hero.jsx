import styled from "styled-components";
import profile from "../assets/jpg/profile.jpg";
import defaulticon from "../assets/png/Default.png";
import usericon from "../assets/png/user.png";
import codeicon from "../assets/png/code.png";
import monitoricon from "../assets/png/monitor.png";
import editicon from "../assets/png/edit.png";
import mailicon from "../assets/png/mail.png";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { SlPaperClip } from "react-icons/sl";
import shareicon from "../assets/png/share.png";
import { FaCodeBranch } from "react-icons/fa6";
import { HiOutlineDownload } from "react-icons/hi";






const Hero = () => {
    return (
        <Wrapper>
            <Herocontain>
                {/* <Leftside>
                    <img src={defaulticon} alt="" />
                    <img src={usericon} alt="" />
                    <img src={codeicon}  alt="" />
                    <img src={monitoricon} alt="" />
                    <img src={editicon}alt="" />
                    <img src={mailicon}alt="" />

                </Leftside> */}

                <Middleside>

                    <Headertext>
                        <p>Developer</p>
                    </Headertext>

                    <Fulldetails>
                        <Contentmiddle>

                            <Profilecard>
                                <img src={profile} alt="" />
                                <p>Temitope</p>
                                <p>Front-End Developer</p>

                                <Detailsprofile>
                                    <caption> <Iconstyle as={MdOutlineMailOutline} /> <span>anjorinemmanuelt@gmail.com</span></caption>
                                    <caption> <Iconstyle as={MdLocationPin} /> <span>Lagos</span> </caption>
                                    <caption> <Iconstyle as={MdWork} /> <span>Full-time / Freelancer</span>  </caption>
                                    <caption> <Iconstyle as={SlPaperClip} /> <span>github.com/teadevsd</span>  </caption>
                                </Detailsprofile>

                                <Buttoncard>
                                    <button>HTML</button>
                                    <button>CSS</button>
                                    <button>JS</button>
                                    <button>REACT</button>
                                </Buttoncard>

                                
                                <CVButton href="mycv.pdf" download= "My_CV">Download CV <HiOutlineDownload /> </CVButton>
                                
                            </Profilecard>

                            <Description>
                                
                                <Details>
                                    <h3>
                                        Hey<br/>I'm <span>Temitope</span> Anjorin,<br/>Full stack Developer
                                    </h3> 

                                    <p>I help business grow by crafting amazing web experiences. If you’re <br/> looking for a developer that likes to get stuff done,</p>

                                    <h5>Let’s Talk <MdOutlineMailOutline /> </h5>                          
                                </Details>

                                <Skills>
                                    <p>7 <span>Programming Language</span></p>
                                    <p>6 <span>Development Tools</span></p>
                                    <p>2 <span>Years of Experience</span></p>
                                </Skills>

                            </Description>
                        </Contentmiddle>

                    </Fulldetails>

                </Middleside>
            </Herocontain>
        </Wrapper>
    )
}

export default Hero

const Wrapper = styled.div`
    background-color: #e0e0e054;
    margin: 0 auto;
    
`
const Herocontain = styled.div`
    /* min-height: calc(100vh - 70px); */
    max-width: 1920px;
    width: 90%;
    /* border: 1px solid red; */
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    padding-bottom: 30px;
`
const Fulldetails = styled.div`
    display: flex;
    justify-content: space-between;
    
    /* border: 1px solid yellow; */
`
const Profilecard = styled.div` 
    min-width: 280px;
    min-height: auto;
    border: 2px solid grey;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
    justify-content: center;
    /* margin-left: 50px; */
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    /* text-align: center; */
    img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }

    p:nth-child(2){
        font-size: 32px;
        color: #000000;
        font-weight: 600;
        /* font-family: 'IBM Plex Mono', Courier New, Courier, monospace; */
    }

    p:nth-child(3){
        font-size: 20px;
        color: #000000;
        font-weight: 200;
        /* font-family: 'IBM Plex Mono', Courier New, Courier, monospace; */
    }
`
const Detailsprofile = styled.div`
        margin: 10px 0;
        
        caption{
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 5px;
        color: #000000;
        /* font-family: 'IBM Plex Mono', Courier New, Courier, monospace; */
        font-size: 16px;
    }
`

const Buttoncard = styled.div`
    display: flex;
    gap: 10px;
    button {
        padding: 6px 10px;
        border-radius: 12px;
        border: none;
        background-color: white;
        color: black;
        border: 1px solid;
        cursor: pointer;
    }
`

const CVButton = styled.a`
    text-decoration: none;
    width: 150px;
    height: 40px;
    color: white;
    border-radius: 20px 0;
    background-color: #832503;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px soild black;
    margin: 20px 0;
    font-size: 16x;
    /* font-weight: bold; */
`

const Iconstyle = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 16px;
    color: #000000;
`
const Leftside = styled.div` 
    max-height: 250px;
    width: 60px;
    background-color: #960000;
    border: 1px solid white;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    margin-top: 70px;
    

    img{
        width: 20px;
    }
`
const Headertext = styled.div`
    text-align: center;
    color: brown;
    font-weight: 400;
    font-size: 40px;
`
const Middleside = styled.div` 
    margin-top: 30px;
    
`
const Contentmiddle = styled.div` 
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 50px;

    @media (max-width: 480px) {
        justify-content: space-evenly;
    }
`

const Description = styled.div` 
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    align-items: center;
    justify-content: space-evenly;
`
const Details = styled.div` 
    max-width: 800px;
    span{
        color: brown;
    }
    h3{
        font-size: 30px;
        line-height: 40px;
        font-weight: 500;
        color: #000000;
    }
    p {
        color: #000000;
        margin: 30px 0;
    }
    h5 {
        font-size: 32px;
        color: #000000;
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
    }
`
const Skills = styled.div` 
    width: 230px;
    height: 350px;
    border-radius: 30px;
    /* background-color: white; */
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    gap: 20px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;

    p {
        display: flex;
        gap: 20px;
        font-size: 34px;
        color: #797979;
    }
    span {
        font-size: 20px;
        color: #000000c3;
        font-weight: bold;
    }
`