import React from "react";
import "../Style/VatCertificate/vatcornew.css";
const newvatregbg = "/assets/image/Subtract 4.png";
const logo = "/assets/image/Vat-Master-Logo-1.png";


import { useNavigate } from "react-router-dom";
import { useWhatsAppRouting } from "../../hooks/useWhatsAppRouting";

const Vatcornew = () => {
  const { whatsappUrl } = useWhatsAppRouting();
    const navigate = useNavigate();
  return (

    <>
    <section className="cor-vmn-wrap">
      <div className="container-fluid">
        <div
          className="cor-vmn-card"
          style={{ backgroundImage: `url(${newvatregbg})` }}
        >
          {/* TOP BAR */}
          <div className="cor-vmn-topbar">
            
            <div className="cor-vmn-brand">
               <a className="nav-link" onClick={() => navigate("/")}>
              <img src={logo} alt="" className="cor-vmn-brand-mark" />
              </a>
            </div>
            
            <a className="cor-vmn-topwa jdhe" href={whatsappUrl} target="_blank" rel="noreferrer">
              <i className="bi bi-whatsapp" /> WhatsApp us
            </a>
          </div>

          {/* MAIN GRID */}
          <div className="cor-vmn-mainGrid">
            {/* LEFT */}
            <div className="cor-vmn-left">
              <div className="trustdiv">
                             <p className="trust "> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles me-1 w-4 h-4 text-gold"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>Trusted Tax Expertise</p>

              </div>

              <h1 className="cor-vmn-title">
               VAT Certificate{" "}
                <span className="cor-vmn-accent">UAE</span>
              </h1>

              <div className="ptagvt">
                <p>
         Get your UAE VAT Certificate fast and secure through an expert-led, FTA-approved process with complete accuracy and compliance.
                </p>
              </div>
             <div className="tyj">
              <ul className="cor-vmn-list mb-4">
                <li>
                  <i className="bi bi-check-circle-fill me-2" />
                  Quick & Secure Processing
                </li>
                <li className="d-none d-lg-block">
                  <i className="bi bi-check-circle-fill me-2" />
                  Government-Approved VAT Certificate
                </li>
                <li>
                  <i className="bi bi-check-circle-fill me-2" />
                   Handled from Start to Completion
                </li>
              </ul>

              </div>

              <div className="cor-vmn-topwa-2div">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="cor-vmn-topwa-2 "
                >
                  <i className="bi bi-whatsapp me-2" />
                  WhatsApp us
                </a>
              </div>
            </div>

            {/* RIGHT */}
            {/* <div className="cor-vmn-right">
              <div className="cor-vmn-imgBox">
                <img
                  src={girlmain}
                  className="img-fluid"
                  alt="Corporate Tax UAE"
                />
              </div>

              <div className="cor-vmn-offer">
                <div className="cor-vmn-offer-title">Limited Offer</div>
                <div className="cor-vmn-offer-sub">Running @ Just</div>
                <div className="cor-vmn-price">
                  <img src={derer} alt="" className="dee"/> <del>499</del> <span>125/-</span>
                </div>
              </div>
            </div> */}


           
            <div class="ctext-center">
          <div class="offer-card text-center">
            <div class="sdsdljs"> </div>
            <p class="top-text">RAMADAN KAREEM</p>
            <h1 class="main-title">
              SPECIAL <br /> VAT OFFER
            </h1>
            {/* <!-- Price --> */}
            <div class="price-box">
              <div class="text-warning fw-bold">
                ALL-INCLUSIVE PRICE
              </div>
              <div class="d-flex justify-content-center align-items-center gap-3 mt-2">
                {/* <!--<span class="old-price">AED 499</span>--> */}
                <span class="new-price">AED 125</span>
              </div>
            </div>
            <p class="tagline">
              "Simplify your taxes this holy month"
            </p>
            {/* <!-- Auto Sliding Text --> */}
          </div>
        </div>



          </div>
          {/* /MAIN GRID */}
        </div>
      </div>
    </section>

<a href="tel:+971525966056" class="callWidgetBox d-lg-none">
<svg viewBox="0 0 24 24"><path d="M6.6 10.8c1.5 3 3.6 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.9.6.6 0 1 .4 1 1V21c0 .6-.4 1-1 1C10.9 22 2 13.1 2 2c0-.6.4-1 1-1h4.4c.6 0 1 .4 1 1 0 1.4.2 2.7.6 3.9.1.4 0 .8-.3 1.1l-2.7 2.8Z"></path></svg>
</a>

<style>{`
    @media only screen and (max-width: 367px) {
    .sdsdljs {
        display: none !important;

    }
}
/* Smooth Floating + Glow Animation for SVG */
.sdsdljs{
    animation: floatGlow 4s ease-in-out infinite;
}
 
/* Floating Effect */
@keyframes floatGlow {
    0% {
        transform: translateY(0px) rotate(0deg);
        filter: drop-shadow(0 0 0px rgba(255, 193, 7, 0.4));
    }
    50% {
        transform: translateY(-12px) rotate(1deg);
        filter: drop-shadow(0 0 12px rgba(255, 193, 7, 0.8));
    }
    100% {
        transform: translateY(0px) rotate(0deg);
        filter: drop-shadow(0 0 0px rgba(255, 193, 7, 0.4));
    }
}
/* Main Card */
.offer-card{
background-image: url(https://thevatconsultant.com/assets/frontend/images/r5.png);
    background-size: 100% 100%;
    background-position: center;
    border-radius: 40px;
    color: #fff;
    max-width: 460px;
    margin: auto;
    padding: 40px 30px;
    position: relative;
    overflow: hidden;
    top: 0px;
}
}
@media (min-width:320px) and (max-width:480px){
  .main-title {
    font-size:30px !important;
  }
  .join-text{
    font-size:13px !important;
  }
  .banner-wrap .container {
    padding:0px 0px !important;
  }
  body .offer-card .price-box{
    display:block !important;
                padding: 12px 5px !important;
  }
  .sdsdljs {
        top: 4% !important;
        width: 11% !important;
        left: 37px !important;
  }
  .new-price {
        font-size:30px !important;
  }
  
.offer-card {
      padding: 36px 24px !important;
}
}
.sdsdljs{
    background-image: url(https://thevatconsultant.com/assets/frontend/images/r6.svg);
    background-size: 100% 100%;
    width: 15%;
    height: 100%;
    z-index: 11111;
    position: absolute;
    left: 43px;
    top: 9%;
}
 
/* Top Text */
.top-text{
    color:#f6c23e;
    letter-spacing:4px;
    font-weight:600;
}
 
/* Title */
.main-title{
    font-size:35px;
    font-weight:800;
    line-height:1.1;
}
 
/* Price Box */
body .offer-card .price-box{
    background:rgba(255,255,255,0.08);
    border-radius:25px;
    padding:25px;
    margin-top:25px;
}
 
.old-price{
    text-decoration: line-through;
    opacity: 0.5;
    font-weight: 600;
    left: 13px;
    position: relative;
}
 
.new-price{
    font-size:42px;
    font-weight:800;
}
 
/* Tagline */
.tagline{
    font-style:italic;
    opacity:0.8;
    margin-top:20px;
}
 
/* Bottom Text */
.join-text{
    font-size: 14px;
    letter-spacing: 1px;
    font-weight: 700;
    color: #ffc107;
}
 
.social-row img{
    width:60%;
        width: 77%;
    border-radius: 20px;
}
.ctext-center {
    text-align: center;
    color: #fff;
}
.ctext-center h1{
    color: #fff;
}

.callWidgetBox svg{
      fill: #fff;
    width: 39px;
    height: 48px;
    position: relative;
    top: 2px;
    left: 0px;
}
/* Floating Call Button */
.callWidgetBox{
    position:fixed;
    bottom:25px;
    left:25px;
    width:65px;
    height:65px;
    background:#1dbf73;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    text-decoration:none;
    color:#fff;
    font-size:28px;
    box-shadow:0 6px 15px rgba(0,0,0,0.3);
    z-index:9999;
    animation:ringEffect 1.5s infinite;
    transition:0.3s;
}
 
.callWidgetBox:hover{
    background:#159a5c;
}
 
/* Ring Animation */
@keyframes ringEffect{
    0%{ box-shadow:0 0 0 0 rgba(29,191,115,0.6); }
    70%{ box-shadow:0 0 0 18px rgba(29,191,115,0); }
    100%{ box-shadow:0 0 0 0 rgba(29,191,115,0); }
}
 
/* Hide main button on mobile */
@media(max-width:768px){
    #primaryCallBtn{
        display:none;
    }
}

`}
</style>

 </>
  );
};

export default Vatcornew;
