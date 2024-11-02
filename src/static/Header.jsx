import styled from "styled-components";
import { Link } from "react-router-dom";
import logo2 from "/logoo.png";
import { GrContact } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
import { RiProjectorFill } from "react-icons/ri";
import { IoReorderTwoOutline } from "react-icons/io5";
import { useState } from "react";
import Sidebar from "./SideBar"; // Import the Sidebar component

const Header = () => {
    const [isDisplayed, setIsDisplayed] = useState(false); // State to control Sidebar display

    const handleToggle = () => {
        setIsDisplayed(!isDisplayed); // Toggle Sidebar visibility
    };

    return (
        <Wrapper>
            <Innerhead>
                <Logo><img src={logo2} alt="Logo" /></Logo>

                <Headcont>
                    <Nav>
                        <Link to="/">
                            <p>Home</p>
                        </Link>
                        <Link to="/about">
                            <p>About</p>
                        </Link>
                    </Nav>

                    <Social>
                        <Link to="/connect">
                            <p>
                                <Iconstyle as={GrContact} /> <span>Connect</span>
                            </p>
                        </Link>
                        <Link to="/skills">
                            <p>
                                <Iconstyle as={GiSkills} /> <span>Skills</span>
                            </p>
                        </Link>
                        <Link to="/projects">
                            <p>
                                <Iconstyle as={RiProjectorFill} /> <span>Projects</span>
                            </p>
                        </Link>
                    </Social>
                </Headcont>

                <Sidenav onClick={handleToggle}>
                    <IoReorderTwoOutline />
                </Sidenav>
            </Innerhead>

            {isDisplayed && <Sidebar setDisplay={setIsDisplayed} />} {/* Render Sidebar based on state */}
        </Wrapper>
    );
};

export default Header;

// Styled Components remain the same...


const Wrapper = styled.div`
    width: 100%;
    background-color: #ffffff;
    margin: 0 auto;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;

const Innerhead = styled.div`
    margin: 0 auto;
    max-width: 1920px;
    width: 85%;
    height: 70px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media (max-width: 480px) {
        justify-content: space-between;
    }
`;

const Logo = styled.div`
    img{
        width: 120px;
    }
`;

const Headcont = styled.div`
    display: flex;
    gap: 40px;
    align-items: center;

    a{
        text-decoration: none;
    }
    @media (max-width: 480px) {
        display: none;
    }
`;

const Nav = styled.div`
    display: flex;
    gap: 40px;
    font-size: 16px;
    color: #000000;
    cursor: pointer;

    p:first-child {
        color: #720202;
    }
`;

const Search = styled.div`
    display: flex;
    background-color: white;
    width: 180px;
    border-radius: 20px;
    align-items: center;
    margin-left: 30px;
    font-size: 14px;

    img{
        width: 30px;
    }
    input {
        width: 140px;
        height: 20px;
        outline: none;
        border: none;
        border-radius: 20px;
    }

    @media (max-width: 1280px) {
        input {
            display: none; 
        }

        img {
            display: block;
            width: 30px; 
            height: auto; 
        }
    }
`;

const Social = styled.div`
    display: flex;
    gap: 40px;
    align-items: center;
    color: #000000;
    font-size: 16px;
    margin-left: 30px;

    p {
        display: flex;
        align-items: center;
        gap: 8px; 
        cursor: pointer;
    }

    @media (max-width: 1280px) {
        span {
            display: none; 
        }
    }
    
`;

const Iconstyle = styled.div`
    color:  #ff0000;
    font-size: 20px;
`;

const Sidenav = styled.div`
    font-size: 30px;
    display: none;

    @media (max-width: 480px) {
        display: block;
    }
`