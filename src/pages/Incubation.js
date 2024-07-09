import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import HImage from "../assets/Incubation.jpg";
import InfoImage from "../assets/run.png"; // Import your image here
import InfoImage1 from "../assets/run1.png"; 
import InfoImage2 from "../assets/run2.png"; 
import InfoImage3 from "../assets/run3.png"; 

const Incubation = () => {
  const [infoIndex, setInfoIndex] = useState(1);

  const handleHover = (index) => {
    if (index === infoIndex) {
      setInfoIndex((prevIndex) => Math.min(prevIndex + 1, 5));
    }
  };

  return (
    <IncubationPage>
      <PageHead>
        <ImageWrapper>
          <HeadImage src={HImage} alt="incubation" />
          <Overlay />
          <TextOverlay>INCUBATION</TextOverlay>
        </ImageWrapper>
      </PageHead>
      <Body>
        <CenterText>
          <h1>STAGES OF INCUBATION</h1>
        </CenterText>
        <br />
        <AdditionalInfo>
          {infoIndex > 0 && (
            <InfoCard onMouseEnter={() => handleHover(1)}>
              <InfoImageWrapper>
                <InfoImg src={InfoImage1} alt="info" />
              </InfoImageWrapper>
              <InfoText>
                1) FILTERING<br />Innovation Challenges<br/><br/>
                •Ideathon<br/>•SIP<br/>•EDP & FDP<br/>•Demo Days
              </InfoText>
            </InfoCard>
          )}
          {infoIndex > 1 && (
            <InfoCard onMouseEnter={() => handleHover(2)}>
              <InfoImageWrapper>
                <InfoImg src={InfoImage} alt="info" />
              </InfoImageWrapper>
              <InfoText>2)INTAKE(6 Months)<br/>Pre-Incubation<br/><br/>•Idea Stage<br/>•Idea Validation<br/>•Market Study<br/>•Business Model<br/>•PoC Creation</InfoText>
            </InfoCard>
          )}
          {infoIndex > 2 && (
            <InfoCard onMouseEnter={() => handleHover(3)}>
              <InfoImageWrapper>
                <InfoImg src={InfoImage2} alt="info" />
              </InfoImageWrapper>
              <InfoText>3)MID-WAY(12 months)<br/>Incubation<br/><br/>•Rapid Prototyping<br/>•Pilot Testing<br/>•Proto Refinement<br/>•Business Model<br/>•Validation</InfoText>
            </InfoCard>
          )}
          {infoIndex > 3 && (
            <InfoCard onMouseEnter={() => handleHover(4)}>
              <InfoImageWrapper>
                <InfoImg src={InfoImage2} alt="info" />
              </InfoImageWrapper>
              <InfoText>4)FINISH LINE(6 Months)<br/>Scale-Up<br/><br/>•MVP-MLP<br/>•Manufacturing<br/>•Go-To-Market<br/>•Manufacturing<br/>•Product Roll Out</InfoText>
            </InfoCard>
          )}
          {infoIndex > 4 && (
            <InfoCard>
              <InfoImageWrapper>
                <InfoImg src={InfoImage3} alt="info" />
              </InfoImageWrapper>
              <InfoText>5)GRADUATION(12 Months)<br/>Exit<br/><br/>•Revenue Generation<br/>•Seed Funded<br/>•Angel / VC Investible</InfoText>
            </InfoCard>
          )}
        </AdditionalInfo>
        <SelectionContent>
          <CenterText>
            <h1>AIC-PECF SELECTION CRITERIA</h1>
          </CenterText>
          <p>
            Atal Incubation Centre – Pondicherry Engineering College Foundation offers hard touch 24 months long Incubation program. The program is tailor made w.r.t our incubate persona and their NEED.We offer NEED based program model which help us to focus on designing the program from a startup perspective thereby offering Gain creators and Pain relievers for them to scale.
          </p>
          <BoxContainer>
            <AnimatedSlideInBox direction="left">
              <BoxText>Entrepreneur Segments & Selection Criteria</BoxText>
              <br /><br />•Tech based startups - Product / Service based<br/>•Early Stage (Idea) / Build Stage (PoC / Prototype)<br/>•With commercially viable solution for existing and validated industrial / social problem<br/>•Sector focus on EDM - IoT - UAV.
            </AnimatedSlideInBox>
            <AnimatedSlideInBox direction="right">
              <BoxText>Selection Criteria</BoxText>
              <br /><br />•Lean canvas model submission<br/>•Initial Knock-Out criteria :: Well defined Problem<br/>•Statement clear understanding on their Customer segment<br/>•Feasibility of the solution (WoW / NoW) that is Innovative and implementable<br/>•Pitching Criteria :: Strong founders team.<br/>•Well defined 12 Months roadmap and set milestones<br/>•Expectation fitment with the Incubation Centre
            </AnimatedSlideInBox>
            <AnimatedSlideInBox direction="left">
              <BoxText>Program</BoxText>
              <br/><br/>•Rolling Model<br/>•Online Application process<br/>•1st Level Screening Initial Knock-Out Criteria<br/>•2nd Level Internal Steering Committee screening<br/>•3rd Level Pitch Day - Selection Committee (10 Member Panel) - Pitching Criteria<br/>•Boot Camp for selected startups<br/>•1:1 selected startup meet - setting up expectation<br/>•Agreement Signing<br/>•Kick start
            </AnimatedSlideInBox>
            <AnimatedSlideInBox direction="right">
              <BoxText>Entrepreneur Segments & Selection Criteria</BoxText>
              <br/><br/>•Outreach events to activate & engage (Ideaoth,B-Plan competitions, Boot Camps & Demo Days)<br/>•Alumni Engagement with PTU & PU organizing Alumni Contact Programs to (Identify entrepreneurial spirited alumni)<br/>•Local Govt. partners DIC & EDC and Industrial bodies like CII and corporates in Puducherry.SIP with School Education Department & Department of Technical & Higher Education Puducherry<br/>•EDP program through HEI’s partnerships<br/>•Exchange Program through Peer incubator partnership.<br/>•MBA - IEV program unique program for students to startup and build their own startup venture
            </AnimatedSlideInBox>
            <AnimatedSlideInBox direction="left">
              <BoxText>External Ecosystem and Partners</BoxText>
              <br/><br/>•Startup Network Platforms (Sociocharge,Yourstory etc.)<br/>•Corporate partnerships to engage Corporates<br/>•Startup Initiative programs<br/>•Outreach partners - Media forum<br/>•Knowledge partners, Logistics partners<br/>•Local HNI’s Corporate players<br/>•Local Industry partnership programs Alumni engagement<br/>•Bank and PSU’s partnering for Loan & Grant access
            </AnimatedSlideInBox>
          </BoxContainer>
          <center>
          <PolicyDocumentButton href="http://www.aicpecf.org/uploads/9/8/0/9/9809129/aic-pecf_-_incubation_policy_document_2022.pdf" target="_blank" rel="noopener noreferrer">
  Policy Document
