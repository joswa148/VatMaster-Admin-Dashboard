import React, { useRef, useEffect, useState } from "react";
import { useMeta } from '../../hooks/useMeta';
import HomeHero from "../HomePageComponents/HomeHero";
import Homeabout from "../HomePageComponents/Homeabout";
import Homeservice from "../HomePageComponents/Homeservice";
import HomePrice from "../HomePageComponents/HomePrice";
import HomeTest from "../HomePageComponents/HomeTest";
import Homechoose from "../HomePageComponents/Homechoose";
import CalltoAction from "../CommonComponents/CalltoAction";

import "../styles/homepage.css"; // 👈 custom CSS

/* ===== Full width helper ===== */
const FullBleed = ({ children, className = "" }) => (
  <div className={`full-bleed ${className}`}>
    {children}
  </div>
);

/* ===== Scroll Reveal ===== */
const Reveal = ({ children, delay = 0, y = 16 }) => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${show ? "reveal-show" : ""}`}
      style={{
        transitionDelay: `${delay}ms`,
        transform: show ? "translateY(0)" : `translateY(${y}px)`
      }}
    >
      {children}
    </div>
  );
};

const HomePage = () => {
  const { setPageMeta } = useMeta();

  useEffect(() => {
    setPageMeta('home');
  }, [setPageMeta]);

  return (
    <>
      <div className="homepage-container">
        {/* ===== HERO ===== */}
        <HomeHero />
      </div>
       
        {/* ===== SECTIONS ===== */}
        <main className="homepage-sections">
          <Reveal>
            <Homeabout />
          </Reveal>

          <Reveal delay={60}>
            <Homeservice />
          </Reveal>

          <Reveal delay={80}>
            <HomePrice />
          </Reveal>

          <Reveal delay={100}>
            <HomeTest />
          </Reveal>

          <Reveal delay={120}>
            <Homechoose />
          </Reveal>

          <Reveal delay={140}>
            <CalltoAction />
          </Reveal>
        </main>

      </>
  
     
    
  );
};

export default HomePage;



