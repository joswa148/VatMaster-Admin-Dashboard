import React from "react";
import { useNavigate } from "react-router-dom";
import '../Style/CalltoAction.css'
import { useWhatsAppRouting } from "../../hooks/useWhatsAppRouting";

const CalltoAction = () => {
  const navigate = useNavigate();
  const { whatsappUrl } = useWhatsAppRouting();

  return (
    <>
   <div style={{position:"relative"}}>
     <section className="calltoaction">
       {/* CTA TOP */}
      <div className="ctafoot-ctaBox">
        {/* <p className="ssasaa">Get Started Today</p> */}
        <h2 className="ctafoot-title">
          {/* Leading VAT consulting and accounting firm <br />
          serving <span>businesses across the UAE</span> */}
       Leading <span>Tax Experts in the UAE</span> Providing Reliable & Compliant Advisory Services

        </h2>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hh-btnWhatsapp"
        > <i class="bi bi-whatsapp fs-5 fs-md-2 fs-lg-6"></i>
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
      <a className="socpack-link" href="https://www.facebook.com/people/VAT-Masters/100092346398329/" target="_blank" aria-label="Facebook">
        <i className="bi bi-facebook" />
      </a>

      <a className="socpack-link" href="https://x.com/i/flow/login?redirect_after_login=%2FVAT_Masters" target="_blank" aria-label="Twitter">
        <i className="bi bi-twitter-x" />
      </a>

      <a className="socpack-link" href="https://www.instagram.com/vat_masters/" target="_blank" aria-label="Instagram">
        <i className="bi bi-instagram" />
      </a>

      <a className="socpack-link" href="https://in.pinterest.com/vatmastersuae/" target="_blank" aria-label="YouTube">
      <i class="bi bi-pinterest"></i>
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
           <p> <i class="bi bi-geo-alt "></i> Suite #17, The Iridium Building, <b className="jed">  Al Barsha, Dubai, UAE</b></p>
          <a href="mailto:sales@vatmasters.com" className="text-decoration-none"> <p>  <i class="bi bi-envelope"></i>  sales@vatmasters.com </p></a>
           <a  href="tel:+971 52 596 6056" className="text-decoration-none">   <p><i class="bi bi-telephone"></i> +971 52 596 6056 </p> </a>
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

export default CalltoAction;
