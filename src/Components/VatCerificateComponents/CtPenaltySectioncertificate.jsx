import React from "react";
import "../Style/VatCertificate/CtPenaltySectioncertificate.css";
import { useWhatsAppRouting } from "../../hooks/useWhatsAppRouting";
const digram = "/assets/image/UAE_Dirham_Symboll.svg";

const Tick = () => <span className="cert-ct-tick">✓</span>;

export default function CtPenaltySectioncertificate() {
  const { whatsappUrl } = useWhatsAppRouting();
  return (
    <section className="cert-ct-wrap">
      <div className="cert-ct-container">

         {/* RIGHT */}
        <div
          className="cert-ct-right"
          // style={{ backgroundImage: `url(${rightBg})` }}
        >
          <h2 className="cert-ct-rightTitle">
         Types of VAT Certificate UAE
          </h2>

          <ul className="cert-ct-list">
            <li>
              <div className="cert-ct-listTick">
                <Tick />
              </div>
              <div className="cert-ct-listContent">
                <p className="cert-ct-listTitle cert-ct-offerText">
                  Voluntary VAT Registration
                </p>
                <p className="cert-ct-data">
                  In the past 12 months, the value of supplies/taxable expenses
                  exceeded AED 187,500 & it is expected to exceed 30 days in the
                  current fiscal year.
                </p>
              </div>
            </li>

            <li>
              <div className="cert-ct-listTick">
                <Tick />
              </div>
              <div className="cert-ct-listContent">
                <p className="cert-ct-listTitle cert-ct-offerText">
                  Mandatory VAT Registration
                </p>
                <p className="cert-ct-data">
                  In the past 12 months, the value of supplies/taxable expenses
                  exceeded AED 375,000 & it is expected to exceed 30 days in the
                  current fiscal year.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* LEFT */}
        <div className="cert-ct-left">
          <p className="cert-ct-title">
            Affordable Price & Fast Service
          </p>

          <div className="cert-ct-offer">
            <div className="cert-ct-offerText-1">

              <h2 className="cert-ct-sub">VAT Certificate </h2>

              <div className="cert-ct-priceRow">
                <div className="cert-ct-starts">
                  Starts
                  <img
                    src={digram}
                    alt="VAT Registration"
                    className="cert-digram"
                  />
                  <span className="cert-sjae">125/-</span>
                </div>

                {/* old / new price commented as-is */}
              </div>

              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="cert-ct-wa">
                <i className="bi bi-whatsapp" />
                WhatsApp us
              </a>
            </div>
          </div>
        </div>

       

      </div>
    </section>
  );
}
