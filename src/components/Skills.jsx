import styled from "styled-components";
import scroll from "../assets/png/scroll.png";
import line from "../assets/png/line.png";
import { MdMonitor } from "react-icons/md";
import { FaCodeBranch } from "react-icons/fa6";
import codebg from "../assets/png/cdee.png";
import  html from "../assets/svg/html.svg";
import  css from "../assets/svg/css.svg";
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

                        <Skillsicon>
                            <img src={html} alt="" />
                            <img src={css} alt="" />
                            <img src={javascript} alt="" />
                            <img src={react} alt="" />
                            <img src={github} alt="" />
                            <img src={gitcontrol} alt="" />
                            <img src={vscode} alt="" />
                            <img src={vscodeicons} alt="" />
                            <img src={styledcomponents} alt="" />
                            <img src={api} alt="" />
                            <img src={expressjs} alt="" />
                            <img src={mongo} alt="" />

                        </Skillsicon>
                    </Detailskills>

                 
                </Skillsdetails>
            </Skillscont>

        </Wrapper>
    )
}

export default Skills

const Wrapper = styled.div`
    /* background-color: #80808016; */
    background-image: url(${codebg});
    /* border: 1px solid ; */
    /* width: 100%; */
    height: auto;
    margin: 0 auto;
`
const Skillscont = styled.div`
    max-width: 1920px;
    width: 85%;
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
    font-size: 50px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
   }

   img{
    width: 200px;
    margin: 0 auto;
   }
`
const Detailskills = styled.div`
    
    
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
    margin: 70px 0;
    img{
        width: 70px;
    }
`

