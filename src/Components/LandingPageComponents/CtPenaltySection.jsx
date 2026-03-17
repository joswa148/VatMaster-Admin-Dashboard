const offerBg = "/assets/image/Frame 1000006032.png"; 
const destww = "/assets/image/UAE_Dirham_Symboll.svg";     // offer card bg
import "../Style/Landingcss/CtPenaltySection.css";
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
            Who needs to complete corporate tax registration UAE?
          </h3>

          <ul className="pen-list">
            <li>
              <span className="pen-tickWrap">
                <Tick />
              </span>
              <span className="pen-data">
                UAE juridical persons (including Free Zone Persons) such as
                private or public joint stock companies or limited liability
                companies that are incorporated or otherwise established or
                recognised under the applicable legislation in the UAE
              </span>
            </li>

            <li>
              <span className="pen-tickWrap">
                <Tick />
              </span>
              <span className="pen-data">
                Non-UAE juridical persons that are incorporated outside the UAE
                but effectively managed and controlled in the UAE
              </span>
            </li>

            <li>
              <span className="pen-tickWrap">
                <Tick />
              </span>
              <span className="pen-data">
                Natural persons (i.e. individuals) who conduct a Business or
                Business Activity in the UAE as per a Cabinet Decision to be
                issued in accordance with Article 11(6); and
              </span>
            </li>

            <li>
              <span className="pen-tickWrap">
                <Tick />
              </span>
              <span className="pen-data">
                Non-Resident Persons that have a Permanent Establishment in the
                UAE or that earn UAE sourced income that is within the scope of
                Corporate Tax
              </span>
            </li>
          </ul>
        </div>

        {/* LEFT */}
        <div className="pen-left">
          <p className="pen-title">
            Avoid AED 10,000 penalty by 
            registering for Corporate Tax
            today!
          </p>

          <div
            className="pen-offer"
            style={{ backgroundImage: `url(${offerBg})` }}
          >
            <div className="pen-offerText">
            

              <h2 className="pen-sub">Corporate Tax Registration</h2>

              <div className="pen-priceRow">
                <span className="pen-starts">Starts</span>

              

              <span className="cert-new">
                                                  <img
                                                    className="cert-vm-mod"
                                                    src={destww}
                                                    alt="Dirham"
                                                  />
                                                <span>125 /-</span>  
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
