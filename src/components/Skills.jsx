import styled from "styled-components";
import python from "../assets/png/pythoned.png";
import line from "../assets/png/line.png";
import { MdMonitor } from "react-icons/md";
import { FaCodeBranch } from "react-icons/fa6";
import codebg from "../assets/png/cdee.png";
import  html from "../assets/svg/html.svg";
import  css from "../assets/svg/css.svg";
import  javascript from "../assets/svg/javascript.svg";
import  react from "../assets/svg/react.svg";
import  github from "../assets/svg/github.svg";
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
                {/* <Headimg>
                    <img src={scroll} alt="" />
                </Headimg> */}

                <Skillsdetails>
                    <Detailskills>
                       

                        <Skillsdiv>
                          <Buttonone> <MdMonitor/> Front end Deloper <span>HTML. CSS. JS. REACT.</span></Buttonone>
                          <Buttontwo> <FaCodeBranch/> Back end Developer <span>MONGOJS. NODEJS</span></Buttontwo>
                        </Skillsdiv>
                        
                      
                        <Skillsicon>
                        <h2>USING NOW:</h2>
                            <p><img src={html} alt="" />HTML5</p>
                            <p><img src={css} alt="" />CSS3</p>
                            <p><img src={javascript} alt="" />JAVASCRIPT</p>
                            <p><img src={react} alt="" />REACT</p>
                            <p><img src={github} alt="" />GITHUB</p>
                            <p><img src={styledcomponents} alt="" />STYLE <br/>COMPONENTS</p>
                            <p><img src={api} alt="" />CONTEXT API</p>
                            <p><img src={expressjs} alt="" />NODE JS</p>
                            <p><img src={mongo} alt="" />MONGO</p>
                        </Skillsicon>

                       
                        <Skillsicon>
                            
                        <h2>LEARNING:</h2>
                            <p><img src={typescript} alt="" />TYPESCRIPT</p>
                            <p><img src={sql} alt="" />MY SQL</p>
                            <p><img src={python} alt="python" />PYTHON</p>


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
    margin: 0 auto;
    color: #ededed;
`
const Skillscont = styled.div`
    max-width: 1920px;
    width: 80%;
    margin: 0 auto;
    background-color: #0000006e;
    border-radius: 4px;
    margin-top: 100px;
    height: auto;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`
const Skillsdetails = styled.div`
    text-align: center;
   p {
    font-size: 18px;
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

/* padding: 50px; */
    h2{
        background-color: #081b29;
        width: 80px;
        height: 30px;
        border-radius: 8px;
        color: #ededed;
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
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
    min-width: 200px;
    height: 100px;
    background-color: #ededed;
    border-radius: 4px;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #081b29;
    padding: 20px;

    span{
        font-weight: bold;
        color: #081b29;
    }
`
const Buttontwo = styled.div`
    min-width: 200px;
    height: 100px;
    background-color: #081b29;
    border-radius: 4px;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    padding: 30px;

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
    align-items: center;
    margin: 40px 0;
    
    img{
        width: 50px;
    }

    p{
        font-size: 12px;
        font-weight: bold;
        display: flex;
        gap: 30px;
        margin-top: 10px;
    }

       
`

