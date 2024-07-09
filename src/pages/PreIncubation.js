import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaHandPointRight } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import Square from './Square';

// Images
import bannerImage from '../assets/PreIncubation/Newimage.png';


const fadeIn = keyframes`
  from {
    opacity: 0.2;
    transform: translateY(1rem) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;
  
  const PreIncubation = () => {
    const points = [
        "Introduction to Entrepreneurship",
        "Ideation & Idea Validation",
        "Problem Solution Modelling",
        "Problem sizing, validation Understanding Customer Empathy",
        "Optimizing The Startup Journey with Key Strategies of Bootstrapping",
        "Ideation - Value Creating Solutions",
        "Market Research & Validation",
        "Basics of Venture Creation (Legal Structures & Compliances)",
        "Costing Inclusive and Unit Costing",
        "Financial Statements",
        "Finance Management - Cash Flows & Funding & Working Capital",
        "Metrics To Measure (Besides Pitching & Plan)",
        "Frugal Innovation",
        "Managing Accounts and Bookkeeping",
        "Business Modelling",
        "IPR and Legal Compliances",
        "Build a Brand",
        "Business Planning",
        "Pitch Deck Presentation Skills",
        "Panel Discussion: Investor Empathy & Funding Readiness",
        "Metrics to measure (besides pitching & business plan)",
        "Pitch Deck Presentation & Group Mentoring"
      ];
      
    
      return (
        <>

    <div class='image'>
        <Image src={bannerImage} alt="BannerImage" />
    </div>
      


    <PointsContainer>
          <Heading>Pre Incubation Program topics covered</Heading>
          <PointsList>
            {points.map((point, index) => (
              <PointItem key={index} index={index}>
                <FaHandPointRight /> {point}
              </PointItem>
            ))}
          </PointsList>
        </PointsContainer>

        <Square/>

        

        </>
      );
    };
    


  
  
  const Image = styled.img`
    width: 80%;
    height: 20%;
    max-height: 500px; 
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    margin-left:90px
  `;


    const PointsContainer = styled.div`
      margin: 40px auto 20px;
      max-width: 1000px;
      padding: 10px 10px;
    `;
    
    const Heading = styled.h2`
      justify-content: center;
      font-size: 2.5em;
      color: white;
      margin-bottom: 20px;
      background-color: #12283c;
      padding: 10px 30px;
      transition: transform 0.3s ease-in-out;
    
      &:hover {
        transform: scale(1.1);
      }
    `;
    
    const PointsList = styled.ul`
      list-style: none;
      padding: 0;
    `;
    
    const PointItem = ({ children, index }) => {
      const { ref, inView } = useInView({
        threshold: 0.1
      });
      const [isVisible, setIsVisible] = useState(false);
    
      useEffect(() => {
        if (inView) {
          setIsVisible(false);
          setTimeout(() => setIsVisible(true), 0);
        }
      }, [inView]);
    
      return (
        <StyledPointItem ref={ref} isVisible={isVisible} index={index}>
          {children}
        </StyledPointItem>
      );
    };
    
    const StyledPointItem = styled.li`
      font-size: 1.2em;
      margin: 20px 0;
      font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
      color: #12283c;
      display: flex;
      align-items: center;
      opacity: 0;
      animation: ${({ isVisible }) => isVisible && fadeIn} 0.3s cubic-bezier(0.14, 0.18, 0.16, 1.02) forwards;
      animation-delay: ${({ index }) => index * 0.08}s;
    
      & > svg {
        margin-right: 10px;
        color: #12283c;
      }
    `;
   

  
  export default PreIncubation
  
  
