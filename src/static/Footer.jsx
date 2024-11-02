import styled from "styled-components";
import { FaAngleDoubleUp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <Wrapper>
            <Footerwap>
                <Moveuparrow>
                    {/* <Topup>
                        <FaAngleDoubleUp/>
                        <p>BACK TO TOP</p>
                    </Topup> */}

                    <Footericons>
                        <FaGithub/>
                        <MdEmail/>
                        <FaLinkedin/>
                    </Footericons>

                    <p>@2024 Teadev. All Rights Reserved.</p>
                </Moveuparrow>
            </Footerwap>
        </Wrapper>
    )
}

export default Footer

const Wrapper = styled.div` 
    height: 150px;
    width: 100%;
    margin: 0 auto;
    background-color: #e8e7e7;
`
const Footerwap = styled.div`
     max-width: 1920px;
    width: 85%;
    margin: 0 auto;
`
const Topup = styled.div`
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
`
const Moveuparrow = styled.div`
    text-align: center;
    padding: 30px 0;
`
const Footericons = styled.div`
    display: flex;
    justify-content: center;
    font-size: 28px;
    gap: 30px;
    margin: 20px 0;
    cursor: pointer;
`