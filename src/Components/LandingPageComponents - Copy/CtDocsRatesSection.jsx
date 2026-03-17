import React from "react";
const bg = "/assets/image/Subtract 4.png";
const leftBg = "/assets/image/Group 1000005923.png";
const rightBg = "/assets/image/Group 1000005928.png";

import "../Style/Landingcss/CtDocsRatesSectionNew.css";
import { useWhatsAppRouting } from "../../hooks/useWhatsAppRouting";

const Tick = () => <span className="ctdr-tickWrap">✓</span>;

export default function CtDocsRatesSectionNew() {
  const { whatsappUrl } = useWhatsAppRouting();
  return (
    <section className="ctdr-wrap">
      <div className="ctdr-shell">
        {/* background image */}
        <div className="ctdr-bg" style={{ backgroundImage: `url(${bg})` }} />
        {/* subtle grid overlay */}
        

        {/* LEFT SIDE */}
        <div className="ctdr-left">
          <p className="ctdr-heroTitle">
            Book your Free <br />
            Consultation with FTA <br />
            Approved Consultant
          </p>

          <div
            className="ctdr-card ctdr-cardLeft"
            style={{ backgroundImage: `url(${leftBg})` }}
          >
            <div className="ctdr-cardTop">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="ctdr-waBtn">
                <i className="bi bi-whatsapp" /> WhatsApp us
              </a>
            </div>

            <p className="ctdr-cardTitle">
              UAE corporate tax will be <br />
              charged on business income <br />
              at these rates
            </p>

            <ul className="ctdr-list">
              <li>
                <Tick />
                <span className="ctdr-text">
                  A 0% corporate tax rate applies to taxable income up to AED
                  375,000
                </span>
              </li>
              <li>
                <Tick />
                <span className="ctdr-text">
                  A 9% corporate tax rate applies to taxable income over AED
                  375,000
                </span>
              </li>
              <li>
                <Tick />
                <span className="ctdr-text">
                  A 15% corporate tax rate applies to all multinational
                  corporations subject to OECD Base Erosion and Profit sharing
                  laws that belong within pillar 2 of the BEPS 2.0 framework,
                  i.e. combined worldwide revenues in excess of AED 3.15
                  billion.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="ctdr-right">
          <div
            className="ctdr-card ctdr-cardRight"
            style={{ backgroundImage: `url(${rightBg})` }}
          >
            <div className="ctdr-cardTop">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="ctdr-waBtn">
                <i className="bi bi-whatsapp" /> WhatsApp us
              </a>
            </div>

            <h2 className="ctdr-cardTitle">
              What documents are needed for Corporate Tax Registration UAE?
            </h2>

            <ul className="ctdr-list">
              <li>
                <Tick />
                <span className="ctdr-text">
                  Copy of Trade License (must not be expired).
                </span>
              </li>
              <li>
                <Tick />
                <span className="ctdr-text">
                  Passport copy of the owner/partners who own the license (must
                  not be expired).
                </span>
              </li>
              <li>
                <Tick />
                <span className="ctdr-text">
                  Emirates ID of the owner/partners who owns the license (must
                  not be expired).
                </span>
              </li>
              <li>
                <Tick />
                <span className="ctdr-text">
                  Memorandum of Association (MOA) – Or – Power of Attorney (POA).
                </span>
              </li>
              <li>
                <Tick />
                <span className="ctdr-text">
                  Concerned person’s contact details (Mobile Number and E-mail).
                </span>
              </li>
              <li>
                <Tick />
                <span className="ctdr-text">
                  Contact details of the company (complete address and P.O.
                  Box).
                </span>
              </li>
              <li>
                <Tick />
                <span className="ctdr-text">Corporate Tax Period.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
