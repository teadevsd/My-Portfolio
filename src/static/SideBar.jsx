import styled from "styled-components";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";



const Sidebar = ({ setDisplay }) => {
    const handleLinkClick = () => {
        setDisplay(false); 
    };

    return (
        <Container>
            <Naviga>
                <Styledlink to="/" activeClassName="active" onClick={handleLinkClick}>
                    <nav>Home</nav>
                </Styledlink>

                <Styledlink to="/about" activeClassName="active" onClick={handleLinkClick}>
                    <nav>About</nav>
                </Styledlink>

                <Styledlink to="/contact" activeClassName="active" onClick={handleLinkClick}>
                    <nav>Contact</nav>
                </Styledlink>

                <Styledlink to="/skills" activeClassName="active" onClick={handleLinkClick}>
                    <nav>Skills</nav>
                </Styledlink>

                <Styledlink to="/projects" activeClassName="active" onClick={handleLinkClick}>
                    <nav>Project</nav>
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

    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        border-bottom: 1px solid lightgrey;
        font-size: 16px;
        font-weight: 500;
        padding: 20px 0;
        color: #ededed;
        transition: color 0.3s ease;

        &:hover {
            color: #00abf0;
        }
    }

    &.active nav {
        color: #00abf0;
        font-weight: 600; 
    }
`;
