import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes, css } from 'styled-components';
import Slider from "react-slick";
import FocusArea from './FocusArea';
import Logos from './Slider';
import Chuma from './Chuma';
import RoadMap from '../components/RoadMap';

// Sample images for the carousel
import slide1 from '../assets/group.JPG';
import slide2 from '../assets/goup1.jpeg';
import slide3 from '../assets/dummy3.jpg';
import slide4 from '../assets/dummy4.jpg';
import slide5 from '../assets/dummy5.jpg';
import slide6 from '../assets/dummy6.jpg';
import slide7 from '../assets/dummy7.jpg';

// Image for the Hero section
import nicImage from '../assets/aboutc.png';

// Social media icons
import instagramIcon from '../assets/Instagram.svg';
import twitterIcon from '../assets/Twitter.svg';
import linkedinIcon from '../assets/Linkedin.svg';
import youtubeIcon from '../assets/Youtube.svg';

// Images for the Upcoming Events section
import poster from '../assets/poster.jpg';
import poster2 from '../assets/poster.jpg';
import calendarIcon from '../assets/calendar.png';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  const heroRef = useRef(null);
  const postersRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const heroOffset = heroRef.current.offsetTop;
      const postersOffset = postersRef.current.offsetTop;

      if (scrollPosition >= heroOffset && !isVisible) {
        setIsVisible(true);
      } else if (scrollPosition < heroOffset && isVisible) {
        setIsVisible(false);
      }

      if (scrollPosition >= postersOffset) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    appendDots: dots => <CustomDots>{dots}</CustomDots>
  };

  return (
    <HomePage>
      <SocialMediaContainer>
        <a href="https://www.instagram.com/aic_pecf?igsh=MW5iam5nYnYyY2hxbg==" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a href="https://x.com/aicpecftweet?t=WpgCBp7UIGqgBPhGT5wrfA&s=09" target="_blank" rel="noopener noreferrer">
          <img src={twitterIcon} alt="Twitter" />
        </a>
        <a href="https://www.linkedin.com/company/aicpecf/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="Linkedin" />
        </a>
        <a href="https://youtube.com/@atalincubationcentre-pecfo946?si=S2Ic-rMLwHU49irU" target="_blank" rel="noopener noreferrer">
          <img src={youtubeIcon} alt="YouTube" />
        </a>
      </SocialMediaContainer>
      <CarouselSection>
        <Slider {...settings}>
          <Slide>
            <img src={slide1} alt="Slide 1" />
          </Slide>
          <Slide>
            <img src={slide2} alt="Slide 2" />
          </Slide>
          <Slide>
            <img src={slide3} alt="Slide 3" />
          </Slide>
          <Slide>
            <img src={slide4} alt="Slide 4" />
          </Slide>
          <Slide>
            <img src={slide5} alt="Slide 5" />
          </Slide>
          <Slide>
            <img src={slide6} alt="Slide 6" />
          </Slide>
          <Slide>
            <img src={slide7} alt="Slide 7" />
          </Slide>
        </Slider>
      </CarouselSection>
      <HeroSection ref={heroRef} isVisible={isVisible}>
        <HeroContent>
          <HeroImage src={nicImage} alt="NIC" />
          <HeroText>
            <h1>About Us</h1>
            <p>
              Atal Incubation Centre - Pondicherry Engineering College Foundation (AIC-PECF) is fully supported and funded by              Atal Innovation Mission (AIM), Niti Aayog, Government of India. AIC-PECF was initiated to provide a platform to assist and enable young entrepreneurs to initiate startups for the commercial exploitation of technologies developed by them. AIC-
              PECF also enables the budding entrepreneurs to showcase and test their abilities to run a start-up business in the areas of Electronics design and Manufacturing (EDM), Internet of Things (IoT), and Unmanned Aerial Vehicle (UAV). The incubation center provides a wide range of resources that enable it to: Empower innovators to pursue their entrepreneurial goals that improve people’s lives, generate employment and drive the economy - Connect start-ups with mentor community for guidance
            </p>
            <HeroButton as={Link} to="/about">Learn More</HeroButton>

          </HeroText>
        </HeroContent>
      </HeroSection>

      <UpcomingEvents ref={postersRef} isVisible={isVisible}>
  <h2 style={{ display: 'flex', alignItems: 'center' }}>
    <CalendarIcon src={calendarIcon} alt="Calendar" />
    Upcoming Events
  </h2>
  <PostersGrid>
    <PosterContainer>
      <Poster src={poster} alt="Upcoming Event 1" />
      <ApplyButton>Apply</ApplyButton>
    </PosterContainer>
    <PosterContainer>
      <Poster src={poster2} alt="Upcoming Event 2" />
      <ApplyButton>Apply</ApplyButton>
    </PosterContainer>
  </PostersGrid>
</UpcomingEvents>

      <FocusArea />  {/* Include the FocusArea component here */}
      <Chuma/>
      <RoadMap/>
      <Logos/>
    </HomePage>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const scaleUp = keyframes`
  from {
    transform: scale(0.5);
  }
  to {
    transform: scale(1);
  }
`;

const HomePage = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
`;

const CustomDots = styled.ul`
  bottom: -30px;
`;

// Rest of your styled components remain unchanged...
const HeroSection = styled.section`
  width: 100%;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #12283c;
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transform: scale(0.5);
  transition: opacity 1s ease, transform 1s ease;

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      transform: scale(1);
    `};
`;

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  gap: 50px;
  padding: 20px;
  border-radius: 10px;
  font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
`;

const HeroImage = styled.img`
  width: 470px;
  height: auto;
  margin-right: 10px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const HeroButton = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1em;
  font-weight: bold;
  color: #fff;
  background-color: #12283c;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  animation: ${({ isVisible }) =>
    isVisible ? css`${fadeIn} 1s ease forwards, ${scaleUp} 1s ease forwards` : 'none'};
  animation-delay: 1.5s;

  &:hover {
    background: orange;
  }
