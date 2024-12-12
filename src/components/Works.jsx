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
    const projects = [
        { image: projectone, link: "https://example.com/projectone" },
        { image: projecttwo, link: "https://coolors-teadev.vercel.app/" },
        { image: projectthree, link: "https://furnicoo.vercel.app/" },
        { image: projectfour, link: "https://shopping-cart-teadev.vercel.app/" },
        { image: projectfive, link: "https://kuda-app-teadev--six.vercel.app/" },
    ];
    
    const captions = [
        "Make Remote clone Application\n A web application designed to streamline the search for remote job opportunities across various industries. Built using HTML, CSS, JavaScript, and React, this app allows users to search, filter, and save remote job listings based on keywords, job type, and location preferences. It features a responsive design with intuitive navigation, user-friendly job bookmarking, and sorting options for enhanced search experience. The application integrates with APIs to fetch real-time job data, providing users with an up-to-date, efficient solution for finding remote work.",

        "Coolors.io Clone Application\n color palette generator inspired by Coolors.io, allowing users to create, explore, and save unique color schemes. Built using HTML, CSS, JavaScript, and React, with functionality to lock colors, adjust shades, and copy hex codes easily. The app includes an interactive and responsive UI with keyboard shortcuts and random color generation, making it a convenient tool for designers and developers to discover and organize color palettes.",

        "Furniture E-Commerce Web Application\n A fully functional e-commerce website tailored for a furniture business, featuring dynamic product listings, an interactive shopping cart, and a secure checkout process. Built with HTML, CSS, JavaScript, and React, the site is designed for a seamless, responsive user experience across devices. Includes advanced product filtering, search functionality, and an intuitive UI that makes browsing and purchasing furniture easy and enjoyable for customers.",

        "E-commerce Functional Web Page \n An A fully functional e-commerce website featuring product listings, a shopping cart, and checkout functionality. Developed using HTML, CSS, JavaScript, and React, with a focus on responsive design and smooth user experience. ",

        "Kuda Clone App\n A clone of the popular Kuda banking app designed as a personal project to enhance front-end skills. Replicated key features of the original app, focusing on layout, navigation, and interactivity using React and CSS."
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [showFullCaption, setShowFullCaption] = useState(false);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
        setShowFullCaption(false);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
        setShowFullCaption(false);
    };

    const toggleCaption = () => {
        setShowFullCaption((prevShow) => !prevShow);
    };

    return (
        <Wrapper>
            <Workscont>
                {/* <Headimg>
                    <img src={scroll} alt="Scroll icon" />
                </Headimg> */}

                <Worksdetails>
                    <Detailswork>
                        
                      
                        <Workimage>
                            <Iconstyles onClick={handlePrev} as={IoIosArrowDropleftCircle} />

                            <SlideContainer>
                                <a href={projects[currentIndex].link} target="_blank" rel="noopener noreferrer">
                                    <img src={projects[currentIndex].image} alt={`Project ${currentIndex + 1}`} />
                                </a>
                            </SlideContainer>


                            <Iconstyles onClick={handleNext} as={IoIosArrowDroprightCircle} />
                        </Workimage>

                        <CaptionContainer>
                            <Caption>
                                {showFullCaption ? captions[currentIndex] : `${captions[currentIndex].slice(0, 100)}...`}
                            </Caption>
                            <ReadMoreButton onClick={toggleCaption}>
                                {showFullCaption ? "Read Less" : "Read More"}
                            </ReadMoreButton>
                        </CaptionContainer>


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
    margin-top: 120px;

    p {
        font-size: 26px;
        display: flex;
        justify-content: center;
        text-align: center;
        color: #ededed;
    }

    img {
        width: 150px;
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
    color: #00abf0;
`;
const SlideContainer = styled.div`
    width: 400px;
    display: flex;
    justify-content: center;
    overflow: hidden;

    img {
        width: 100%;
        transition: transform 0.5s ease; 
    }
`;
const CaptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
    margin: 40px auto;
`;

const Caption = styled.p`
    font-size: 12px !important;
    color: #333;
    padding: 0 20px;
    line-height: 1.5;
    text-align: justify !important;
    font-family: inherit !important;
`;

const ReadMoreButton = styled.button`
    margin-top: 10px; 
    padding: 8px 12px;
    background-color: #00abf0;
    border: none;
    border-radius: 4px;
    color: #ffffff;
    font-weight: bold;
    cursor: pointer;
    text-decoration: underline;
    font-size: 12px;

    &:hover {
        color: #000000;
    }
`;

