import React from "react";
const rightBg = "/assets/image/Group 1000005923.png";      // white card shape with wave
const offerBg = "/assets/image/Frame 1000006032.png"; 
const destww = "/assets/image/UAE_Dirham_Symboll.svg";     // offer card bg
import "../Style/Fillingcss/CtPenaltySection.css";
import { useWhatsAppRouting } from "../../hooks/useWhatsAppRouting";

const Tick = () => <span className="ct-tick">✓</span>;

export default function CtPenaltySection() {
  const { whatsappUrl } = useWhatsAppRouting();
  return (
     <section className="pen-wrap">
      <div className="pen-container">
    
    
        {/* RIGHT */}
        <div
          className="pen-right"
         
        >
          <h3 className="pen-rightTitle dsakdsa">
          Corporate Tax Filing Criteria
          </h3>

          <ul className="pen-list">
            <li>
              <span className="pen-tickWrap">
                <Tick />
              </span>
              <span className="pen-data">
                <div className="man">
Mandatory Corporate Tax Returns</div>
               Filing is required for all companies operating in the UAE
              </span>
            </li>

            <li>
              <span className="pen-tickWrap">
                <Tick />
              </span>
              
              <span className="pen-data">
                <div className="man">
Governing Body</div>
                The Federal Tax Authority (FTA) oversees tax compliance
              </span>
            </li>

            <li>
              <span className="pen-tickWrap">
                <Tick />
              </span>
              
              <span className="pen-data">
                <div className="man">
Tax on Taxable Income</div>
               Companies must pay taxes based on their taxable income as per UAE tax laws </span>
            </li>

            <li>
              <span className="pen-tickWrap">
                <Tick />
              </span>
             
              <span className="pen-data">
                <div className="man">

Tax Rate for Small Businesses</div>
               Businesses with income less than AED 375,000 are subject to a 0% tax rate.
              </span>
            </li>
          </ul>
        </div>

        {/* LEFT */}
        <div className="pen-left">
          <p className="pen-title">
           Affordable Price & Fast Service
          </p>

          <div
            className="pen-offer"
            style={{ backgroundImage: `url(${offerBg})` }}
          >
            <div className="pen-offerText">
            

              <h2 className="pen-sub">Corporate Tax Filling</h2>

              <div className="pen-priceRow">
                <span className="pen-starts">Starts</span>

              

              <span className="cert-new">
                                                  <img
                                                    className="cert-vm-mod"
                                                    src={destww}
                                                    alt="Dirham"
                                                  />
                                                <span>499 /-</span>  
                                                </span>
               
              </div>

              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="pen-wa">
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