</PolicyDocumentButton>

        </center>
        <h1>Incubation</h1>
          <h2>How to Apply for Incubation Support</h2>
          <p>AIC-Pondicherry Engineering College Foundation offers Incubation facility of start up companies. It aims to assist and enable young entrepreneurs to initiate technology based startup companies for commercial exploitation of technologies developed by them.The AIC-PECF network with Angel Investors and Venture Capitalists who provide mentoring and financial support to the startups and enable tenant companies to mature over a period of 2-3 years and ultimately graduate to an actual business entity.<br/><br/>The main objective of Incubation is to promote emerging technological and knowledge based innovative ventures that seek the nurturing of ideas from innovators. Such entrepreneurial ideas have to be fostered and developed in a supportive environment before they become attractive for venture capital. Hence the incubation centre promote and support untapped creativity of individual innovators and assist them to become technology based entrepreneurs. It also seeks to promote networking and forging of linkages with other constituents of the innovation chain for commercialization of their developments.</p>
        <AdditionalInfoContainer>
            
            <h2>Objectives of AIC-PECF Incubation Facility:</h2>
            <ul>
              <li>Promote product oriented research and development</li>
              <li>Encourage and accelerate development of indigenous products and packages</li>
              <li>Bridge the gap between R&D and commercialisation</li>
              <li>Facilitate entrepreneurial training and IPR facilitation</li>
              <li>Provide fab lab and rapid prototyping for startup activities</li>
              <li>Ensure interaction between education and industry</li>
              <li>Alignment of innovation with exact market demands</li>
              <li>Active involvement of academia in technology start-up activities</li>
            </ul>
          </AdditionalInfoContainer>
          <center>
          <PolicyDocumentButton href="https://docs.google.com/forms/d/e/1FAIpQLScAJvEDHS8BRXgoXXFaXjVCNJM04Gpbz3LdD8S5WPcugGTJnA/viewform" target="_blank" rel="noopener noreferrer">
