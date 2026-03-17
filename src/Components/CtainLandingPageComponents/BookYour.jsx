import React from "react";
import "../Style/Landingcss/BookYour.css";
import { useWhatsAppRouting } from "../../hooks/useWhatsAppRouting";

const CheckIcon = () => (
  <span className="by-check" aria-hidden="true">
    <svg viewBox="0 0 24 24" className="by-checkSvg">
      <circle cx="12" cy="12" r="9" className="by-checkCircle" />
      <path
        d="M8.6 12.3l2.2 2.2 4.9-5.2"
        className="by-checkTick"
        fill="none"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

const WhatsAppButton = ({ href }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="by-waBtn"
  >
    <span className="by-waIcon" aria-hidden="true">
      <svg viewBox="0 0 32 32" className="by-waSvg">
        <path
          fill="currentColor"
          d="M19.11 17.79c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.96 1.17-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.46.14-.6.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.64-.93-2.25-.24-.58-.49-.5-.68-.5h-.58c-.2 0-.52.08-.8.37-.28.3-1.05 1.02-1.05 2.49 0 1.47 1.08 2.9 1.23 3.1.15.2 2.12 3.23 5.13 4.53.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.28-.2-.58-.35zM16 3C8.82 3 3 8.67 3 15.67c0 2.78.93 5.35 2.5 7.43L4 29l5.97-1.55c1.95 1.05 4.2 1.65 6.03 1.65 7.18 0 13-5.67 13-12.67C29 8.67 23.18 3 16 3zm0 23.1c-1.67 0-3.62-.56-5.13-1.53l-.37-.23-3.54.92.94-3.38-.25-.36c-1.2-1.69-1.93-3.69-1.93-5.86C5.72 10.2 10.36 5.9 16 5.9s10.28 4.3 10.28 9.77S21.64 26.1 16 26.1z"
        />
      </svg>
    </span>
    WhatsApp us
  </a>
);

const BookYour = () => {
  const { whatsappUrl } = useWhatsAppRouting();
  return (
    <section className="by-wrap">
      <div className="by-container">
        <h2 className="by-title">
          Book Your Free Consultation with <br />
          <span className="by-accent">FTA Approved Consultant</span>
        </h2>

        <div className="by-card">
          <div className="by-grid">
            {/* LEFT */}
            <div className="by-col">
              <div className="by-pill">
                UAE corporate tax will be charged on business income at these
                rates
              </div>

              <ul className="by-list">
                <li className="by-item">
                  <CheckIcon />
                  <span>
                    A 0% corporate tax rate applies to taxable income up to AED
                    375,000
                  </span>
                </li>
                <li className="by-item">
                  <CheckIcon />
                  <span>
                    A 9% corporate tax rate applies to taxable income over AED
                    375,000
                  </span>
                </li>
                <li className="by-item">
                  <CheckIcon />
                  <span>
                    A 15% corporate tax rate applies to all multinational
                    corporations subject to OECD Base Erosion and Profit-Sharing
                    laws that belong within Pillar 2 of the BEPS 2.0 framework,
                    i.e. combined worldwide revenues in excess of AED 3.15
                    billion.
                  </span>
                </li>
              </ul>

              <div className="by-btnRow">
                <WhatsAppButton href={whatsappUrl} />
              </div>
            </div>

            {/* RIGHT */}
            <div className="by-col">
              <div className="by-pill">
                What documents are needed for Corporate Tax Registration UAE?
              </div>

              <ul className="by-list">
                <li className="by-item">
                  <CheckIcon />
                  <span>Trade license</span>
                </li>
                <li className="by-item">
                  <CheckIcon />
                  <span>MOA or AOA (If Sole establishment not required)</span>
                </li>
                <li className="by-item">
                  <CheckIcon />
                  <span>Passport copy of the signatory</span>
                </li>
                <li className="by-item">
                  <CheckIcon />
                  <span>Emirates ID of the signatory</span>
                </li>
                <li className="by-item">
                  <CheckIcon />
                  <span>Visa Copy of the Signatory (not necessary)</span>
                </li>
                <li className="by-item">
                  <CheckIcon />
                  <span>
                    Bank Details (Account no/IBAN/Name/Address) (not necessary)
                  </span>
                </li>
                <li className="by-item">
                  <CheckIcon />
                  <span>Mobile No</span>
                </li>
                <li className="by-item">
                  <CheckIcon />
                  <span>Email Id</span>
                </li>
                <li className="by-item">
                  <CheckIcon />
                  <span>Office Address with PO BOX</span>
                </li>
              </ul>

              <div className="by-btnRow">
                <WhatsAppButton href={whatsappUrl} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookYour;
