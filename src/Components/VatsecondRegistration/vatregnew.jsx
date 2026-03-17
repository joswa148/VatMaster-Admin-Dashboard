import React from "react";
import "../Style/VatsecondRegistration/vatregnew.css";
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
               <p className="trust "> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield w-4 h-4 text-accent"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg> FTA Approved Tax Agents</p>
            </div>

              <h1 className="vmn-title ">
              VAT Registration <span className="vmn-accent"> UAE</span>
              </h1>

              <div className="ptagvt">
                <p>Simplify your tax compliance with the UAE's VAT consultants. Fast, reliable, and 100% compliant registration services for growing businesses.</p>
              </div>

             <div className="tyj">
               <ul className="vmn-list mb-4">
                <li className=" d-lg-block">
                  <i className="bi bi-check-circle-fill me-2 " />
                24-Hour Turnaround
                </li>
                 <li className="d-block">
                  <i className="bi bi-check-circle-fill me-2 " />
                100% Compliance
                </li>
                <li className=" d-lg-block">
                  <i className="bi bi-check-circle-fill me-2 " />
                  Free Consultation
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