Join Us
</PolicyDocumentButton>
</center>
        
        </SelectionContent>
      
      </Body>
    </IncubationPage>
  );
};

const zoomIn = keyframes`
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;
const PolicyDocumentButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #12273c;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0a1824;
  }
`;


const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const cardFadeIn = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;



const HeadImage = styled.img`
  width: 100%;
  border-radius: 10px;
  animation: ${fadeIn} 3s ease-in;
`;

const IncubationPage = styled.div`
  width: 100%;
  padding: 20px;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const PageHead = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  padding: 10px;
  font-size: 22px;
  color: #333;

  @media (max-width: 768px) {
    flex-direction: column;
    font-size: 12px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  border-radius: 10px;
`;

const Body = styled.div`
  margin-top: 50px;
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  padding: 20px;
  padding-right: 20px;
  color: #333;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CenterText = styled.div`
  text-align: center;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.55);
  border-radius: 10px;
  animation: ${fadeIn} 2s ease-in;
`;

const TextOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  z-index: 1;
  animation: ${fadeIn} 3s ease-in;
`;

const AdditionalInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  animation: ${cardFadeIn} 1s ease-out;
`;

const InfoCard = styled.div`
  background: 0000;
  border-radius: 30px;
  border: 5px solid #12273c;
  padding: 15px;
  margin: 10px 0;
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  animation: ${cardFadeIn} 2s ease-out;
`;

const AdditionalInfoContainer= styled.div`
  background: 0000;
  border-radius: 30px;
  border: 5px solid #12273c;
  padding: 15px;
  margin: 10px 0;
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  animation: ${cardFadeIn} 1s ease-out;
`;

const InfoImageWrapper = styled.div`
  flex: 0 0 auto;
  margin-right: 15px;
`;

const InfoImg = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 5px;
`;

const InfoText = styled.div`
  flex: 1;
  text-align: left;
`;

const SelectionContent = styled.div`
  flex: 1;
  color: black;
  padding: 10px;
  border-radius: 20px;
 
  margin: 10px;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SlideInBox = styled.div`
  padding: 30px;
  background-color: #fff;
  border-radius: 30px;
  color: #000;
  opacity: 0;
  transform: ${(props) => (props.direction === "left" ? "translateX(-100%)" : "translateX(100%)")};
  transition: opacity 1s ease-out, transform 1s ease-out;
  border: 5px solid #12273c;
  margin: 20px;
  ${(props) =>
    props.inView &&
    `
    opacity: 1;
    transform: translateX(0);
  `}
`;

const AnimatedSlideInBox = ({ children, direction }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <SlideInBox ref={ref} inView={inView} direction={direction}>
      {children}
    </SlideInBox>
  );
};

const BoxText = styled.span`
  font-weight: bold;
`;

export default Incubation;