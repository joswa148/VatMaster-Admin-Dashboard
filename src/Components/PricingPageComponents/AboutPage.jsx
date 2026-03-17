import React from "react";
const logo = "/assets/image/Vat-Master-Logo-1.png";
const heroImg = "/assets/image/Subtract 10.png";
const offerBg = "/assets/image/Frame 1000006032.png";
import "../Style/Pricingcss/AboutPage.css";
const dummyBg = "/assets/image/mobilePricing.jpg";

const Tick = () => <span className="cu-tickDot">✓</span>;
export default function AboutPage() {
  return (
    <div className='prize-vatcss'>
      <section className="cu-page">
        <div className="cu-shell">
          {/* TOP NAV */}


          {/* MAIN GRID */}
          <div className="cu-grid">
            {/* LEFT BIG IMAGE CARD */}
            <div className="cu-heroCard">
              <picture>
                <source
                  media="(max-width: 575px)"
                  srcSet={dummyBg}
                />
                <img className="cu-heroImg" src={heroImg} />
              </picture>

              {/* dark overlay (like screenshot) */}
              <div className="cu-heroShade" />

              <h1 className="cu-heroTitle">About Us</h1>

              {/* Cyan overlay card (WHITE holder + cyan card inside) */}
              <div className="cu-cyanWrap">
                <div
                  className="cu-cyanCard"

                >
                  <div className="cu-cyanTitle">Tax Made Simple for You</div>

                  <div className="cu-cyanTicks">
                    <div className="cu-tickRow">
                      {/* <span className="cu-tickDot" /> */}
                      <Tick />
                      Easy Documentation
                    </div>

                    <div className="cu-tickRow">
                      {/* <span className="cu-tickDot" /> */}
                      <Tick />
                      Professional Guidance
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
    </div>
  );
}


