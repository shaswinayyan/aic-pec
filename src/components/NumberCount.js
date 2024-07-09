import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import './NumberCount.css';
import { PiStudentFill, PiGraduationCapFill } from "react-icons/pi";
import { FaUsersGear, FaHandHoldingDollar } from "react-icons/fa6";
import { IoIosRocket } from "react-icons/io";
import { MdEmojiEvents } from "react-icons/md";
import { LuHeartHandshake } from "react-icons/lu";
import { RiLightbulbFlashLine } from "react-icons/ri";

const NumberCount = () => {
  const [countOn, setCountOn] = useState(false);

  return (
    <ScrollTrigger onEnter={() => setCountOn(true)} onExit={() => setCountOn(false)}>
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="counter blue">
            <div className="counter-icon">
              <PiStudentFill />
            </div>
            <h3 className="" style={{ color: "black" }}>students trained</h3>
            <span className="counter-value">{countOn && <CountUp start={0} end={100} duration={2} delay={1} />}+ </span>
          </div>
        </div>
        
        <div className="col-md-3 col-sm-6">
          <div className="counter blue">
            <div className="counter-icon">
            <FaUsersGear />
            </div>
            <h3 className="" style={{ color: "black" }}>jobs created</h3>
            <span className="counter-value">{countOn && <CountUp start={0} end={200} duration={2} delay={1} />}+ </span>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="counter blue">
            <div className="counter-icon">
            <IoIosRocket />
            </div>
            <h3 className="" style={{ color: "black" }}>startups on board</h3>
            <span className="counter-value">{countOn && <CountUp start={0} end={65} duration={2} delay={1} />}+ </span>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="counter blue">
            <div className="counter-icon">
            <PiGraduationCapFill />
            </div>
            <h3 className="" style={{ color: "black" }}> graduated startups</h3>
            <span className="counter-value">{countOn && <CountUp start={0} end={100} duration={2} delay={1} />}+ </span>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="counter orange">
            <div className="counter-icon">
            <FaHandHoldingDollar />
            </div>
            <h3 className="" style={{ color: "black" }}>IP registered</h3>
            <br />
            <span className="counter-value">{countOn && <CountUp start={0} end={180000000} duration={2} delay={0} />}cr</span>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="counter blue">
            <div className="counter-icon">
            <MdEmojiEvents />
            </div>
            <h3 className="" style={{ color: "black" }}>Events organised</h3>
            <span className="counter-value">{countOn && <CountUp start={0} end={300} duration={2} delay={1} />}+ </span>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="counter orange">
            <div className="counter-icon">
            <LuHeartHandshake />
            </div>
            <h3 className="" style={{ color: "black" }}>mentors on board</h3>
            <span className="counter-value">{countOn && <CountUp start={0} end={100} duration={2} delay={1} />}+ </span>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="counter blue">
            <div className="counter-icon">
            <RiLightbulbFlashLine />
            </div>
            <h3 className="" style={{ color: "black" }}>students innovation support</h3>
            <span className="counter-value">{countOn && <CountUp start={0} end={100} duration={2} delay={1} />}+ </span>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
}

export default NumberCount;
