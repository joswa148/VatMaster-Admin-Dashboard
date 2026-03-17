import React from "react";
const bg = "/assets/image/Subtract 4.png";
const rightBg = "/assets/image/Group 1000005928.png";
const landgroup = "/assets/image/langroup.png";

import { useWhatsAppRouting } from "../../hooks/useWhatsAppRouting";
import "../Style/VatCertificate/CtDocsRatescertificate.css";

const Tick = () => <span className="cert-ct3-tick">✓</span>;

export default function CtDocsRatescertificate() {
  const { whatsappUrl } = useWhatsAppRouting();
  return (
    <section className="cert-ct3-wrap">
      <div className="cert-ct3-shell">
        {/* background image */}
        <div
          className="cert-ct3-bg"
          style={{ backgroundImage: `url(${bg})` }}
        />
        {/* light grid overlay (optional) */}
        <div className="cert-ct3-grid" />

        {/* LEFT SIDE */}
        <div className="cert-ct3-left">
          <p className="cert-ct3-heroTitle">
            Book Your Free Consultation with 
            FTA Approved Consultant
          </p>

          {/* Caption like image */}
          <h3 className="cert-ct3-cardLefttitle">
           Get your VAT Registration Certificate
          </h3>

          <img className="cert-bc-img" src={landgroup} alt="Consultant" />
        </div>

        {/* RIGHT SIDE */}
        <div
          className="cert-ct3-card cert-ct3-cardRight"
          style={{ backgroundImage: `url(${rightBg})` }}
        >
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="cert-ct-wa">
            <i className="bi bi-whatsapp"></i> WhatsApp us
          </a>

          <h3 className="cert-ct3-cardTitle">
           Documents required for VAT Registration Certificate
          </h3>

          <ul className="cert-ct3-list">
            <li>
              <Tick />
              <span className="cert-ct3-data">Trade License</span>
            </li>

            <li>
              <Tick />
              <span className="cert-ct3-data">
                MOA/AOA (Not needed for Sole Est.)
              </span>
            </li>

            <li>
              <Tick />
              <span className="cert-ct3-data">Passport Copy of the Signatory</span>
            </li>

            <li>
              <Tick />
              <span className="cert-ct3-data">Emirates ID of the Signatory</span>
            </li>

            <li>
              <Tick />
              <span className="cert-ct3-data">Visa Copy of Signatory (Optional)</span>
            </li>

            <li>
              <Tick />
              <span className="cert-ct3-data">Invoices</span>
            </li>

            <li>
              <Tick />
              <span className="cert-ct3-data">Bank Details</span>
            </li>

            <li>
              <Tick />
              <span className="cert-ct3-data">Email ID</span>
            </li>

            <li>
              <Tick />
              <span className="cert-ct3-data">Mobile Number</span>
            </li>

            <li>
              <Tick />
              <span className="cert-ct3-data">Office Address with PO Box</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
