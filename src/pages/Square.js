import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

import Lean from '../assets/PreIncubation/Try.png';
import BackgroundImage from '../assets/PreIncubation/Start.png';
import BackgroundImage1 from '../assets/PreIncubation/Ask.png';
import BackgroundImage2 from '../assets/PreIncubation/lean can.png';
import BackgroundImage3 from '../assets/PreIncubation/Startup.png';
import BackgroundImage4 from '../assets/PreIncubation/Poc.png';
import BackgroundImage5 from '../assets/PreIncubation/Finance.png';
import BackgroundImage6 from '../assets/PreIncubation/Investment.png';
import BackgroundImage7 from '../assets/PreIncubation/Pitch.png';
import BackgroundImage8 from '../assets/PreIncubation/Product.png';
import BackgroundImage9 from '../assets/PreIncubation/Evaluate.png';
import BackgroundImage10 from '../assets/PreIncubation/Find.png';
import BackgroundImage11 from '../assets/PreIncubation/Value.png';




const SessionComponent = () => {
  const { ref: squareRef1, inView: squareInView1 } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const { ref: squareRef2, inView: squareInView2 } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const { ref: squareRef3, inView: squareInView3 } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const { ref: squareRef4, inView: squareInView4 } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const { ref: squareRef5, inView: squareInView5 } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const { ref: squareRef6, inView: squareInView6 } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const { ref: squareRef7, inView: squareInView7 } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const { ref: squareRef8, inView: squareInView8 } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const { ref: squareRef9, inView: squareInView9 } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const { ref: squareRef10, inView: squareInView10 } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const { ref: squareRef11, inView: squareInView11 } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const { ref: squareRef12, inView: squareInView12 } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (squareInView1) {
      setTimeout(() => {
        document.querySelector('.square1').classList.add('zoom-in');
      }, 0);
    } else {
      document.querySelector('.square1').classList.remove('zoom-in');
    }
  }, [squareInView1]);

  useEffect(() => {
    if (squareInView2) {
      setTimeout(() => {
        document.querySelector('.square2').classList.add('zoom-in');
      }, 0);
    } else {
      document.querySelector('.square2').classList.remove('zoom-in');
    }
  }, [squareInView2]);

  useEffect(() => {
    if (squareInView3) {
      setTimeout(() => {
        document.querySelector('.square3').classList.add('zoom-in');
      }, 0);
    } else {
      document.querySelector('.square3').classList.remove('zoom-in');
    }
  }, [squareInView3]);

  useEffect(() => {
    if (squareInView4) {
      setTimeout(() => {
        document.querySelector('.square4').classList.add('zoom-in');
      }, 0);
    } else {
      document.querySelector('.square4').classList.remove('zoom-in');
    }
  }, [squareInView4]);

  useEffect(() => {
    if (squareInView5) {
      setTimeout(() => {
        document.querySelector('.square5').classList.add('zoom-in');
      }, 0);
    } else {
      document.querySelector('.square5').classList.remove('zoom-in');
    }
  }, [squareInView5]);

  useEffect(() => {
    if (squareInView6) {
      setTimeout(() => {
        document.querySelector('.square6').classList.add('zoom-in');
      }, 0);
    } else {
      document.querySelector('.square6').classList.remove('zoom-in');
    }
  }, [squareInView6]);

  useEffect(() => {
    if (squareInView7) {
      setTimeout(() => {
        document.querySelector('.square7').classList.add('zoom-in');
      }, 0);
    } else {
      document.querySelector('.square7').classList.remove('zoom-in');
    }
  }, [squareInView7]);

  useEffect(() => {
    if (squareInView8) {
      setTimeout(() => {
        document.querySelector('.square8').classList.add('zoom-in');
      }, 0);
    } else {
      document.querySelector('.square8').classList.remove('zoom-in');
    }
  }, [squareInView8]);

  useEffect(() => {
    if (squareInView9) {
      setTimeout(() => {
        document.querySelector('.square9').classList.add('zoom-in');
      }, 0);
    } else {
      document.querySelector('.square9').classList.remove('zoom-in');
    }
  }, [squareInView9]);

  useEffect(() => {
    if (squareInView10) {
      setTimeout(() => {
        document.querySelector('.square10').classList.add('zoom-in');
      }, 0);
    } else {
      document.querySelector('.square10').classList.remove('zoom-in');
    }
  }, [squareInView10]);

  useEffect(() => {
    if (squareInView11) {
      setTimeout(() => {
        document.querySelector('.square11').classList.add('zoom-in');
      }, 0);
    } else {
      document.querySelector('.square11').classList.remove('zoom-in');
    }
  }, [squareInView11]);

  useEffect(() => {
    if (squareInView12) {
      setTimeout(() => {
        document.querySelector('.square12').classList.add('zoom-in');
      }, 0);
    } else {
      document.querySelector('.square12').classList.remove('zoom-in');
    }
  }, [squareInView12]);

  return (
    <Container>
      <Heading>Session on Introduction to Entrepreneurship</Heading>
      <SquareContainer>
        <Square ref={squareRef1} className="square1" isFirst>
          <SquareInner className="square-inner">
            <SquareFront>
            <Image src={BackgroundImage} alt="Lean Canvas" />
            </SquareFront>
            <SquareBack>
            <SquareContent>
                <p>SUPPORT SYSTEMS - NOW IS THE TIME TO START....</p>
                <ul>
                  <li>INCUBATORS & ACCELERATORS</li>
                  <li>MINISTRY GRANTS</li>
                  <li>CAMPUS SEED FUNDS</li>
                  <li>STARTUP INDIA FUND</li>
                  <li>FABLABS</li>
                  <li>MENTORS</li>
                  <li>SPECIAL PLACEMENTS IF STARTUPS FAIL</li>
                  <li>PEER SUPPORT - VARIOUS ASSOCIATIONS</li>
                </ul>
              </SquareContent>
            </SquareBack>
          </SquareInner>
        </Square>
        <Square ref={squareRef2} className="square2">
          <SquareInner className="square-inner">
            <SquareFront>
            <Image src={BackgroundImage9} alt="Lean Canvas" />
            </SquareFront>
            <SquareBack>
            <SquareContent>
                <p>EVALUATE THE IDEA? IS IT A GOOD BUSINESS OPPORTUNITY?</p>
                <ul>
                  <p>MARKET RESEARCH FORECASTS VALIDITY-VIABILITY TESTS</p>
                  <li>Customers - MARKET</li>
                  <li>Competition - INDUSTRY</li>
                  <li>Competition - TEAM</li>
                </ul>
              </SquareContent>
              </SquareBack>
          </SquareInner>
        </Square>
        <Square ref={squareRef3} className="square3">
          <SquareInner className="square-inner">
            <SquareFront>
            <Image src={BackgroundImage1} alt="Lean Canvas" />
            </SquareFront>
            <SquareBack>
            <SquareContent>
                <p>5 QUESTIONS TO ASK...</p>
                <ul>
                  <li>WHAT PROBLEM ARE WE SOLVING</li>
                  <li>FOR WHOM ARE WE SOLVING</li>
                  <li>WHAT'S THE INNOVATIVE SOLUTION</li>
                  <li>HOW ARE WE SOLVING INNOVATIVELY & DIFFERENT THAN EXISTING SOLUTION</li>
                  <li>HOW ARE WE PLANNING TO DO IT</li>
                </ul>
              </SquareContent>
            </SquareBack>
          </SquareInner>
        </Square>
      </SquareContainer>
      <Heading>Session on Ideation & Lean Canvas</Heading>
      <SquareContainer>
        <Square ref={squareRef4} className="square4">
          <SquareInner className="square-inner">
            <SquareFront>
            <Image src={BackgroundImage2} alt="Lean Canvas" />
        
            </SquareFront>
            <SquareBack>
              <Image src={Lean} alt="Lean Canvas" />
            </SquareBack>
          </SquareInner>
        </Square>
        <Square ref={squareRef5} className="square5">
          <SquareInner className="square-inner">
            <SquareFront>
            <Image src={BackgroundImage11} alt="Lean Canvas" />
        
            </SquareFront>
            <SquareBack>
            <SquareContent>
                <p>VALUE CREATION & RISK ASSUMPTION</p>
                <ul>
                  <li>Saving money </li><li> Making things easier </li>
                  <p>RESTAURANT JTBD</p>
                  <li> Fill my tummy </li><li>Yummyfood </li>
                  <li>Location </li>
                  <p>TESLA RISK ASSESSMENT</p>
                  <li>range anxiety </li> <li>charge time</li>
                </ul>
              </SquareContent>
            </SquareBack>
          </SquareInner>
        </Square>
        <Square ref={squareRef6} className="square6">
          <SquareInner className="square-inner">
            <SquareFront>
            <Image src={BackgroundImage10} alt="Lean Canvas" />
            </SquareFront>
            <SquareBack>
            <SquareContent>
                <p>STEPS TO FINDING CUSTOMERS</p>
                <p>Step 1: Find beneficiaries</p>
                <ul>
                  <li>Consider who all can benefit if your product/service were to be given free</li>
                </ul>
                <p>Step 2: Find micro markets</p>
                <ul>
                  <li>Micro Market Group of customers with similar characteristics and requirements</li>
                </ul>
                <p>Step 3: Select one micro market</p>
                <ul>
                  <li>Identify the most suitable micro market that you should go after (Urgency, Accessibility, Affordability)</li>
                </ul>
              </SquareContent>
            </SquareBack>
          </SquareInner>
        </Square>
      </SquareContainer>
      <Heading>Session on Finance Management</Heading>
      <SquareContainer>
        <Square ref={squareRef7} className="square7">
          <SquareInner className="square-inner">
            <SquareFront>
            <Image src={BackgroundImage3} alt="Lean Canvas" />
            </SquareFront>
            <SquareBack>
            <SquareContent>
                <p>STARTUPS-DEFINITION</p>
                <ul>
                  <li>MUST SOLVE PROBLEMS</li>
                  <li>WITH KNOWLEDGE OF INDUSTRY & BUSINESS</li>
                  <li>HAVE DIFFERENTIATED SOLUTION</li>
                  <li>LEVERAGE ON FRUGAL CAPITAL</li>
                  <li>DRIVE ENDURING VALUE</li>
                  <li>TO IDENTIFIED CUSTOMERS</li>
                  <li>AS AN OUTCOME VENTURE CREATES DISPROPORTIONATE VALUE TO EVERY STAKEHOLDER</li>
                </ul>
              </SquareContent>
            </SquareBack>
          </SquareInner>
        </Square>
        <Square ref={squareRef8} className="square8">
          <SquareInner className="square-inner">
            <SquareFront>
            <Image src={BackgroundImage4} alt="Lean Canvas" />
            </SquareFront>
            <SquareBack>
            <SquareContent>
                <p>PROOF OF CONCEPT (POC)</p>
                <ul>
                  <li>PRESENTATION THAT DEMONSTRATES THE FEASIBILITY OF A PROPOSED PRODUCT, METHOD, OR IDEA</li>
                </ul>
              </SquareContent>
            </SquareBack>
          </SquareInner>
        </Square>
        <Square ref={squareRef9} className="square9">
          <SquareInner className="square-inner">
            <SquareFront>
            <Image src={BackgroundImage5} alt="Lean Canvas" />
            </SquareFront>
            <SquareBack>
            <SquareContent>
                <p>STARTUP FINANCE MANAGEMENT</p>
                <ul>
                  <li>INVESTMENT</li>
                  <li>FUNDING</li>
                  <li>PROFIT DISTRIBUTION</li>
                </ul>
              </SquareContent>
            </SquareBack>
          </SquareInner>
        </Square>
      </SquareContainer>
      <Heading>Session on Investment Costs & Pitch Deck</Heading>
      <SquareContainer>
        <Square ref={squareRef10} className="square10">
          <SquareInner className="square-inner">
            <SquareFront>
            <Image src={BackgroundImage6} alt="Lean Canvas" />
            </SquareFront>
            <SquareBack>
            <SquareContent>
                <p>INVESTMENT-COSTS</p>
                <ul>
                  <li>CAPEX</li>
                  <li>OPEX</li>
                  <li>VARIABLE & FIXED OPERATING COSTS</li>
                  <li>BREAKEVEN</li>
                  <li>ROI</li>
                  <li>PAYBACK</li>
                  <li>GROSS MARGIN RATIO</li>
                </ul>
              </SquareContent>
            </SquareBack>
          </SquareInner>
        </Square>
        <Square ref={squareRef11} className="square11">
          <SquareInner className="square-inner">
            <SquareFront>
            <Image src={BackgroundImage7} alt="Lean Canvas" />
            </SquareFront>
            <SquareBack>
            <SquareContent>
                <p>KINDS OF PITCH DECKS</p>
                <ul>
                  <li>FULL OF INFORMATION & LONG - 10 MINS</li>
                  <li>VISUAL & SHORT - 3 MINS</li>
                  <li>1 MINUTE ELEVATOR PITCH</li>
                  <li>Whatever it should be tight, short and simple told with passion... and a story</li>
                </ul>
              </SquareContent>
            </SquareBack>
          </SquareInner>
        </Square>
        <Square ref={squareRef12} className="square12">
          <SquareInner className="square-inner">
            <SquareFront>
            <Image src={BackgroundImage8} alt="Lean Canvas" />
            </SquareFront>
            <SquareBack>
            <SquareContent>
                <p>PRODUCT DEVELOPMENT COST</p>
                <ul>
                  <li>RAW MATERIALS</li>
                  <li>LABOUR</li>
                  <li>DIRECT EXPENSES</li>
                  <li>DEVELOPMENT COSTS:</li>
                  <li>MARKET RESEARCH</li>
                  <li>TRAVELLING</li>
                  <li>LAPTOP HIRE</li>
                  <li>INTERNET</li>
                  <li>COMMUNICATION</li>
                  <li>SOFTWARE LICENSE</li>
                </ul>
              </SquareContent>
            </SquareBack>
          </SquareInner>
        </Square>
      </SquareContainer>
    </Container>
  );
};

