import React from "react";
import "../Style/UaeConsultantcss/vatcertnew.css";
const newvatregbg = "/assets/image/Subtract 4.png";
const logo = "/assets/image/Vat-Master-Logo-1.png";
const girlmain = "/assets/image/vtmain.png";
const derer = "/assets/image/AED-Symbol.svg";
import { useNavigate } from "react-router-dom";
import { useWhatsAppRouting } from "../../hooks/useWhatsAppRouting";

const Vatcertnew = () => {
const navigate = useNavigate();
const { whatsappUrl } = useWhatsAppRouting();
  return (
    <section className="cert-vmn-wrap">
      <div className="container-fluid">
        <div
          className="cert-vmn-card"
          style={{ backgroundImage: `url(${newvatregbg})` }}
        >
          {/* TOP BAR */}
          <div className="cert-vmn-topbar">
            <div className="cert-vmn-brand">
              <a className="nav-link" onClick={() => navigate("/")}>
              <img src={logo} alt="" className="cert-vmn-brand-mark" />
              </a>
            </div>

            <a className="cert-vmn-topwa jdhe" href={whatsappUrl} target="_blank" rel="noreferrer">
              <i className="bi bi-whatsapp" /> WhatsApp us
            </a>
          </div>

          {/* MAIN GRID */}
          <div className="cert-vmn-mainGrid">
            {/* LEFT */}
            <div className="cert-vmn-left">
              <div className="cert-trustdiv">
               <p className="cert-trust">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-sparkles w-4 h-4 text-gold"
  >
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    <path d="M20 3v4" />
    <path d="M22 5h-4" />
    <path d="M4 17v2" />
    <path d="M5 18H3" />
  </svg>

  Trusted Tax Expertise
</p>

              </div>

              <h1 className="cert-vmn-title">
              Corporate Tax Registration  {" "}
                <span className="cert-vmn-accent">UAE</span>
              </h1>

              <div className="cert-ptagvt">
                <p>
                  UAE Corporate Tax Registration – Fast, Hassle-Free & Fully FTA-Compliant Services for Your Business.
                </p>
              </div>

              <ul className="cert-vmn-list mb-4">
                <li>
                  <i className="bi bi-check-circle-fill me-2" />
Simple & Smooth Process       </li>
                <li>
                  <i className="bi bi-check-circle-fill me-2" />
Full Corporate Tax Support              </li>
                <li>
                  <i className="bi bi-check-circle-fill me-2" />
                Trusted Tax Expertise
                </li>
              </ul>

              <div className="cert-vmn-topwadsadsadsa">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="cert-vmn-topwadsfds cert-vmn-topwa oses"
                >
                  <i className="bi bi-whatsapp me-2" />
                  WhatsApp us
                </a>
              </div>
            </div>

            {/* RIGHT */}
            <div className="cert-vmn-right">
              <div className="cert-vmn-imgBox">
                <img
                  src={girlmain}
                  className="img-fluid"
                  alt="Corporate Tax UAE"
                />
              </div>

              <div className="cert-vmn-offer">
                <div className="cert-vmn-offer-title">Limited Offer</div>
                <div className="cert-vmn-offer-sub">Running @ Just</div>
                <div className="cert-vmn-price">
                  <img src={derer} alt=""  className="dee"/> <del>499</del> <span>125</span>
                </div>
              </div>
            </div>
          </div>
          {/* /MAIN GRID */}
        </div>
      </div>
    </section>
  );
};

export default Vatcertnew;
