import React from "react";
const bg = "/assets/image/Subtract 4.png";
const leftBg = "/assets/image/Group 1000005923.png";
const rightBg = "/assets/image/Group 1000005928.png";
const consultantImg = "/assets/image/three-talking-associates.jpg"; 
const landgroup = "/assets/image/langroup.png";


import "../Style/Book/CtDocsRateSectionNew.css";
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
            <h3 className="ct3-cardLefttitle">Best Accounting and Bookkeeping In Dubai</h3>
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
          <h3 className="ct3-cardTitle">Benefits of Outsourcing Accounting and Bookkeeping in Dubai, UAE</h3>
         

          <ul className="ct3-list">
            <li>
  <Tick />
  <span className="ct3-data">Maintain updated records of your company’s finances</span>
</li>

<li>
  <Tick />
  <span className="ct3-data">Time Saving and Cost Effective
  </span>
</li>

<li>
  <Tick />
  <span className="ct3-data">
   Data Security
  </span>
</li>

<li>
  <Tick />
  <span className="ct3-data">
   Help with preparing a budget and allocating funds
  </span>
</li>

<li>
  <Tick />
  <span className="ct3-data">
    Provide key information with regards to tax return filing
  </span>
</li>

<li>
  <Tick />
  <span className="ct3-data">
    Help with filing tax returns in Dubai, UAE
  </span>
</li>

<li>
  <Tick />
  <span className="ct3-data">
    Bank Details
  </span>
</li>

<li>
  <Tick />
  <span className="ct3-data">
   Understand the company’s financial situation and help with the subsequent decision making.
  </span>
</li>

<li>
  <Tick />
  <span className="ct3-data">
 Help find ways to reduce unnecessary expenditures etc.
  </span>
</li>


          </ul>

          {/* Button position like image (below list) */}

        </div>
      </div>
    </section>
  );
}