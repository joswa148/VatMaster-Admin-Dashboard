import React from "react";
const pricingCardShape = "/assets/image/cardBg.png";
const pricediram = "/assets/image/UAE_Dirham_Symboll.svg";
import "../style/Pricingcss/PricingPlans.css";


const CpCheckIcon = () => (
  <span className="cpn-check">
    <svg viewBox="0 0 24 24" className="cpn-checkSvg" aria-hidden="true">
      <path
        d="M20 6L9 17l-5-5"
        fill="none"
        stroke="#0B2F35"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);


const CpWhatsAppCircle = () => (
  <span className="pc-arrowCircle">
    <svg viewBox="0 0 24 24" className="pc-arrowSvg">
      <path
        d="M7 17L17 7M9 7h8v8"
        fill="none"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

export function CommonPricingCard({
  bgImage = pricingCardShape,
  title,
  priceText,
  bullets = [],
  noteLines = [],
  ctaText = "WhatsApp us",
  ctaLink = "#",

  // ✅ NEW: per-card sizing props
  minHeight = 402, // number -> px
  maxHeight = 520, // number -> px
  aspectRatio = "8 / 9", // optional: "8 / 9" or "auto"

  // ✅ optional final override
  wrapStyle = {},
}) {
  const bulletCount = Array.isArray(bullets) ? bullets.length : 0;

  // ✅ set CSS variables per card
  const styleVars = {
    "--cpn-minH": `${minHeight}px`,
    "--cpn-maxH": `${maxHeight}px`,
    "--cpn-ar": aspectRatio,
    ...wrapStyle,
  };

  return (
    <div className="cpn-cardWrap" data-bullets={bulletCount} style={styleVars}>
      <img src={bgImage} alt="" className="cpn-cardBg" draggable="false" />

      <div className="cpn-cardInner">
        <div className="cpn-cardContent">
          <h3 className="cpn-title">
            <span className="cpn-titleTx">{title}</span>
          </h3>

          <div className="cpn-pill">
            <span className="cpn-pillTx">Starts  <img src={pricediram} alt="" className="aedSign mx-0" /> {priceText}</span>
          </div>

          <ul className="cpn-list">
            {bullets.map((t, idx) => (
              <li key={idx} className="cpn-li">
                <span className="cpn-liIc">
                  <CpCheckIcon />
                </span>
                <span className="cpn-liTx">{t}</span>
              </li>
            ))}
          </ul>

          <div className="cpn-note">
            {noteLines.map((line, idx) => (
              <div key={idx} className="cpn-noteLn">
                {line}
              </div>
            ))}
          </div>
        </div>

        <a className="cpn-btn" href={ctaLink} target="_blank" rel="noreferrer">
          <span className="cpn-btnTx">{ctaText}</span>
          <CpWhatsAppCircle />
        </a>
      </div>
    </div>
  );
}

