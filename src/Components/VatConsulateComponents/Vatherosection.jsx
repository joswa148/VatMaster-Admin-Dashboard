import React from "react";
const logo = "/assets/image/Vat-Master-Logo-1.png";
const rightPanelBg = "/assets/image/Group 1000005918.png";
const modelImg = "/assets/image/Screenshot_2025-12-20_132826-removebg-preview.png";
const offerBg = "/assets/image/Frame 1000006032.png";
const destww = "/assets/image/UAE_Dirham_Symboll.svg";
const goolerew = "/assets/image/225.webp";
const newsub = "/assets/image/newsub.png";
const clients = "/assets/image/homepic.png";
import { useNavigate } from "react-router-dom";

import "../Style/VatRegistration/Vatherosection.css";
import { useWhatsAppRouting } from "../../hooks/useWhatsAppRouting";
const Tick = () => <span className="vm-check">✓</span>;

export default function Vatherosection() {
  const { whatsappUrl } = useWhatsAppRouting();
    const navigate = useNavigate();
  return (
    
    <section className="vm-page">
      <div className="vm-shell">
        {/* TOP PILL */}
        <div className="vm-topbar">

          <div className="vm-brand" >
            <img src={logo} alt="VAT Masters" className="vm-logo"  onClick={() => navigate("/")} />
          </div>

          <a className="vm-wa-pill" href={whatsappUrl} target="_blank" rel="noreferrer">
            <i className="bi bi-whatsapp" />
            WhatsApp us
          </a>

        </div>

        {/* MAIN */}
        <div className="vm-layout">
          {/* LEFT */}
          <div className="vm-leftCard">
           <div className="vtur">
             <h1 className="vm-title">
            VAT Registration <span>UAE</span>
            </h1>
           </div>

            <div className="vm-desc">
              <ul className="hdsahddnhs">
   <li className="dsada">
  <Tick />
</li>
<li className="dsadzas">
  <p>Simplify your VAT Registration with VAT Masters.</p>
</li>

<li className="dsada">
  <Tick />
</li>
<li className="dsadzas">
  <p>Our experts ensure a fast, easy, and hassle-free process.</p>
</li>

<li className="dsada">
  <Tick />
</li>
<li className="dsadzas">
  <p>Complete VAT documentation handled by certified experts.</p>
</li>

<li className="dsada">
  <Tick />
</li>
<li className="dsadzas">
  <p>Timely VAT registration and filings without delays.</p>
</li>

              </ul>
            </div>

            <a className="vm-wa-btn" href={whatsappUrl} target="_blank" rel="noreferrer">
              <i className="bi bi-whatsapp" />
              WhatsApp us
            </a>
            
            <div className="d-lg-flex">
              <div className="clientimg">
                  <img src={clients} alt="" />
                <p>120+ Clients</p>
                <p>5.0 (3.1K Reviews)</p>
              </div>

             <div>
               <div className=" vtrtestbg" style={{
  backgroundImage: `url(${offerBg})`
}}>
   <div> <p>Simplify your CT </p>
    <p>Fast, Easy & Hassle </p>
    <p>Fast, Easy & Hassle </p>
    <p>Fast, Easy & Hassle </p></div>
              </div>
             </div>

            </div>
          
          </div>

          {/* RIGHT */}
          <div
            className="vm-rightPanel"
            style={{ backgroundImage: `url(${newsub})` }}
          >
             <img className="vm-model" src={modelImg} alt="Model" />
            <img src="/assets/image/newcard.png" alt="" className="priceimg" />
            <div className="pricelist">
              <p>Limited Offer Running @ Just </p>
              <p>AED <span className="p1">499</span> <span  className="p2">199</span></p>
           </div>
          </div>
        </div>
      </div>
    </section>
  );
}