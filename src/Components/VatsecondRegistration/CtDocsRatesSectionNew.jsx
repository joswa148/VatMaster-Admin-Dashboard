import React from "react";
const bg = "/assets/image/Subtract 4.png";
const rightBg = "/assets/image/Group 1000005928.png";
const landgroup = "/assets/image/langroup.png";

import "../Style/VatsecondRegistration/CtDocsRateSectionNew.css";
import { useWhatsAppRouting } from "../../hooks/useWhatsAppRouting";

const Tick = () => <span className="ct3-tick">✓</span>;

export default function CtDocsRatesSectionNew() {
  const { whatsappUrl } = useWhatsAppRouting();
  return (
    <section className="ct3-wrap">
      <div className="ct3-shell">
        {/* background image */}
        <div className="ct3-bg" style={{ backgroundImage: `url(${bg})` }} />
        {/* light grid overlay (optional)s */}
        <div className="ct3-grid" />

        {/* LEFT SIDE */}
        <div className="ct3-left">
          <p className="ct3-heroTitle">
            Book Your Free Consultation with 
            FTA Approved Consultant
          </p>

         
            {/* Caption like image */}
            <h3 className="ct3-cardLefttitle">Best VAT Registration Services In Dubai</h3>
             <img className="bc-img" src={landgroup} alt="Consultant" />
     
        </div>

        {/* RIGHT SIDE */}
        <div
          className="ct3-card ct3-cardRight"
          style={{ backgroundImage: `url(${rightBg})` }}
        >

          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="ct-wa">
            <i className="bi bi-whatsapp"></i> WhatsApp us
          </a>
          <h3 className="ct3-cardTitle">Necessary Documents for VAT Registration in UAE</h3>
         

          <ul className="ct3-list">
            <li>
  <Tick />
  <span className="ct3-data">Trade License</span>
</li>

<li>
  <Tick />
  <span className="ct3-data">
    Certificate of Incorporation
  </span>
</li>

<li>
  <Tick />
  <span className="ct3-data">
    Memorandum of Association (MoA)
  </span>
</li>

<li>
  <Tick />
  <span className="ct3-data">
    Passport & Emirates ID (Owners/Partners)
  </span>
</li>

<li>
  <Tick />
  <span className="ct3-data">
    Company Bank Account Details & IBAN
  </span>
</li>

<li>
  <Tick />
  <span className="ct3-data">
    Business Activities & Financial Projections
  </span>
</li>

<li>
  <Tick />
  <span className="ct3-data">
    Contact Details & Registered Office Address
  </span>
</li>



          </ul>

          {/* Button position like image (below list) */}

        </div>
      </div>
    </section>
  );
}