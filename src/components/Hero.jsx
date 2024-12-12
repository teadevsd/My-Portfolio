import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import teadev from "../assets/jpg/teadee.jpg";
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <Wrapper>
      <span className='imghover'></span>
      <Innerwrapper>
        <h1>Hi, I'm Temitope Anjorin</h1>
        <h3>Full-stack Developer</h3>
        <p>
        I help businesses grow by crafting exceptional web experiences. If you’re looking for a developer who’s all about turning ideas into reality and getting things done, let’s connect!
        </p>

        <Button>
          <a href="mailto:anjorinemmanuelt@gmail.com">Hire Me</a>
          <a href="tel:+2348162497407">Let's Talk</a>
        </Button>

        <Icons>
          <Link to= "https://github.com/teadevsd"><FaGithub /></Link>
          <Link to= "https://x.com/teanjorin"><FaSquareXTwitter /></Link>
          <Link to= "https://linkedin.com/in/temitope-anjorin"><FaLinkedin /></Link>
        </Icons>
      </Innerwrapper>
    </Wrapper>
  );
};

export default Hero;

const showRight = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`;

const moveRight = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  background-image: url(${teadev});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  padding: 0 10%;
  position: relative;
  opacity: 1;

  .imghover {
    position: absolute;
    top: 0;
    right: 0px;
    width: 550px;
    height: 100%;
    background: transparent;
    transition: 3s;
    z-index: 0;

    &:hover {
      background: #081b29;
      opacity: 0.8;
    }
  }

  @media (max-width: 768px) {
    padding: 0 5%;
    .imghover {
      width: 400px;
    }
    background-image: url(${teadev});
    background-position: center;
    background-size: cover;
    opacity: 0.9; 
  }

  @media (max-width: 480px) {
    padding: 0 3%;
    .imghover {
      width: 250px;
    }
    background-image: url(${teadev});
    background-position: center;
    background-size: cover;
    opacity: 0.9; 
  }
`;

const Innerwrapper = styled.div`
  max-width: 500px;
  color: #ededed;
  position: relative;
  animation: ${moveRight} 1.5s ease-out;
  z-index: 10;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    animation: ${showRight} 1s ease forwards;
    animation-delay: 1s;
    z-index: -1;
  }

  h1 {
    font-size: 36px;
    font-weight: 600;
    position: relative;
    line-height: 1.1;
  }

  h3 {
    font-size: 30px;
    font-weight: 500;
    color: #00abf0;
  }

  p {
    font-size: 14px;
    margin: 20px 0;
  }
`;

const Button = styled.div`
  width: 345px;
  height: 50px;
  display: flex;
  justify-content: space-between;

  a {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 100%;
    background: #00abf0;
    border: 1px solid #00abf0;
    border-radius: 8px;
    font-size: 19px;
    text-decoration: none;
    color: #081b29;
    font-weight: 600;
    letter-spacing: 1px;
    z-index: 1;
    overflow: hidden;
    transition: 0.5s;

    &:hover {
      color: #00abf0;
    }

    &:nth-child(2) {
      background: transparent;
      color: #00abf0;
    }

    &:nth-child(2):hover {
      color: #081b29;
    }

    &:nth-child(2)::before {
      background: #00abf0;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background: #081b29;
      z-index: -1;
      transition: 0.5s;
    }

    &:hover::before {
      width: 100%;
    }
  }
`;

const Icons = styled.div`
  font-size: 24px;
  position: absolute;
  bottom: -100px;
  width: 200px;
  display: flex;
  justify-content: space-between;

  a {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: transparent;
    border: 2px solid #00abf0;
    color: #00abf0;
    text-decoration: none;
    border-radius: 50%;
    z-index: 1;
    overflow: hidden;
    transition: 0.5s;

    &:hover {
      color: #081b29;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background: #00abf0;
      z-index: -1;
      transition: 0.5s;
    }

    &:hover::before {
      width: 100%;
    }
  }
`;
