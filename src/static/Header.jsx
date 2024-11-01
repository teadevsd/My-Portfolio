import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { TbBrandDiscord } from "react-icons/tb";
import { FaGithub } from "react-icons/fa6";
import search from "../assets/png/search.png"

const Header = () => {
    return (
        <Wrapper>
            <Innerhead>
                <Logo><h3>Teaddev</h3></Logo>
                <Headcont>
                    <Nav>
                        <p>Home</p>
                        <p>Blogs</p>
                    </Nav>

                    <Search>
                        <input type="text" />
                        <img src={search} alt="Search" />
                    </Search>

                    <Social>
                        <p> 
                            <Iconstyle as={FaInstagram} /> <span>Instagram</span>
                        </p>
                        <p> 
                            <Iconstyle as={TbBrandDiscord} /> <span>Discord</span>
                        </p>
                        <p> 
                            <Iconstyle as={FaGithub} /> <span>Github</span>
                        </p>
                    </Social>
                </Headcont>
            </Innerhead>
        </Wrapper>
    );
}

export default Header;

const Wrapper = styled.div`
    width: 100%;
    background-color: #f7d79f72;
    margin: 0 auto;
`;

const Innerhead = styled.div`
    margin: 0 auto;
    max-width: 1920px;
    width: 85%;
    height: 70px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const Logo = styled.div`
    color: #000000;
    font-size: 16px;
`;

const Headcont = styled.div`
    display: flex;
    gap: 40px;
    align-items: center;
`;

const Nav = styled.div`
    display: flex;
    gap: 40px;
    font-size: 16px;
    color: #000000;

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
