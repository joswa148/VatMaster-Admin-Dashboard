import React from "react";
const logo = "/assets/image/Vat-Master-Logo-1.png";
const modelImg = "/assets/image/Screenshot_2025-12-20_132826-removebg-preview.png";
const offerBg = "/assets/image/Frame 1000006032.png";
const newsub = "/assets/image/newsub.png";
const clients = "/assets/image/homepic.png";
import { useNavigate } from "react-router-dom";

import "../Style/Landingcss/Herocor.css";
import { useWhatsAppRouting } from "../../hooks/useWhatsAppRouting";

const Tick = () => <span className="land-vm-check">✓</span>;

export default function Hero() {
  const { whatsappUrl } = useWhatsAppRouting();
  const navigate = useNavigate();

  return (
    <section className="land-vm-page">
      <div className="land-vm-shell">

        {/* TOP BAR */}
        <div className="land-vm-topbar">
          <div className="land-vm-brand">
            <img
              src={logo}
              alt="VAT Masters"
              className="land-vm-logo"
              onClick={() => navigate("/")}
            />
          </div>

          <a className="land-vm-wa-pill" href={whatsappUrl} target="_blank" rel="noreferrer">
            <i className="bi bi-whatsapp" />WhatsApp us 
          </a>
        </div>

        {/* MAIN */}
        <div className="land-vm-layout">

          {/* LEFT */}
          <div className="land-vm-leftCard">

            <div className="land-vtur">
              <h1 className="land-vm-title">
                Corporate Tax in <span> UAE</span>
              </h1>
            </div>

            <div className="land-vm-desc">
              <ul className="land-hdsahddnhs">

                <li className="land-dsada"><Tick /></li>
                <li className="land-dsadzas"><p>Corporate Tax Registration Made Simple</p></li>

                <li className="land-dsada"><Tick /></li>
                <li className="land-dsadzas"><p>Our experts ensure a fast, easy, and hassle-free process.</p></li>

                <li className="land-dsada"><Tick /></li>
                <li className="land-dsadzas"><p>Complete Corporate Tax documentation by certified experts.</p></li>

                <li className="land-dsada"><Tick /></li>
                <li className="land-dsadzas"><p>Timely Corporate Tax registration and filings without delays.</p></li>

              </ul>
            </div>

            <a className="land-vm-wa-btn" href={whatsappUrl} target="_blank" rel="noreferrer">
              <i className="bi bi-whatsapp" /> WhatsApp us
            </a>

            <div className="d-lg-flex">
              <div className="land-clientimg">
                <img src={clients} alt="" />
                <p>120+ Clients</p>
                <p>5.0 (3.1K Reviews)</p>
              </div>

              <div>
                <div
                  className="land-vtrtestbg"
                  style={{ backgroundImage: `url(${offerBg})` }}
                >
                  <div>
                    <p>Simplify your CT</p>
                    <p>Fast, Easy & Hassle</p>
                    <p>Fast, Easy & Hassle</p>
                    <p>Fast, Easy & Hassle</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT */}
          <div
            className="land-vm-rightPanel"
            style={{ backgroundImage: `url(${newsub})` }}
          >
            <img className="land-vm-model" src={modelImg} alt="Model" />
            <img src="/assets/image/newcard.png" alt="" className="land-priceimg" />

            <div className="land-pricelist">
              <p>Limited Offer Running @ Just</p>
              <p>
                AED <span className="land-p1">499</span>{" "}
                <span className="land-p2">199</span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