`;

const HeroText = styled.div`
  flex: 1;

  h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
    opacity: 0;
    animation: ${fadeIn} 1s ease forwards;
    animation-delay: 1s;
  }

  p {
    font-size: 1.2em;
    line-height: 1.5;
    opacity: 0;
    animation: ${fadeIn} 1s ease forwards;
    animation-delay: 1.5s;
  }

  ${HeroButton} {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 1em;
    font-weight: bold;
    color: #fff;
    background-color: #12283c;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s;
    opacity: 0;
    animation: ${fadeIn} 1s ease forwards;
    animation-delay: 2s;

    &:hover {
      background-color: orange;
    }
  }
`;

const CarouselSection = styled.section`
  width: 100%;
  padding-bottom: 50px;

  .slick-slide img {
    display: block;
    width: 100%;
    height: 150vh;
    object-fit: cover;
  }
`;

const Slide = styled.div`
  display: flex;
  justify-content: center;
  max-width: 100%;
  align-items: center;
  height: 80vh;

  @media (max-width: 768px) {
    height: 60vh;
  }
`;

const SocialMediaContainer = styled.div`
  position: fixed;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 1000;

  a img {
    width: 30px;
    height: 30px;
    transition: transform 0.2s;
  }

  a:hover img {
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 10px;
    right: 10px;
    flex-direction: row;
    gap: 5px;
    z-index: 1000;

    a img {
      width: 24px;
      height: 24px;
    }
  }
`;

const CalendarIcon = styled.img`
  width: 30px; /* Increase the width */
  height: 30px; /* Increase the height */
  margin-right: 10px; /* Adjust margin as needed */
`;
const PostersGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const PosterContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: calc(100% / 2 - 40px); // Adjust the width to take up full width minus some spacing
  margin-bottom: 20px; // Add some bottom margin for spacing between rows
  overflow: hidden;
  transition: transform 0.3s ease;
  flex: 1; // Ensure the poster container takes up equal space

  &:hover {
    transform: scale(1.1);
  }

  &:hover button {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    max-width: 100%; // Adjust for smaller screens
  }
`;

const Poster = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;
  &:hover {
    filter: blur(1px);
  }
`;

const ApplyButton = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px 20px;
  background-color: white;
  color: #12283c;
  border: 2px solid transparent;
  border-radius: 0;
  border-color: # 12283c;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;

  border-color: #12283c;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  transform: translateY(100%);
  transition-delay: 0.1s;
  font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;

  &:hover {
    background-color: #12283c;
    border-color: white;
    color: white;
  }
`;

const UpcomingEvents = styled.section`
  padding: 50px 200px;
  background: #fff;
  text-align: center;
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transition: opacity 5s ease;
  font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: 1.5em;
  color: #12283c;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Home;

