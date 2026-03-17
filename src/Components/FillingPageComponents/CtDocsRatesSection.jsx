import React from "react";
import { useWhatsAppRouting } from "../../hooks/useWhatsAppRouting";
const bg = "/assets/image/Subtract 4.png";
const leftBg = "/assets/image/Group 1000005923.png";
const rightBg = "/assets/image/Group 1000005928.png";
const consultantImg = "/assets/image/three-talking-associates.jpg"; 
const landgroup = "/assets/image/langroup.png";
import "../Style/Fillingcss/CtDocsRatesSectionNew.css"
const Tick = () => <span className="ct3-tick">✓</span>;

export default function CtDocsRatesSection() {
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
            <h3 className="ct3-cardLefttitle">Best Corporate Tax Filing In Dubai</h3>
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
          <h3 className="ct3-cardTitle">Necessary Documents for Corporate Tax Filing in UAE</h3>
         

          <ul className="ct3-list">
            <li>
  <Tick />
  <span className="ct3-data">Trade License</span>
</li>

<li>
  <Tick />
  <span className="ct3-data">
 Company KYC details
  </span>
</li>

<li>
  <Tick />
  <span className="ct3-data">
    Financial Statement
  </span>
</li>

<li>
  <Tick />
  <span className="ct3-data">
 Income Statement (Profit and Loss Statement)
  </span>
</li>

<li>
  <Tick />
  <span className="ct3-data">
 Balance Sheet
  </span>
</li>

<li>
  <Tick />
  <span className="ct3-data">
 Cash Flow Statement
  </span>
</li>

<li>
  <Tick />
  <span className="ct3-data">
 Vat Returns
  </span>
</li>

<li>
  <Tick />
  <span className="ct3-data">
 Taxable Income Calculation
  </span>
</li>

<li>
  <Tick />
  <span className="ct3-data">
 Depreciation Schedules
  </span>
</li>

<li>
  <Tick />
  <span className="ct3-data">
 Bank Statements
  </span>
</li>

<li>
  <Tick />
  <span className="ct3-data">
 Receipts and Invoices
  </span>
</li>

<li>
  <Tick />
  <span className="ct3-data">
 Payroll Records
  </span>
</li>

          </ul>

          {/* Button position like image (below list) */}

        </div>
      </div>
    </section>
  );
}