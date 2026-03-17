import React from "react";
const cardBg = "/assets/image/displayCard.png";
import "../Style/Aboutcss/AboutHero.css";
import AboutPage from "../PricingPageComponents/AboutPage";
const vatreturn = "/assets/image/vtr.png";
const vatconsulate = "/assets/image/vtcon.png";
const accountbooking = "/assets/image/abt.png";
const offcourse = "/assets/image/otc.png";
const vatdereg = "/assets/image/vtd.png";
const vatreg = "/assets/image/vtreg.png";



export default function AboutHero() {
  return (
    <section className="about-wrap">
      <AboutPage />

      <div className="about-shell container-fluid">
        {/* ✅ ABOUT GRID */}
        <div className="about-grid">
          {/* LEFT SECTION */}
          <div className="about-leftRoot">
            <div className="about-leftMax">
              <div className="about-leftCard">
                {/* BG IMAGE */}
                <img
                  src={cardBg}
                  alt=""
                  className="about-leftBg"
                  draggable="false"
                />

                {/* TEXT BLOCK */}
                <div className="about-leftText">
                  <div className="about-leftBold">
                    <div className="about-lineWhite">
                      <span className="about-tClamp1">Leading VAT</span>
                    </div>

                    <div className="about-lineConsult">
                      <span className="about-tClamp1">Consulting</span>
                    </div>

                    <div className="about-lineDark">
                      <span className="about-tClamp2">Firm in</span>
                    </div>

                    <div className="about-lineUae">
                      <span className="about-tClamp2">UAE</span>
                    </div>
                  </div>
                </div>

                {/* BUTTON */}
                <a href="#about" className="about-exploreBtn">
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="about-rightRoot">
            <div className="about-rightInner">
              <p className="about-title">About Us</p>

              <p className="about-para">
                A Leading Professional Accounting and VAT consulting firm with
                the highest ethical and professional standards, We provide
                exceptional value to our customers, employees and society. VAT
                Masters auditors pay special attention to hiring and retaining a
                highly skilled workforce, with appropriate training and
                motivation to achieve quality levels comparable to
                internationally expected standards.
              </p>

              <div className="about-bullets">
                <div className="about-bulletRow">
                  <i class="bi bi-check-circle-fill me-1 me-lg-2"></i>
                  <span className="about-bulletText">Live VAT Expert Advice</span>
                </div>

                <div className="about-bulletRow">
                    <i class="bi bi-check-circle-fill me-1 me-lg-2"></i>
                  <span className="about-bulletText">100 % Accuracy Guaranteed</span>
                </div>

                    <div className="about-bulletRow">
                    <i class="bi bi-check-circle-fill me-1 me-lg-2"></i>
                  <span className="about-bulletText">On-Time FTA-Compliant Filing</span>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* ✅ SERVICE CARDS GRID (NO MAP) */}
        <div className="about-cardsWrap">
          <div className="about-cardsGrid">

            <div className="svc-card">
              <div className="svc-icon">
                <img src={vatreg} alt="" />
              </div>
              <div className="svc-title">
                VAT Registration
              </div>
            </div>

            <div className="svc-card">
              <div className="svc-icon">
                 <img src={vatreturn} alt="" />
              </div>
              <div className="svc-title">
                VAT Return Filing
              </div>
            </div>

            <div className="svc-card">
              <div className="svc-icon">
                <img src={accountbooking} alt="" />
              </div>
              <div className="svc-title">
                Accounting & Bookkeeping
              </div>
            </div>

            <div className="svc-card">
              <div className="svc-icon">
                <img src={vatconsulate} alt="" />
             
           
              </div>
              <div className="svc-title">
                VAT & TAX Consultancy
              </div>
            </div>

            <div className="svc-card">
              <div className="svc-icon">
                <img src={offcourse} alt="" />

              </div>
              <div className="svc-title">
                Outsource CFO
              </div>
            </div>

            <div className="svc-card">
              <div className="svc-icon">
                <img src={vatdereg} alt="" />
              </div>
              <div className="svc-title">
                VAT De-Registration
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
