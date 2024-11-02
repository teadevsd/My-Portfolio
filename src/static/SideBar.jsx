import styled from "styled-components";
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";

const Sidebar = ({ setDisplay }) => {
    const handleLinkClick = () => {
        setDisplay(false); // Hide Sidebar when a link is clicked
    };

    return (
        <Container>
            <Naviga>
                <Styledlink to="/" onClick={handleLinkClick}>
                    <nav>Home <IoMdArrowDropright /> </nav>
                </Styledlink>

                <Styledlink to="/about" onClick={handleLinkClick}>
                    <nav>About <IoMdArrowDropright /></nav>
                </Styledlink>

                <Styledlink to="/connect" onClick={handleLinkClick}>
                    <nav>Connect <IoMdArrowDropright /></nav>
                </Styledlink>

                <Styledlink to="/skills" onClick={handleLinkClick}>
                    <nav>Skills <IoMdArrowDropright /></nav>
                </Styledlink>

                <Styledlink to="/projects" onClick={handleLinkClick}>
                    <nav>Project <IoMdArrowDropright /></nav>
                </Styledlink>
            </Naviga>
        </Container>
    );
};

export default Sidebar;

// Styled Components remain the same...


const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding-left: 20px;
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
        color: #000000;
    }
    
    
`