import React from "react";
const digram = "/assets/image/UAE_Dirham_Symboll.svg";
import "../Style/Book/CtPenaltySectionNew.css";
import { useWhatsAppRouting } from "../../hooks/useWhatsAppRouting";

const Tick = () => <span className="ct-tick">✓</span>;

export default function CtPenaltySectionNew() {
  const { whatsappUrl } = useWhatsAppRouting();
  return (
    <section className="ct-wrap">
      <div className="ct-container">

       

        {/* RIGHT */}
        <div
          className="ct-right" >
          <h2 className="ct-rightTitle">
           Reason to hire a Tax Consultant
          </h2>

          <ul className="ct-list">
            <li>
              <div className="ct-listTick">
                <Tick />
              </div>
              <div className="ct-listContent">
               
                <p className="ct-data">
                Expert advice
                 </p>
              </div>
            </li>

             <li>
              <div className="ct-listTick">
                <Tick />
              </div>
              <div className="ct-listContent">
               
                <p className="ct-data">
                Provide Tax knowledge
                 </p>
              </div>
            </li>

             <li>
              <div className="ct-listTick">
                <Tick />
              </div>
              <div className="ct-listContent">
               
                <p className="ct-data">
               Maintain proper records
                 </p>
              </div>
            </li>

             <li>
              <div className="ct-listTick">
                <Tick />
              </div>
              <div className="ct-listContent">
               
                <p className="ct-data">
               Keep the books aligned with law
                 </p>
              </div>
            </li>

             <li>
              <div className="ct-listTick">
                <Tick />
              </div>
              <div className="ct-listContent">
               
                <p className="ct-data">
                Help with Tax returns to avoid penalties
                 </p>
              </div>
            </li>

             <li>
              <div className="ct-listTick">
                <Tick />
              </div>
              <div className="ct-listContent">
               
                <p className="ct-data">
               Deal with foreign currency transactions
                 </p>
              </div>
            </li>


             <li>
              <div className="ct-listTick">
                <Tick />
              </div>
              <div className="ct-listContent">
               
                <p className="ct-data">
               Prepare financial statements
                 </p>
              </div>
            </li>


            {/* <li>
              <div className="ct-listTick">
                <Tick />
              </div>
              <div className="ct-listContent">
                <p className="ct-listTitle ct-offerText">
                 Mandatory VAT Registration
                </p>
                <p className="ct-data">
                  In the past 12 months, the value of supplies/taxable expenses exceeded AED 375,000 & it is expected to exceed 30 days in the current fiscal year.
                </p>
              </div>
            </li> */}
          </ul>
        </div>


         {/* LEFT */}
        <div className="ct-left">
          <p className="ct-title">
            Affordable Price & Fast Service
          </p>

          <div
            className="ct-offer"
>
            <div className="ct-offerText ct-offerText-1">

              <h2 className="ct-sub">Accounting and Bookkeeping</h2>

              <div className="ct-priceRow">
                <div className="ct-starts">Starts  <img src={digram} alt="VAT Registration" className="digram" /> <span className="sjae">499/-</span> </div>

                {/* <span className="ct-old">
                  <span>499</span>
                </span> */}

                {/* <span className="ct-new">99</span>
                <span className="ct-only">/-</span> */}
              </div>

              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="ct-wa">
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