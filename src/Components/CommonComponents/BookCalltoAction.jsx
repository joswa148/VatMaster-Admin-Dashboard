import React from "react";
import { useNavigate } from "react-router-dom";
import { useWhatsAppRouting } from "../../hooks/useWhatsAppRouting";
import '../Style/BookCalltoAction.css'
const logo = "/assets/image/UAE_Dirham_Symboll.svg";

const BookCalltoActionlan = () => {
  const navigate = useNavigate();
  const { whatsappUrl } = useWhatsAppRouting();

  return (
    <>
      {/* <Newcall/> */}
   <div style={{position:"relative"}}>
     <section className="calltoaction">
      <div className="ctafoot-ctaBox">
        <p className="ctafoot-title">
         
          Talk to our TAX Experts
     Start  <img src={logo} alt="" className="logocall" /> <span className="text-decoration-line-through" style={{color: "red"}}>999</span> 499 /-</p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="cert-vm-wa-btn"
        > <i class="bi bi-whatsapp me-2"></i>
          WhatsApp us
        </a>
      </div>
    </section>
  

    <section className="ctafoot-section">
     

      {/* FOOTER */}
      <footer className="ctafoot-footer">
        <div className="ctafoot-footerGrid">
          {/* BRAND */}
          <div className="ctafoot-brand">
            <img src="/assets/image/Vat-Master-Logo-1.png" alt="" />
            <p>
              VAT Masters is a Leading Professional Accounting and VAT consulting firm with the highest ethical and professional standards, We provide exceptional value to our customers, employees and society
            </p>
               
               <div className="socpack-wrap">
      <a className="socpack-link" href="#" aria-label="Facebook">
        <i className="bi bi-facebook" />
      </a>

      <a className="socpack-link" href="#" aria-label="Twitter">
        <i className="bi bi-twitter-x" />
      </a>

      <a className="socpack-link" href="#" aria-label="Instagram">
        <i className="bi bi-instagram" />
      </a>

      <a className="socpack-link" href="#" aria-label="YouTube">
        <i className="bi bi-youtube" />
      </a>
    </div>

          </div>

          

          {/* SERVICES */}
          <div className="ctafoot-links">
            <p>Services</p>
            <ul>
              <li onClick={() => navigate("/vat-registration")}>VAT Registration</li>
              <li onClick={() => navigate("/vat-return-filling")}>VAT Return Filing</li>
              <li onClick={() => navigate("/accounting-and-bookkeeping-services")}>Accounting & Bookkeeping</li>
              <li onClick={() => navigate("/outsource-cfo-service")}>Outsource CFO</li>
              <li onClick={() => navigate("/vat-de-registration")}>VAT De-Registration</li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div className="ctafoot-links">
            <p>Quick Link</p>
            <ul>
              <li onClick={() => navigate("/")}>Home</li>
              <li onClick={() => navigate("/about")}>About Us</li>
              <li onClick={() => navigate("/vat-registration")}>Services</li>
              <li onClick={() => navigate("/contact")}>Contact Us</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="ctafoot-contact">
            <span>Contact</span>
           <p> <i class="bi bi-geo-alt "></i>   Suite #17, The Iridium Building, <b className="jed">  Al Barsha, Dubai, UAE</b></p>
          <p>  <i class="bi bi-envelope"></i>  Sales@vatmasters.com</p>
            <p> <i class="bi bi-telephone"></i> +971 52 596 6056</p>
          </div>
        </div>

        <div className="ctafoot-copy">
          vatmasters.com © 2026. All Rights Reserved
        </div>
      </footer>
    </section>
    </div> 
   
    </>
  );
};

export default BookCalltoActionlan;
