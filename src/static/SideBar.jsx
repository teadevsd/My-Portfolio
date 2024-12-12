import styled from "styled-components";
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";


const Sidebar = ({ setDisplay }) => {
    const handleLinkClick = () => {
        setDisplay(false); 
        
    };

    return (
        <Container>
            <Naviga>
                <Styledlink to="/" onClick={handleLinkClick}>
                    <nav> Home  </nav>
                </Styledlink>

                <Styledlink to="/about" onClick={handleLinkClick}>
                    <nav>About </nav>
                </Styledlink>

                <Styledlink to="/connect" onClick={handleLinkClick}>
                    <nav>Connect </nav>
                </Styledlink>

                <Styledlink to="/skills" onClick={handleLinkClick}>
                    <nav>Skills </nav>
                </Styledlink>

                <Styledlink to="/projects" onClick={handleLinkClick}>
                    <nav>Project </nav>
                </Styledlink>
            </Naviga>
        </Container>
    );
};

export default Sidebar;



const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding-left: 20px;
    margin-top: 80px;
`
const Naviga = styled.div`
    
    /* display: flex;
    justify-content: se; */
`
const Styledlink = styled(Link)`
    text-decoration: none;
    nav{
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        border-bottom: 1px solid lightgrey;
        /* margin-bottom: 10px; */
        font-size: 16px;
        font-weight: 500;
        padding: 20px 0;
        color: #ededed;
    }
    
    
`