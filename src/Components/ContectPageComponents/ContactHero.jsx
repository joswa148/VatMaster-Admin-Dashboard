import React from "react";
const heroImg = "/assets/image/Subtract 10.png";
const offerBg = "/assets/image/Frame 1000006032.png";
 
import "../Style/Pricingcss/NewPrice.css";
 
export default function ContactHero() {
  return (
    <section className="cu-page">
      <div className="cu-shell">
        {/* TOP NAV */}
     
 
        {/* MAIN GRID */}
        <div className="cu-grid">
          {/* LEFT BIG IMAGE CARD */}
          <div className="cu-heroCard">
            <img className="cu-heroImg" src={heroImg} alt="" />
 
            {/* dark overlay (like screenshot) */}
            <div className="cu-heroShade" />
 
            <h1 className="cu-heroTitle">Contact US</h1>
 
            {/* Cyan overlay card (WHITE holder + cyan card inside) */}
            <div className="cu-cyanWrap">
              <div
                className="cu-cyanCard"
                style={{
                  backgroundImage: `url(${offerBg})` // Frame 1000006032.png
                }}
              >
                <div className="cu-cyanTitle">Your Tax Compliance Partner</div>
 
                <div className="cu-cyanTicks">
                  <div className="cu-tickRow">
                    <span className="cu-tickDot" />
                   Quick Service
                  </div>
 
                  <div className="cu-tickRow">
                    <span className="cu-tickDot" />
                   Trusted Experts
                  </div>
                </div>
              </div>
 
            </div>
 
          </div>
 
          {/* RIGHT DARK CARD */}
          <aside className="cu-sideCard" aria-label="Highlight">
            <div className="cu-sideText">
              <div>Start Your Tax</div>
              <div>Journey with Ease</div>
              <div className="cu-sideSmall">Let VAT Masters handle</div>
              <div className="cu-sideSmall">your Corporate Tax</div>
              <div className="cu-sideSmall">Registration.</div>
            </div>
 
            {/* subtle squares (like screenshot) */}
            <div className="cu-squares" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
 
            {/* bottom-right soft circle */}
            <div className="cu-sideCircle" aria-hidden="true" />
          </aside>
        </div>
      </div>
    </section>
  );
}


