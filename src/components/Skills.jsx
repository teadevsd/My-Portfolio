import styled from "styled-components";
import scroll from "../assets/png/scroll.png";
import line from "../assets/png/line.png";
import { MdMonitor } from "react-icons/md";
import { FaCodeBranch } from "react-icons/fa6";
import codebg from "../assets/png/cdee.png";
import  html from "../assets/svg/html.svg";
import  css from "../assets/svg/css.svg";
import  sass from "../assets/svg/sass.svg";
import  javascript from "../assets/svg/javascript.svg";
import  react from "../assets/svg/react.svg";
import  github from "../assets/svg/github.svg";
import  gitcontrol from "../assets/svg/gitcontrol.svg";
import  vscode from "../assets/svg/vscode.svg";
import  vscodeicons from "../assets/svg/vscodeicons.svg";
import  styledcomponents from "../assets/png/styledcomponents.png";
import  api from "../assets/png/api.png";
import  expressjs from "../assets/png/expressjs.png";
import  mongo from "../assets/png/mongo.png";
import  typescript from "../assets/png/typescript.png";
import  sql from "../assets/svg/mysql.svg";








const Skills = () =>{
    return (
        <Wrapper>
            <Skillscont>
                <Headimg>
                    <img src={scroll} alt="" />
                </Headimg>

                <Skillsdetails>
                    <Detailskills>
                        <p>Skills  </p>
                        <img src={line} alt="" />

                        <Skillsdiv>
                          <Buttonone> <MdMonitor/> Front end Deloper <span>HTML. CSS. JS. REACT.</span></Buttonone>
                          <Buttontwo> <FaCodeBranch/> Back end Developer <span>MONGOJS. NODEJS</span></Buttontwo>
                        </Skillsdiv>
                        
                        <h2>USING NOW:</h2>
                        <Skillsicon>
                            <p><img src={html} alt="" />HTML5</p>
                            <p><img src={css} alt="" />CSS3</p>
                            <p><img src={javascript} alt="" />JAVASCRIPT</p>
                            <p><img src={react} alt="" />REACT</p>
                            <p><img src={github} alt="" />GITHUB</p>
                            <p><img src={gitcontrol} alt="" />VERSION <br/>CONTROL</p>
                            <p><img src={vscode} alt="" />VS CODE</p>
                            <p><img src={vscodeicons} alt="" />VSCODE-ICONS</p>
                            <p><img src={styledcomponents} alt="" />STYLE <br/>COMPONENTS</p>
                            <p><img src={api} alt="" />CONTEXT API</p>
                            <p><img src={sass} alt="" />SAAS</p>
                           

                        </Skillsicon>

                        <h2>LEARNING:</h2>
                        <Skillsicon>
                            
                            <p><img src={expressjs} alt="" />NODE JS</p>
                            <p><img src={mongo} alt="" />MONGO</p>
                            <p><img src={typescript} alt="" />TYPESCRIPT</p>
                            <p><img src={sql} alt="" />MY SQL</p>


                        </Skillsicon>
                    </Detailskills>

                 
                </Skillsdetails>
            </Skillscont>

        </Wrapper>
    )
}

export default Skills

const Wrapper = styled.div`
    background-image: url(${codebg});
    height: auto;
    margin: 0 auto;
`
const Skillscont = styled.div`
    max-width: 1920px;
    width: 80%;
    margin: 0 auto;
    padding: 20px;
`
const Headimg = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px 0;
    img {
        width: 20px;
    }
`
const Skillsdetails = styled.div`
    text-align: center;
   p {
    font-size: 26px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
   }

   img{
    width: 150px;
    margin: 0 auto;
   }
`
const Detailskills = styled.div`
    h2{
        background-color: #ffffff;
        width: 180px;
        border-radius: 8px;
        color: #000000;
        font-size: 22px;
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    }
    
`
const Skillsdiv =styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center ;
    gap: 50px;
    margin: 30px 0;
`
const Buttonone = styled.div`
    min-width: 300px;
    height: 150px;
    background-color: #731c1c;
    border-radius: 20px;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    /* padding: 20px; */

    span{
        font-weight: bold;
        color: #ffe5b9;
    }
`
const Buttontwo = styled.div`
    min-width: 300px;
    height: 150px;
    background-color: #d73e06;
    border-radius: 20px;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;

    span{
        font-weight: bold;
        /* color: #ffe5b9; */
    }
`
const Skillsicon = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-evenly;
    margin: 40px 0;
    img{
        width: 70px;
    }

    p{
        font-size: 18px;
        font-weight: bold;
        display: flex;
        gap: 30px;
        margin-top: 10px;
    }

    
`

