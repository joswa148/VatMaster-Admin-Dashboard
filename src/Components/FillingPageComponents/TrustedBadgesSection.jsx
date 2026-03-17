import React from "react";
const ribbonBg = "/assets/image/Group 1000005957.png";
const cardBg = "/assets/image/Subtract 3.png";
 
const logo = "/assets/image/666.png";
const logo1 = "/assets/image/dddd.png";
const logo2 = "/assets/image/3234521.png";
const logo3 = "/assets/image/333.png";
const logo4 = "/assets/image/7778.png";
const logo5 = "/assets/image/9923.png";
 
import "../Style/Fillingcss/TrustedBadgesSection.css";
 
export default function TrustedBadgeSectioncertificate() {
  const cards = [
    {
      img: logo1,
      alt: "ISO 27001",
      title: (
        <>
          Security <br /> Management
        </>
      ),
      sub: "ISO/IEC 27001:2013",
    },
    {
      img: logo,
      alt: "ISO 9001",
      title: (
        <>
          Quality <br /> Management
        </>
      ),
      sub: "ISO 9001:2015",
    },
    {
      img: logo2,
      alt: "Happy Clients",
      title: (
        <>
          Happy <br /> Clients
        </>
      ),
      sub: "9600+",
    },
    {
      img: logo3,
      alt: "Client Retention",
      title: (
        <>
          Client <br /> Retention
        </>
      ),
      sub: "98%",
    },
    {
      img: logo4,
      alt: "Industry Experience",
      title: (
        <>
          Industry <br /> Experience
        </>
      ),
      sub: "15+ Years",
    },
    {
      img: logo5,
      alt: "Live Expert Consultation",
      title: (
        <>
          Live Expert <br /> Free Consultation
        </>
      ),
      sub: "24×7",
    },
  ];
 
  return (
    <section className="trustb-wrap">
      <div className="trustb-container">
        {/* RIBBON */}
        <div
          className="trustb-ribbon"
          style={{ backgroundImage: `url(${ribbonBg})` }}
        >
          <p className="trustb-ribbonTitle">
           Trusted by UAE Businesses
          </p>
        </div>
 
        {/* CARDS GRID */}
        <div className="trustb-grid">
          {cards.map((c, idx) => (
            <div
              key={idx}
              className="trustb-card"
              style={{ backgroundImage: `url(${cardBg})` }}
            >
              <img src={c.img} alt={c.alt} className="trustb-badgeImg" />
              <div className="trustb-cardBody">
                <p className="trustb-cardTitle">{c.title}</p>
                <div className="trustb-cardSub">{c.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


