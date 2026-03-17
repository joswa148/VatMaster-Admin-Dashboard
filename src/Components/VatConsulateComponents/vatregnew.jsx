import React from "react";
import "../Style/VatConsultant/vatregnew.css";
const newvatregbg = "/assets/image/Subtract 4.png";
const logo = "/assets/image/Vat-Master-Logo-1.png";
const girlmain = "/assets/image/vtmain.png";
const derer = "/assets/image/AED-Symbol.svg";
import { useNavigate } from "react-router-dom";
import { useWhatsAppRouting } from "../../hooks/useWhatsAppRouting";


const Vatregnew = () => {
  const navigate = useNavigate();
  const { whatsappUrl } = useWhatsAppRouting();
  return (
    <section className="vmn-wrap">
      <div className="container-fluid">
        <div
          className="vmn-card"
          style={{ backgroundImage: `url(${newvatregbg})` }}
        >
          {/* TOP BAR */}
          <div className="vmn-topbar">
            <div className="vmn-brand">
              <a className="nav-link" onClick={() => navigate("/")}>
              <img src={logo} alt="" className="vmn-brand-mark" />
              </a>
            </div>

            <a className="vmn-topwa jdhe" href={whatsappUrl} target="_blank" rel="noreferrer">
              <i className="bi bi-whatsapp" /> WhatsApp us
            </a>
          </div>

          {/* MAIN GRID */}
          <div className="vmn-mainGrid">
            {/* LEFT */}
            <div className="vmn-left">
             
            <div className="trustdiv">
               <p className="trust "> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles me-1 w-4 h-4 text-gold"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>Trusted Tax Expertise</p>
            </div>

              <h1 className="vmn-title ">
              VAT Registration <span className="vmn-accent"> UAE</span>
              </h1>

              <div className="ptagvt">
                <p>Simplify your tax compliance with the UAE's VAT consultants. Fast, reliable, and 100% compliant registration services for growing businesses.</p>
              </div>

             <div className="tyj">
               <ul className="vmn-list mb-4">
                <li className="d-none d-lg-block">
                  <i className="bi bi-check-circle-fill me-2 " />
                 24-Hour Express Submission Available
                </li>
                 <li className="d-block d-lg-none">
                  <i className="bi bi-check-circle-fill me-2 " />
                24-Hour Express Submission
                </li>
                <li className="d-none d-lg-block">
                  <i className="bi bi-check-circle-fill me-2 " />
                  Zero-Rejection Guarantee on Documentation
                </li>
                <li>
                  <i className="bi bi-check-circle-fill me-2" />
                  Official FTA Accredited Tax Agents
                </li>
              </ul>
             </div>

             <div className="vmn-topwa-2div">
               <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="vmn-topwa-2"
              >
                <i className="bi bi-whatsapp me-2" />
                WhatsApp us
              </a>
             </div>
            </div>

            {/* RIGHT */}
            <div className="vmn-right">
              <div className="vmn-imgBox">
                <img src={girlmain} className="img-fluid" alt="Corporate Tax UAE" />
              </div>

              <div className="vmn-offer">
                <div className="vmn-offer-title">Limited Offer</div>
                <div className="vmn-offer-sub">Running @ Just</div>
                <div className="vmn-price">
                  <img src={derer} alt="" className="dee" /> <del>499</del> <span>125/-</span>
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

export default Vatregnew;
