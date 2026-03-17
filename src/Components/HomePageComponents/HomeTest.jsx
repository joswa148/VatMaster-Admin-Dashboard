import React, { useEffect, useMemo, useRef, useState } from "react";
import "../Style/Homecss/Hometest.css";
const leftBigCardImg = "/assets/image/Subtract-6.png";
const rightCardShapeImg = "/assets/image/Subtract-5.png";
const avatarImg = "/assets/image/bussman.jpg";
import { useNavigate } from "react-router-dom";
export default function HomeTest() {
  const trackRef = useRef(null);
  const timerRef = useRef(null);
  const navigate = useNavigate();
  // ✅ Your cards (5 cards)
 const baseCards = useMemo(
  
  () => [
   {
    name: "Ahamed Raza",
    title: "FM  ",
    company: "Bayzat",
    text: "VAT Masters delivered accurate VAT filing with clear guidance and full FTA compliance. Professional and reliable service.",
  },
  {
    name: "Daniel Joseph",
    title: "OD",
    company: "Careem",
    text: "Clear advice and smooth VAT filing ensured timely submission and complete regulatory compliance.",
  },
  {
    name: "Mohammed Faisal",
    title: "MP",
    company: "Property Finder",
    text: "Excellent VAT support with accurate documentation and prompt service throughout the process.",
  },
  {
    name: "Abdul Rahman",
    title: "AH",
    company: "YallaCompare",
    text: "Efficient VAT handling with error-free filing and strong compliance expertise.",
  },
  {
    name: "Karthik Raj",
    title: "Founder",
    company: "Zoho Middle East",
    text: "Outstanding VAT service with responsive support and accurate compliance from start to finish.",
  },
  ],
  []
);


  const baseLen = baseCards.length;

  // ✅ 3 copies => seamless reset without showing jump
  const cards = useMemo(() => [...baseCards, ...baseCards, ...baseCards], [baseCards]);

  // ✅ Start in middle copy
  const [index, setIndex] = useState(baseLen);

  const intervalTime = 3000; // 1 card per 2 sec
  const transitionMs = 800;

  // ✅ card total height = 220 + 15 gap = 235
  const CARD_H = 235;

  // ✅ Start position
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.style.transition = "none";
    track.style.transform = `translateY(-${baseLen * CARD_H}px)`;
    requestAnimationFrame(() => {
      track.style.transition = `transform ${transitionMs}ms ease-in-out`;
    });
  }, [baseLen]);

  // ✅ Auto step (1 card per tick)
  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, intervalTime);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // ✅ Apply translate + seamless reset back to middle
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // normal move
    track.style.transition = `transform ${transitionMs}ms ease-in-out`;
    track.style.transform = `translateY(-${index * CARD_H}px)`;

    // ✅ When leaving middle copy -> reset to middle copy same visual item
    // middle copy range: [baseLen .. 2*baseLen-1]
    // if index becomes 2*baseLen (entered 3rd copy), reset back to baseLen
    if (index === 2 * baseLen) {
      const t = setTimeout(() => {
        // remove animation & jump internally (user won't notice)
        track.style.transition = "none";

        const resetIndex = baseLen; // back to middle start
        track.style.transform = `translateY(-${resetIndex * CARD_H}px)`;
        setIndex(resetIndex);

        // restore transition
        requestAnimationFrame(() => {
          track.style.transition = `transform ${transitionMs}ms ease-in-out`;
        });
      }, transitionMs);

      return () => clearTimeout(t);
    }
  }, [index, baseLen]);

  return (
    <section className="hometest-sec">
      <div className="container">
        <div className="row align-items-center">
          {/* ✅ Left 4 columns */}
          <div className="col-lg-7 mb-4 mb-lg-0 pl-0">
            <div className="hometest-left">
            <div className="ts-leftCard">
              <img
                src={leftBigCardImg}
                alt=""
                className="ts-leftBg"
                draggable="false"
              />

              <a  href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/contact");
                }} className="ts-exploreBtn ">
                Explore More
              </a>

              <div className="ts-leftTitleWrap">
                <h2 className="ts-leftTitle">
                  What Our <br />
                  Client Say
                </h2>
              </div>
            </div>
            </div>
          </div>

          {/* ✅ Right 8 columns */}
          <div className="col-lg-5">
            <div className="ts-wrapper">
              <div ref={trackRef} className="ts-track">
                {cards.map((c, i) => (
                  <div className="ts-card" key={`${c.name}-${i}`}>
                    <p>{c.name}</p>

  {/* NEW: Position + Company */}
  <div className="ts-meta">
    {c.title} • {c.company}
  </div>

  <p>{c.text}</p>
  <div className="stars">★★★★★</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Optional dots */}
            <div className="dots">
              {baseCards.map((_, i) => (
                <span
                  key={i}
                  className={`dot ${((index - baseLen) % baseLen + baseLen) % baseLen === i ? "active" : ""}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
