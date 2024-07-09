// src/components/Navbar.js
import React from 'react';
import styled from 'styled-components';
import logo from '../assets/aic2.png';  // Import the logo image
import logo2 from '../assets/niti.png';
import logo3 from '../assets/ptu.png';

const Navbar = () => {
  return (
    <Nav>
      <ContentWrapper>
        <LogoContainer href="/">
          <Logo src={logo} alt="AIC-PEC Logo" />
        </LogoContainer>
        <CenterTextWrapper>
          <CenterText>Atal Incubation Centre</CenterText>
          <CenterSubText>PEC-Foundation -Puducherry Technological University</CenterSubText>
  
        </CenterTextWrapper>
        <RightLogos>
          <Logo src={logo2} alt="Logo 2" />
          <Logo src={logo3} alt="Logo 3" />
        </RightLogos>
      </ContentWrapper>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: #fff;
  color: #12283c;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0; /* Adjusted to make the navigation bar span the entire width */
  z-index: 1000;
`;

const ContentWrapper = styled.div`
  max-width: 1000px; /* Adjust the max-width as needed */
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
`;

const Logo = styled.img`
  height: 50px;
  margin-right: 10px;
`;

const CenterTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CenterText = styled.span`
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
  font-family : "Helvetica Neue", "Helvetica", "Arial", sans-serif;
`;

const CenterSubText = styled.span`
  font-size: 1em;
  text-align: center;
  font-family : "Helvetica Neue", "Helvetica", "Arial", sans-serif;

`;

const RightLogos = styled.div`
  display: flex;
  align-items: center;
`;

export default Navbar;
