import React, { useRef, useState, useEffect } from 'react';
import styles from './RoadMap.module.css';

const RoadMap = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const timelineRefs = useRef([]);

  // Function to handle scroll event
  const handleScroll = () => {
    setScrollTop(window.scrollY);
  };

  useEffect(() => {
    // Attach scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);
    
    // Clean up scroll event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Calculate visibility based on scrollTop and position of each timeline item
    timelineRefs.current.forEach((timelineItemRef, index) => {
      if (timelineItemRef && timelineItemRef.current) {
        const rect = timelineItemRef.current.getBoundingClientRect();
        const indicatorPosition = scrollTop + (window.innerHeight / 2);
        
        // Example condition: If indicator is within 50px of the timeline item
        const isVisible = rect.top <= indicatorPosition + 50 && rect.bottom >= indicatorPosition - 50;
        
        // Update opacity based on isVisible
        const contentElem = timelineItemRef.current.querySelector(`.${styles.content}`);
        if (contentElem) {
          contentElem.style.opacity = isVisible ? 1 : 0;
        }
      }
    });
  }, [scrollTop]);

  return (
    <div className={styles.timeline}>
      <div className={`${styles.timelineItem} ${styles.left}`} ref={el => timelineRefs.current[0] = el}>
        <div className={styles.content}>
          <h3>2019</h3>
          <small>Mar'2019</small>
          <p>AIC-PECF Receives 1st Tranche of AIM Grant-in-Aid</p>
          <small>Mar'2019</small>
          <p>Official Launch of AIC-PECF during Puducherry Startup Summit</p>
        </div>
      </div>
      <div className={`${styles.timelineItem} ${styles.right}`} ref={el => timelineRefs.current[1] = el}>
        <div className={styles.content}>
          <h3>2020</h3>
          <small>Jan'2020</small>
          <p>AIC-PECF 1st Outreach Startup Ignite</p>
          <small>Feb'2020</small>
          <p>AIC-PECF 1st Innovation Contest Prototest'20</p>
          <small>Mar'2020</small>
          <p>AIC-PECF Collaborated with Puducherry Key Ecosystem</p>
        </div>
      </div>
      <div className={`${styles.timelineItem} ${styles.left}`} ref={el => timelineRefs.current[2] = el}>
        <div className={styles.content}>
          <h3>2021</h3>
          <small>Mar'2021</small>
          <p>Successfully Achieved AIM Tranche-1 (G&D)</p>
          <small>Aug'2021</small>
          <p>AIC-PECF & CII Puducherry Launched Maiden CII Puducherry Innovation Contest</p>
          <small>Oct'2021</small>
          <p>AIC-PECF was recognized for its work by Manatec Electronics via CSR Support</p>
          <p>AIC-PECF Receives 2nd Tranche of Aim-in-aid</p>
          <small>Nov'2021</small>
          <p>AIC-PECF was selected for SISFS Scheme in the 8th EAC Meeting by DPIIT, GoI</p>
        </div>
      </div>
      <div className={`${styles.timelineItem} ${styles.right}`} ref={el => timelineRefs.current[3] = el}>
        <div className={styles.content}>
          <h3>2022</h3>
          <small>Jul'2022</small>
          <p>With the support of AIC-PECF Puducherry was awarded "ASPIRING LEADERS" amongst UTs by DPIIT National State Startup Ecosystem Ranking</p>
          <p>First edition of AIC-PECF "Startup Rendezvous"</p>
          <small>Sep'2022</small>
          <p>AIM SAMVAAD PuducherryChapter & Puduvai Startups First Demo Day</p>
          <small>Oct'2022</small>
          <p>AIC-PECF & CII Puducherry Second Edition of Innovation Contest</p>
          <small>Nov'2022</small>
          <p>Third Edition of CII Puducherry Startup Summit</p>
        </div>
      </div>
      <div className={`${styles.timelineItem} ${styles.left}`} ref={el => timelineRefs.current[4] = el}>
        <div className={styles.content}>
          <h3>2023</h3>
          <small>Jan'2023</small>
          <p>Launch of "Puduvai Startup Sprint"</p>
          <small>Feb'2023</small>
          <p>Smt. Shruti Singh, Joint Secretary DPIIT, Government of India visited AIC-PECF</p>
          <small>Aug'2023</small>
          <p>FICCI Awards to 3 Puducherry Startups, Nevar Systems, Hopsticks, AEDAA Equipments</p>
          <small>Oct'2023</small>
          <p>Second edition of AIC-PECF "Startup Rendezvous"</p>
        </div>
      </div>
      <div className={`${styles.timelineItem} ${styles.right}`} ref={el => timelineRefs.current[5] = el}>
        <div className={styles.content}>
          <h3>2024</h3>
          <small>Jan'2024</small>
          <p>Empowering Puducherry ATL's in Puducherry</p>
          <small>Feb'2024</small>
          <p>Official Launch of First AIC-PECF Puducherry Startup Expo 2024</p>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
