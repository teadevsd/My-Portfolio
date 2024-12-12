import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { IoReorderTwoOutline } from "react-icons/io5";
import Sidebar from './SideBar';
import { Link } from 'react-router-dom';

const Header = () => {
    const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  
  return (
  <>
      <Wrapper>
        <Innerwrapper>
            <a href="" className='logo'>teadev.</a>
            <Navlist>
                <Link to= "/"><p>Home</p></Link>
                <Link to= "/about"><p>About</p></Link>
                <Link to= "/skills"><p>Skills</p></Link>
                <Link to= "/projects"><p>Projects</p></Link>
                <Link to= "/contact"><p>Contact</p></Link>
            </Navlist>

            <Sidenav onClick={handleToggle}>
            <IoReorderTwoOutline />
          </Sidenav>

        </Innerwrapper>
    </Wrapper>
     {toggle && <Sidebar setDisplay={setToggle} />}
  </>
  )
}

export default Header


const showRight = keyframes`
  100% {
    width: 0;
  }
`

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px 5%;
    background-color: transparent;
    z-index: 100;

    
`

const Innerwrapper = styled.div`
    max-width: 1280px; 
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
    margin: 0 auto;

    .logo {
        position: relative;
        text-decoration: none;
        font-size: 25px;
        color: #ededed;
        font-weight: 600;

        &::before {
            content: '';
            top: 0;
            right: 0;
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: #081b29;
            animation: ${showRight} 1s ease forwards; 
            animation-delay: .4s;
        }

      @media (max-width: 768px) {
        justify-content: space-between;
      }
    }

`

const Navlist = styled.div`
    display: flex;
    align-items: center;

    a {
        text-decoration: none;
        color: #ededed;
        font-weight: 500;
        margin-left: 40px;
        z-index: 100;
        font-size: 13px;
    }

    &:hover {
        color: #00abf0;
    }

    @media (max-width: 768px) {
    display: none;
  }

`
const Sidenav = styled.div`
  font-size: 40px;
  display: none;
  color: #fff;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;
