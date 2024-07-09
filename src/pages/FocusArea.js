import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import BlueBackground from './Blue.png';
import IotVideo from './iot.mp4'; 
import EdmVideo from './focus_area_video.mp4';// Import the video file

const FocusArea = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <FocusAreaContainer>
      <BackgroundImage />
      <Main>
        <Circle onClick={handleToggle} className={isActive ? 'active' : ''}>
          {isActive ? (
            <>
              <Box>
                <Front className="front">
                  <div>Electronic</div>
                  <div>Design and</div>
                  <div>Manufacturing</div>
                </Front>
                <Back className="back">
                  <Video autoPlay loop muted>
                    <source src={EdmVideo} type="video/mp4" />
                  </Video>
                </Back>
              </Box>
              <Box>
                <Front className="front">
                  <div>Internet</div>
                  <div>of</div>
                  <div>Things</div>
                </Front>
                <Back className="back">
                  <Video autoPlay loop muted>
                    <source src={IotVideo} type="video/mp4" />
                  </Video>
                </Back>
              </Box>
              <Box>
                <Front className="front">
                  <div>Unmanned</div>
                  <div>Aerial</div>
                  <div>Vehicle</div>
                </Front>
                <Back className="back">
                  <Video autoPlay loop muted>
                    <source src={IotVideo} type="video/mp4" />
                  </Video>
                </Back>
              </Box>
            </>
          ) : (
            <CircleTitle>Focus Area</CircleTitle>
          )}
        </Circle>
      </Main>
    </FocusAreaContainer>
  );
};

const FocusAreaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  background-color: transparent;
  position: relative;
  overflow: hidden;
  font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${BlueBackground});
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

const Main = styled.div`
  position: relative;
  z-index: 1; /* Ensure this is above the background */
`;

const float = keyframes`
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(20px, -20px);
  }
  100% {
    transform: translate(0, 0);
  }
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background-color: #d3edea;
  border-radius: 50%;
  color: #12283c;
  font-size: 2em;
  cursor: pointer;
  transition: all 0.5s;
  animation: ${float} 3s ease-in-out infinite;

  &.active {
    border-radius: 0;
    width: 100vw;
    height: 100vh;
    flex-direction: row;
    justify-content: space-around;
    animation: none; /* Stop floating when active */
    padding: 10px; /* Add padding to create space around the boxes */
    box-sizing: border-box; /* Include padding in the element's total width and height */
  }
`;

const CircleTitle = styled.div`
  text-align: center;
`;

const Box = styled.div`
  perspective: 1000px;
  width: calc(33.33% - 20px);
  height: 100%;
  margin: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:hover .front {
    transform: rotateY(-180deg);
  }

  &:hover .back {
    transform: rotateY(0deg);
  }
`;

const Front = styled.div`
  position: absolute;
  backface-visibility: hidden;
  transform: rotateY(0deg);
  transition: transform 0.6s;
  width: 100%;
  height: 100%;
  background-color: #fff;
  background-image: url(${BlueBackground});
  color: #d3edea;
  font-size: 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  box-sizing: border-box;
  text-align: left;
  white-space: pre-line;
  z-index: 1; /* Ensure front is above back */
`;

const Back = styled.div`
  position: absolute;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  transition: transform 0.6s;
  width: 100%;
  height: 100%;
  background-color: #fff;
  color: #d3edea;
  font-size: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
  z-index: 0; /* Ensure back is below front */
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default FocusArea;
