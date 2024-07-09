import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

import Logo1 from '../assets/startups/logo1.png';
import Logo2 from '../assets/startups/nevar.png';
import Logo3 from '../assets/startups/guru.png';
import Logo4 from '../assets/startups/flowget.png';
import Logo5 from '../assets/startups/oli1.png';
import Logo6 from '../assets/startups/sss.png';
import intro from '../assets/startups/intros.jpg';
import aLogo1 from '../assets/startups/a_logo1.png';
import aLogo2 from '../assets/startups/a_logo2.png';
import aLogo3 from '../assets/startups/a_logo3.png';

const Portfolio = () => {
    const startups = [
    {
      id: 1,
      logo: Logo1,
      title: 'Aero Knotz',
      description: `Aero knotz provides courses for those keen on entering the drone
      world, aiding India's youth employment and tech graduates
      prospects. Our drone tech courses train students for professional
      piloting roles, opening doors in industries like infrastructure, film,
      surveying, and agriculture. Mastery of drone technology gives our
      students a competitive edge in the job market.`,
      status: 'Current',
      additionalContent: [
        { title: 'Course 1', description: 'Details about Course 1' },
        { title: 'Course 2', description: 'Details about Course 2' },
        { title: 'Course 3', description: 'Details about Course 3' }
      ],
      additionalLogos: [aLogo1, aLogo2, aLogo3],
      website: 'https://aeroknotz.com',
    },
    {
      id: 2,
      logo: Logo2,
      title: 'NEVAR SYSTEMS',
      description: `Developing drone products and providing
      services in the field of technology and software
      analytics to develop end to end drone solutions.
      (DaaS) Drone-as-a-Service – Make in India
      Micro class category autonomous drones for
      commercial & defence industry..`,
      status: 'Graduate',
      additionalContent: [
        { title: `Revenue Generated    
          (FY 2023-2024)`, description: 'INR 70 Lakhs' },
        { title: 'Grant Released', description: 'INR 14.20 Lakhs' },
        { title: 'Sector', description: 'UAV' }
      ],
      additionalLogos: [aLogo1, aLogo2, aLogo3],
      website: 'https://nevarsystems.com',
    },
    {
      id: 3,
      logo: Logo3,
      title: 'FUTURE GURUKULS',
      description: `Aiming to impart 21st centuries skills like - coding,
      Robotics, IoT, Drone , 3D printing etc. to school
      students, we provide Robotics lab in schools.
      Offline edutech offering K12 – STEM training to
      young minds at school level by imparting the
      skill-set of Robotics, Coding, IoT and creative
      ability.`,
      status: 'Graduate',
      additionalContent: [
        { title: `Revenue Generated    
          (FY 2023-2024)`, description: 'INR 19 Lakhs' },
        { title: 'Grant Released', description: 'INR 11.28 Lakhs' },
        { title: 'Sector', description: 'Edu-Tech' }
      ],
      additionalLogos: [aLogo1, aLogo2, aLogo3],
      website: 'https://futuregurukuls.in/',
    },
    {
      id: 4,
      logo: Logo4,
      title: 'FLOWGET SOLUTIONS',
      description: `Flowget Solutions Pvt. Ltd. is a Smart Water
      Solution Provider & Supplier of IoT based Smart
      Watering Systems for Industries & Residential
      people. Our Smart Water Metering Solutions are
      based on Cutting Edge Digital Technology proven
      to Next Gen Commercial Metering Sources.`,
      status: 'Graduate',
      additionalContent: [
        { title: `Revenue Generated    
          (FY 2023-2024)`, description: 'INR 75K' },
        { title: 'Grant Released', description: 'INR 14.50 Lakhs' },
        { title: 'Sector', description: 'IOT-Tech' }
      ],
      additionalLogos: [aLogo1, aLogo2, aLogo3],
      website: 'https://flowgetsolutions.com',
    },
    
    {
      id: 5,
      logo: Logo5,
      title: 'OPTIMISTIC LIGHT INSIGHT',
      description: `Mobility solution : Auto Service aggregrator
      platform with innovative business model`,
      status: 'Graduate',
      additionalContent: [
        { title: `Revenue Generated    
          (FY 2023-2024)`, description: 'Pre-Revenue Stage' },
        { title: 'Grant Released', description: 'INR 4.88 Lakhs' },
        { title: 'Sector', description: 'Mobility' }
      ],
      additionalLogos: [aLogo1, aLogo2, aLogo3],
      website: 'https://startup5.com',
    },
    {
      id: 6,
      logo: Logo6,
      title: 'SHREE SHAKTHI SHAMBHAVI RENEWABLE ENERGY PVT LTD',
      description: `Sustainable energy solution provider Solar & Micro wind 
      mills energy. EPC/BOOT– Mobile Lighting Mast, LED 
      Manufacturing. Solution Provider for Alternate Energy: 
      Solar & Wind Energy – Today’s Resources for Better 
      Tomorrow. Professional & Energy Efficient Smart Solar 
      Power, Smart Wind Power System.`,
      status: 'Graduate',
      additionalContent: [
        { title: `Revenue Generated    
          (FY 2023-2024)`, description: 'INR 45 Lakhs' },
        { title: 'Grant Released', description: 'INR 14.50 Lakhs' },
        { title: 'Sector', description: 'Renewable Energy ' }
      ],
      additionalLogos: [aLogo1, aLogo2, aLogo3],
      website: 'https://flowgetsolutions.com',
    }
  ];

  const [selectedTab, setSelectedTab] = useState('Current');
  const [highlightStyle, setHighlightStyle] = useState({});
  const tabs = useRef([]);

  useEffect(() => {
    const selectedIndex = selectedTab === 'Current' ? 0 : 1;
    const selectedTabElement = tabs.current[selectedIndex];
    setHighlightStyle({
      width: `${selectedTabElement.offsetWidth}px`,
      left: `${selectedTabElement.offsetLeft}px`
    });
  }, [selectedTab]);

  const useInView = (options) => {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsInView(entry.isIntersecting);
        },
        { ...options }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [ref, options]);

    return [ref, isInView];
  };

  const Card = ({ logo, title, description, status, additionalContent, additionalLogos, website }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [ref, isInView] = useInView({ threshold: 0.5 });
    const [hoverKey, setHoverKey] = useState(0);

    const handleMouseOver = () => {
      setIsHovered(true);
      setHoverKey(prevKey => prevKey + 1);
    };

    const handleMouseOut = () => {
      setIsHovered(false);
    };

    return (
      <CardContainer ref={ref} isInView={isInView}>
        <LogoContainer>
          <a href={website} target="_blank" rel="noopener noreferrer">
            <Logo
              src={logo}
              alt={`${title} Logo`}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
          </a>
        </LogoContainer>
        <ContentContainer>
          <Title>{title}</Title>
          <Description isHovered={isHovered}>{description}</Description>
          <Status status={status}>{status}</Status>
          <AdditionalContent isHovered={isHovered} key={hoverKey}>
            {additionalContent.map((content, index) => (
              <AdditionalCard key={index} delay={`${index * 0.2}s`}>
                <AdditionalCardLogo src={additionalLogos[index]} alt="Logo" />
                <AdditionalCardContent>
                  <AdditionalCardTitle>{content.title}</AdditionalCardTitle>
                  <AdditionalCardDescription>{content.description}</AdditionalCardDescription>
                </AdditionalCardContent>
              </AdditionalCard>
            ))}
          </AdditionalContent>
        </ContentContainer>
      </CardContainer>
    );
  };

  return (
    <>
     
      <IntroSection>
        <IntroPhotoOverlay>
          <IntroImage src={intro} />
          <IntroText>Our Startups Portfolio</IntroText>
        </IntroPhotoOverlay>
      </IntroSection>
      <TabContainer>
        <Tabs>
          <Tab
            ref={el => tabs.current[0] = el}
            isSelected={selectedTab === 'Current'}
            onClick={() => setSelectedTab('Current')}
          >
            Ongoing
          </Tab>
          <Tab
            ref={el => tabs.current[1] = el}
            isSelected={selectedTab === 'Graduate'}
            onClick={() => setSelectedTab('Graduate')}
          >
            Graduate
          </Tab>
          <TabHighlight style={highlightStyle} />
        </Tabs>
      </TabContainer>
      <MainContent>
        <ContentWrapper>
          {startups
            .filter(startup => startup.status === selectedTab)
            .map(startup => (
              <Card
                key={startup.id}
                logo={startup.logo}
                title={startup.title}
                description={startup.description}
                status={startup.status}
                additionalContent={startup.additionalContent}
                additionalLogos={startup.additionalLogos}
                website={startup.website}
              />
            ))}
        </ContentWrapper>
      </MainContent>
  
    </>
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

const IntroSection = styled.div`
  position: relative;
  width: calc(100% - 40px);
  max-width: 1200px;
  margin: 0 auto;
  height: 500px;
  animation: ${fadeIn} 1s ease-in-out;
`;

const IntroPhotoOverlay = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const IntroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const IntroText = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 36px;
`;

const TabContainer = styled.div`
  position: sticky;
  top: 80px; /* Adjust this value according to the height of your menu bar */
  z-index: 1000;
  background-color: white;
  border-bottom: 2px solid #ccc;
`;

const Tabs = styled.div`
  display: flex;
  justify-content: center;
`;

const Tab = styled.div`
  padding: 15px 30px;
  cursor: pointer;
  font-size: 24px;
  font-weight: bold;
  color: ${({ isSelected }) => (isSelected ? '#1228c3' : '#666')};
  transition: color 0.3s ease;
`;

const TabHighlight = styled.div`
  position: absolute;
  bottom: -2px;
  height: 2px;
  background-color: #1228c3;
  transition: width 0.3s ease, left 0.3s ease;
`;

const MainContent = styled.div`
  margin-top: 30px;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr); // Three columns
  gap: 20px; // Gap between cards
  padding: 0 20px;
