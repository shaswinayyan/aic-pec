import React from 'react';
import styled, { keyframes } from 'styled-components';

import Image from '../assets/sisfs/i1.png';
import Image1 from '../assets/sisfs/i2.png';
import Image3 from '../assets/sisfs/logo1.jpg';
import Image4 from '../assets/sisfs/logo2.jpg';
import Image5 from '../assets/sisfs/logo31.jpg';
import Image6 from '../assets/sisfs/logo4.jpg';
import Image7 from '../assets/sisfs/logo5.jpg';
import Image8 from '../assets/sisfs/logo6.jpg';
import Image9 from '../assets/sisfs/logo7.jpg';
import Image10 from '../assets/sisfs/logo8.jpg';
import Image11 from '../assets/sisfs/logo9.jpg';
import Image12 from '../assets/sisfs/logo10.jpg';
import Image13 from '../assets/sisfs/logo11.jpg';
import Image14 from '../assets/sisfs/logo12.jpg';
import Image15 from '../assets/sisfs/logo13.jpg';
import Image16 from '../assets/sisfs/logo14.jpg';

const SISFS = () => {
  const debtScaleUpLogos = [Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10];
  const debtScaleUpTexts = [
    'Microbear Applied Sciences Private Limited is the Semiconductor Peripheral devices company. We are focused on low node high volume semiconductor devices (peripherals).We have 45+ years of cumulative experience in various stages of semiconductor design, manufacturing and automation.',
    'Scalejet offers a complete SaaS solution business with user app, delivery App, vendor app and projection app, CRM and ERP to automate complete business process of small and medium scale retal businesses. ',
    '<br/><br/><br/>Jesvid Cryo offers a variety of services, such assigning cryogenic equipment, assisting other organisations with new product project development, and so on, all while putting the customer first.With the goal of liberating the world through the promotion of renewable energy.',
    'INFAB Semiconductor Pvt Ltd is a pioneering Indian technology company that specializes in the design, development, and manufacturing of advanced sensors, actuators, and microfluidic devices based on MEMS (Micro-Electro-Mechanical Systems) technology.',
    'Nilaiyana Studios Pvt Ltd, founded in 2021, was born during the COVID pandemic as a response to the massive loss of livelihood experienced by women especially in the informal sector.As many families lost their sole breadwinners, there was a clear need for women to transition into this role.',
    'Powstik is a national healthy nutrition omnibus, a platform or a marketplace catering to niche segments such as healthy snacks (Children), medical nutrition (Diabetes, Hypertension, obesity, PCOD, Pregnancy), chemical free staples etc',
    'E-Royal Tech Systems started more than 10 years ago as a Logistic Software Development Company.RTS has built a reliable reputation for shipping logistics software. Our business traveling areas not only India but also global.With a base of more than 6 products, we cover, small, medium and large scale business peoples.',
    'BFIT is an environmental friendly bio gas plant design is under R & D, which can reduce 2/3rd of the cost and the consumer pays the fixed maintenance amount per month',
  ];
  const debtScaleUpHoverTexts = [
    '<br />•REVENUE GENERATED</BR>(FY 2023-2024):<br/>Pre-Revenue Stage<br /><br />•GRANT RELEASED:<BR/>INR 27 Lakhs<br /><br />•SECTOR:<BR/>Semi Conductor',
    '<br />•REVENUE GENERATED:<BR/>(FY 2023-2024):<br/>INR 4 Lakhs<br/><br />•GRANT RELEASED:<br/>INR 27 Lakhs<br /><br />•SECTOR:<BR/>SaaS',
    '<br/>•REVENUE GENERATED<br/>(FY 2023-2024):<br/>INR 53 Lakhs<br /><br />•GRANT RELEASED:<br/>INR 40 Lakhs<br /><br />•SECTOR:<BR/>Industrial Design',
    '<br/>•REVENUE GENERATED<br/>(FY 2023-2024):<br/> Pre-Revenue Stage<br /><br/>•GRANT RELEASED:<br/> INR 45 Lakhs<br /><br />•SECTOR:<BR/> Nano Tech',
    '<br/>•REVENUE GENERATED<br/>(FY 2023-2024):<br/>INR 2.95 Lakhs<br /><br/>•GRANT RELEASED:<br/>INR 20 Lakhs<br /><br />•SECTOR:<BR/>Fashion Textile',
    '<br/>•REVENUE GENERATED<br/>(FY 2023-2024):<br/>INR 9 Thousand<br /><br/>•GRANT RELEASED:<br/>INR 35 Lakhs<br /><br />•SECTOR:<BR/>E-Commerce',
    '<br/>•REVENUE GENERATED<br/>(FY 2023-2024):<br/>INR 1.7 Cr<br /><br/>•GRANT RELEASED:<br/>INR 30 Lakhs<br /><br />•SECTOR:<BR/>IT',
    '<br/>•REVENUE GENERATED<br/>(FY 2023-2024):<br/>INR 35K<br /><br/>•GRANT RELEASEDINR:<br/>16 Lakhs<br /><br />•SECTOR:<BR/>Waste Management',
  ];

  const debtScaleUpLinks = [
    'https://ptuniv.edu.in/',
    'https://www.infabsemi.com',
    'https://www.linkedin.com/company/jesvidcryo-technologies-pvt-ltd/?originalSubdomain=in',
    'https://infab-tech.com/',
    'https://www.nilaiyanastudios.com/about-3-2',
    'https://www.powstik.com',
    'https://www.royaltechsystems.co.in/',
    'https://www.bfit.com',
  ];

  const grantBeneficiariesLogos = [Image11, Image12, Image13, Image14, Image15, Image16];
  const grantBeneficiariesTexts = [
    'Developing drone products and providing services in the field of technology and software analytics to develop end to end drone solutions.(DaaS) Drone-as-a-Service – Make in India Micro class category autonomous drones for commercial & defence industry.',
    'Flowget Solutions Pvt. Ltd. is a Smart Water Solution Provider & Supplier of IoT based Smart Watering Systems for Industries & Residential people.Our Smart Water Metering Solutions are based on Cutting Edge Digital Technology proven to Next Gen Commercial Metering Sources.',
    'Aiming to impart 21st centuries skills like - coding,Robotics, IoT, Drone , 3D printing etc. to school students, we provide Robotics lab in schools.Offline edutech offering K12 – STEM training to young minds at school level by imparting the skill-set of Robotics, Coding, IoT and creative skill-set of Robotics, Coding, IoT and creative ability. ',
    'Mobility solution : Auto Service aggregrator platform with innovative business model',
    'Indiguard systems works on smart IoT based home security products and solutions.',
    'Warar Energy is working on XEV project an EV trike solution upgrading bike to highspeed EV 3Wheeler.With our innovative and insightful technology, we strive to enhance our users everyday experiences.',
  ];
  const grantBeneficiariesHoverTexts = [
    '<br />•REVENUE GENERATED</BR>(FY 2023-2024):<br/>INR 70 Lakhs<br /><br />•GRANT RELEASED:<br/>INR 14.20 Lakhs<br/><br />•SECTOR:<BR/>UAV',
    '<br />•REVENUE GENERATED</BR>(FY 2023-2024):<br/>INR 75K<br /><br />•GRANT RELEASED:<br/>INR 14.50 Lakhs<br /><br />•SECTOR:<BR/>IOT-Tech',
    '<br />•REVENUE GENERATED</BR>(FY 2023-2024):<br/>INR 19 Lakhs<br /><br />•GRANT RELEASED:<br/>INR 11.28 Lakhs<br /><br />•SECTOR:<BR/>Edu-Tech',
    '<br />•REVENUE GENERATED</BR>(FY 2023-2024):<br/>Pre-Revenue Stage<br /><br />•GRANT RELEASED:<br/>INR 4.88 Lakhs<br/><br />•SECTOR:<BR/>Mobility',
    '<br />•REVENUE GENERATED</BR>(FY 2023-2024):<br/> INR 5.95 Lakhs<br /><br />•GRANT RELEASED:<br/>INR 4.50 Lakhs<br /><br />•SECTOR:<BR/> Home Automation',
    '<br />•REVENUE GENERATED</BR>(FY 2023-2024):<br/>Pre-Revenue Stage<br/><br />•GRANT RELEASED:<br/>INR 10.60 Lakhs<br /><br />•SECTOR:<BR/>EV',
  ];

  const grantBeneficiariesLinks = [
    'https://nevarsystems.com/',
    'https://www.flowgetsolutions.com',
    'https://www.futuregurukuls.in/',
    'https://www.autoservice.com',
    'https://www.indiguard.com',
    'https://www.wararenergy.com/home',
  ];

  return (
    <SISFSPage>
      <h1>AIC-PECF STARTUP INVESTMENT PROGRAM</h1>
      <h2>STARTUP INDIA SEED FUND SCHEME KE</h2>
      <HeadImageContainer>
        <HeadImage src={Image} alt="sisfs" />
      </HeadImageContainer>
      <HeadImageContainer>
        <HeadImage src={Image1} alt="sisfs" />
      </HeadImageContainer>
      

      <HeadContentText>GRANT BENEFICIARIES</HeadContentText>
      <SISFSRow>
        {grantBeneficiariesLogos.map((logo, index) => (
          <HeadContent key={index}>
            <HeadLogo>
              <LogoImage src={logo} alt={'grantlogo ${index + 1}'} />
              <TextContainer>
                <LogoText dangerouslySetInnerHTML={{ __html: grantBeneficiariesTexts[index] }} />
                <HoverText dangerouslySetInnerHTML={{ __html: grantBeneficiariesHoverTexts[index] }} />
                <GoToButton href={grantBeneficiariesLinks[index]} target="_blank" rel="noopener noreferrer">Go to</GoToButton>
              </TextContainer>
            </HeadLogo>
          </HeadContent>
        ))}
      </SISFSRow>
      <HeadContentText>DEBT SCALE UP</HeadContentText>
      <SISFSRow>
        {debtScaleUpLogos.map((logo, index) => (
          <HeadContent key={index}>
            <HeadLogo>
              <LogoImage src={logo} alt={'sisfs logo ${index + 1}'} />
              <TextContainer>
                <LogoText dangerouslySetInnerHTML={{ __html: debtScaleUpTexts[index] }} />
                <HoverText dangerouslySetInnerHTML={{ __html: debtScaleUpHoverTexts[index] }} />
                <GoToButton href={debtScaleUpLinks[index]} target="_blank" rel="noopener noreferrer">Go to</GoToButton>
              </TextContainer>
            </HeadLogo>
          </HeadContent>
        ))}
      </SISFSRow>
    </SISFSPage>
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

const SISFSPage = styled.div`
  text-align: center;
  width: 100%;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  align-items: center;
  max-width: 1400px;
`;

const SISFSRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 50px;
  width: 100%;
  height:100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 10px;
  font-size: 22px;
  color: #fff;

  @media (max-width: 768px) {
    flex-direction: row;
    font-size: 18px;
  }
`;

const HeadImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${zoomIn} 4s ease-out;
`;

const HeadImage = styled.img`
  width: 70%;
  height: 450px;
  max-height: 700px;
  margin: 10px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const HeadContentText = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 40px;
  color: black;
  animation: ${zoomIn} 4s ease-out;
`;

const HeadContent = styled.div`
  flex: 1;
  padding: 20px;
  animation: ${zoomIn} 4s ease-out;
  margin: 10px;
  text-align: center;
  max-width: 300px;
  border: 5px solid #12273c;
  border-radius: 10px;

  @media (max-width: 768px) {
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ccc;
  border-radius: 10px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 250px;
`;

const LogoText = styled.div`
  margin-top: 10px;
  font-size: 18px;
  color: #333;
  opacity: 1;
  transition: opacity 0.3s ease;
  white-space: pre-wrap;
  position: absolute;
  top: 0;
`;

const HoverText = styled.div`
  margin-top: 0.1px;
  font-size: 18px;
  color: #333;
  opacity: 0;
  transition: opacity 0.3s ease;
  white-space: pre-wrap;
  position: absolute;
  top: 0;
`;

const GoToButton = styled.a`
  display: block;
  margin-top: 280px;
  opacity:0;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const HeadLogo = styled.div`
  padding: 30px;
  border-radius: 20px;
  background-color: #ffff;
  animation: ${zoomIn} 2s ease-out;
  position: relative;
  transition: transform 0.3s ease, background-color 0.3s ease;
  text-align: center;

  &:hover {
    transform: scale(1.05);
    background-color: #ffff;

    ${LogoText} {
      opacity: 0;
    }

    ${HoverText} {
      opacity: 1;
    }
    ${GoToButton} {
      opacity:1;
  }
`;

const LogoImage = styled.img`
  width: 200px;
  height: auto;
  display: inline-block;
  margin: 0 auto;
`;

export default SISFS;