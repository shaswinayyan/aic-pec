// src/components/Preloader.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../assets/aic2.png'; // Add your logo image here



const Preloader = () => {
  return (
    <PreloaderWrapper>
      <Logo src={logo} alt="Loading..." />
      <LoadingBarWrapper>
        <LoadingBar />
      </LoadingBarWrapper>
    </PreloaderWrapper>
  );
};

const PreloaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #fff; /* Change this to match your desired background color */
`;

const Logo = styled.img`
  width: 100px; /* Adjust the width as needed */
  height: auto; /* Maintain the aspect ratio */
`;

const LoadingBarWrapper = styled.div`
  width: 100%;
  max-width: 300px; /* Adjust the max-width as needed */
  margin-top: 20px; /* Space between the logo and the loading bar */
  height: 4px; /* Height of the loading bar */
  background-color: #e0e0e0; /* Background color of the loading bar container */
  overflow: hidden;
  border-radius: 2px; /* Rounded corners */
`;

const loadingAnimation = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const LoadingBar = styled.div`
  width: 100%;
  height: 100%;
  background-color: #3b82f6; /* Color of the loading bar */
  animation: ${loadingAnimation} 1s infinite;
`;

export default Preloader;