const Container = styled.div`
  margin: 1rem;
  text-align: center;
`;

const Heading = styled.h1`
  color: white;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  background-color: #12283c;
  padding: 10px 30px;
  transition: transform 0.3s ease-in-out;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const SquareContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;
  padding: 30px 10px;
  flex-wrap: wrap;
`;

const Square = styled.div`
  background: #dddddd;
  width: calc(33% - 3.7rem);
  max-width: 80vh;
  aspect-ratio: 1 / 1;
  display: inline-block;
  position: relative;
  transition: transform 0.3s ease-in-out;
  border-radius: 15px;
  perspective: 1000px;
 Background-color:#dddddd;

  &.zoom-in {
    transform: scale(1.1);
  }

  &:hover .square-inner {
    transform: rotateY(180deg);
  }
`;

const SquareInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  border-radius: 15px;
`;

const SquareFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #dddddd;
  border-radius: 15px;
  transform-style: preserve-3d;
  transform: rotateY(0deg);
  transition: transform 0.6s;
`;

const SquareBack = styled(SquareFront)`
  transform: rotateY(180deg);
  background-color: #dddddd;
  backface-visibility: hidden;
`;
const SquareContent = styled.div`
  font-size: 0.7rem;
  color: red;
  text-align: left;
  margin-top: 10px;

  p {
    font-size: 1rem; 
    color: black;
    margin-top: 1px;
    color 
  }

  ul {
    font-size: 0.8rem;
    color: #12283c; 
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
`;

export default SessionComponent;
