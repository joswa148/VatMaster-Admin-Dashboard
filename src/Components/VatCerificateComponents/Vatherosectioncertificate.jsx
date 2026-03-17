import React from "react";
const logo = "/assets/image/Vat-Master-Logo-1.png";
const modelImg = "/assets/image/Screenshot_2025-12-20_132826-removebg-preview.png";
const offerBg = "/assets/image/Frame 1000006032.png";
const newsub = "/assets/image/newsub.png";
const clients = "/assets/image/homepic.png";
import { useNavigate } from "react-router-dom";

import "../Style/VatCertificate/Vatherosectioncertificate.css";
import { useWhatsAppRouting } from "../../hooks/useWhatsAppRouting";

const Tick = () => <span className="cert-vm-check">✓</span>;

export default function Hero() {
  const { whatsappUrl } = useWhatsAppRouting();
  const navigate = useNavigate();

  return (
    <section className="cert-vm-page">
      <div className="cert-vm-shell">

        {/* TOP BAR */}
        <div className="cert-vm-topbar">
          <div className="cert-vm-brand">
            <img
              src={logo}
              alt="VAT Masters"
              className="cert-vm-logo"
              onClick={() => navigate("/")}
            />
          </div>

          <a className="cert-vm-wa-pill" href={whatsappUrl} target="_blank" rel="noreferrer">
            <i className="bi bi-whatsapp" /> WhatsApp us
          </a>
        </div>

        {/* MAIN */}
        <div className="cert-vm-layout">

          {/* LEFT */}
          <div className="cert-vm-leftCard">

            <div className="cert-vtur">
              <h1 className="cert-vm-title">
               VAT Certificate <span>UAE</span>
              </h1>
            </div>

            <div className="cert-vm-desc">
              <ul className="cert-hdsahddnhs">

                <li className="cert-dsada"><Tick /></li>
                <li className="cert-dsadzas"><p>Simplify your VAT Registration with VAT Masters.</p></li>

                <li className="cert-dsada"><Tick /></li>
                <li className="cert-dsadzas"><p>Our experts ensure a fast, easy, and hassle-free process.</p></li>

                <li className="cert-dsada"><Tick /></li>
                <li className="cert-dsadzas"><p>Complete VAT documentation handled by certified experts.</p></li>

                <li className="cert-dsada"><Tick /></li>
                <li className="cert-dsadzas"><p>Timely VAT registration and filings without delays.</p></li>

              </ul>
            </div>

            <a className="cert-vm-wa-btn" href={whatsappUrl} target="_blank" rel="noreferrer">
              <i className="bi bi-whatsapp" /> WhatsApp us
            </a>

            <div className="d-lg-flex">
              <div className="cert-clientimg">
                <img src={clients} alt="" />
                <p>120+ Clients</p>
                <p>5.0 (3.1K Reviews)</p>
              </div>

              <div>
                <div
                  className="cert-vtrtestbg"
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
            className="cert-vm-rightPanel"
            style={{ backgroundImage: `url(${newsub})` }}
          >
            <img className="cert-vm-model" src={modelImg} alt="Model" />
            <img
              src="/assets/image/newcard.png"
              alt=""
              className="cert-priceimg"
            />

            <div className="cert-pricelist">
              <p>Limited Offer Running @ Just</p>
              <p>
                AED <span className="cert-p1">499</span>{" "}
                <span className="cert-p2">199</span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