`;
const popIn = keyframes`
  0% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1);
  }
`;

// Define keyframes for the intro animation
const fadeInAdditionalContent = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Define keyframes for the slide in animation
const slideInFromRight = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px;
  width: 250px;
  transition: box-shadow 0.3s ease;
  ${({ isInView }) =>
    isInView &&
    css`
      animation: ${popIn} 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    `}
  &:hover {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.4);
  }
`;

const LogoContainer = styled.div`
  margin-bottom: 20px;
`;

const Logo = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 25%;
`;

const ContentContainer = styled.div`
  transition: opacity 0.3s ease;
  position: relative;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
  transition: opacity 0.3s ease;
  opacity: ${({ isHovered }) => (isHovered ? 0 : 1)};
`;

const Status = styled.span`
  display: block;
  font-size: 0.8rem;
  margin-top: 5px;
  color: ${({ status }) => (status === 'Current' ? '#007bff' : '#28a745')};
`;

const AdditionalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  opacity: ${({ isHovered }) => (isHovered ? 1 : 0)};
  transition: opacity 0.3s ease;
  pointer-events: ${({ isHovered }) => (isHovered ? 'auto' : 'none')};
  animation: ${({ isHovered }) => (isHovered ? css`${fadeInAdditionalContent} 0.5s ease-out` : 'none')};
`;

const AdditionalCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin: 10px 0;
  width: 90%;
  animation: ${slideInFromRight} 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  ${({ delay }) =>
    delay &&
    css`
      animation-delay: ${delay};
    `}
`;

const AdditionalCardLogo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

const AdditionalCardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const AdditionalCardTitle = styled.h3`
  font-size: 1rem;
  margin: 0;
`;

const AdditionalCardDescription = styled.p`
  font-size: 0.8rem;
  color: #666;
  margin: 0;
`;


export default Portfolio;
