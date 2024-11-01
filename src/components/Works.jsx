import { useState } from "react";
import styled from "styled-components";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";


import projectone from "../assets/png/projectone.png";
import projecttwo from "../assets/png/projecttwo.png";
import projectthree from "../assets/png/projectthree.png";
import projectfour from "../assets/png/projectfour.png";
import projectfive from "../assets/png/projectfive.png";

import scroll from "../assets/png/scroll.png";
import line from "../assets/png/line.png";

const Works = () => {
    const projects = [projectone, projecttwo, projectthree, projectfour, projectfive];
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <Wrapper>
            <Workscont>
                <Headimg>
                    <img src={scroll} alt="Scroll icon" />
                </Headimg>

                <Worksdetails>
                    <Detailswork>
                        <p>Projects</p>
                        <img src={line} alt="Line icon" />
                      
                        <Workimage>
                            <Iconstyles onClick={handlePrev} as={IoIosArrowDropleftCircle} />

                            <SlideContainer>
                                <img src={projects[currentIndex]} alt={`Project ${currentIndex + 1}`} />
                            </SlideContainer>

                            <Iconstyles onClick={handleNext} as={IoIosArrowDroprightCircle} />
                        </Workimage>
                    </Detailswork>
                </Worksdetails>
            </Workscont>
        </Wrapper>
    );
};

export default Works;

const Wrapper = styled.div`
    height: auto;
    margin: 0 auto;
`;
const Workscont = styled.div`
    max-width: 1920px;
    width: 85%;
    margin: 0 auto;
`;
const Headimg = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px 0;
    img {
        width: 20px;
    }
`;
const Worksdetails = styled.div`
    text-align: center;

    p {
        font-size: 50px;
        display: flex;
        justify-content: center;
        text-align: center;
    }

    img {
        width: 200px;
    }
`;
const Detailswork = styled.div``;
const Workimage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;
const Iconstyles = styled.div`
    font-size: 50px;
    cursor: pointer;
    color: #393939;
`;
const SlideContainer = styled.div`
    width: 700px;
    display: flex;
    justify-content: center;
    overflow: hidden;

    img {
        width: 100%;
        transition: transform 0.5s ease; 
    }
`;
