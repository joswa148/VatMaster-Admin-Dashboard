import { usePricing } from "../../hooks/usePricing";

const pricingHeaderShape = "/assets/image/topBar.png";
const pricingCardShape = "/assets/image/cardBg.png";
import "../Style/Homecss/Homeprice.css";
const UaeDirham = "/assets/image/UAE_Dirham_Symboll.svg";

const CheckIcon = () => (
  <span className="pc-check">
    <svg viewBox="0 0 24 24" className="pc-checkSvg">
      <path
        d="M20 6L9 17l-5-5"
        fill="none"
        stroke="#0B2F35"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

const ArrowCircle = () => (
  <span className="pc-arrowCircle">
    <svg viewBox="0 0 24 24" className="pc-arrowSvg">
      <path
        d="M7 17L17 7M9 7h8v8"
        fill="none"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

export default function HomePrice() {
  const { getPrice } = usePricing();

  return (
    <section className="pc-section bg-white" id="pricing">
      <div className="pc-shell mx-auto">
        {/* HEADER — Desktop only */}
        <div className="pc-headerWrap  d-lg-block">
          <img
            src={pricingHeaderShape}
            alt=""
            className="pc-headerImg"
            draggable="false"
          />

          <p className="pc-headerText">
            <span className="pc-headerSpan">
              We offer Fair Pricing on <br />
            <span className="primarss">All Services</span> 
            </span>
          </p>
        </div>

        {/* Pricing cards grid */}
        <div className="row g-3 g-lg-5">
          {/* CARD 1: VAT Registration */}
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="w-100">
              <div className="pc-cardFrame">
                <img
                  src={pricingCardShape}
                  alt=""
                  className="pc-cardBg h-sasfour"
                  draggable="false"
                />

                <div className="pc-cardInner">
                  <div className="pc-content">
                    <h3 className="pc-title pc-titleSpan">
                      VAT Registration
                    </h3>

                    <div className="pc-pricePill">
                      <span className="pc-priceText">Starts <img src={UaeDirham} alt="" className="priceaed" /><span className="price">{getPrice("vat-reg-single", "125")}</span></span>
                    </div>

                    <ul className="pc-bullets">
                      <li className="pc-bulletItem">
                        <span className="pc-bulletIcon">
                          <CheckIcon />
                        </span>
                        <span className="pc-bulletText">
                          1 Single Registration for 1 firm/company
                        </span>
                      </li>
                      <li className="pc-bulletItem">
                        <span className="pc-bulletIcon">
                          <CheckIcon />
                        </span>
                        <span className="pc-bulletText">
                          Free VAT Consultancy
                        </span>
                      </li>
                      <li className="pc-bulletItem">
                        <span className="pc-bulletIcon">
                          <CheckIcon />
                        </span>
                        <span className="pc-bulletText">
                          Free CA Consultancy
                        </span>
                      </li>

                      <li className="pc-bulletItem">
                        <span className="pc-bulletIcon">
                          <CheckIcon />
                        </span>
                        <span className="pc-bulletText">
                          Free VAT Implementation Consultancy
                        </span>
                      </li>
                    </ul>

                    <div className="pc-note">
                      <div className="pc-noteLine">Free Expert </div>
                      <div className="pc-noteLine">Advice</div>
                    </div>
                  </div>
                    <a href="#" className="pc-ctaBtn djd">
                  <div className="pc-ctaBtnhh " type="button">
                    Purchase <ArrowCircle />
                  </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2: Corporate Tax Registration */}
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="w-100">
              <div className="pc-cardFrame">
                <img
                  src={pricingCardShape}
                  alt=""
                  className="pc-cardBg"
                  draggable="false"
                />

                <div className="pc-cardInner">
                  <div className="pc-content">
                    <h3 className="pc-title pc-titleSpan">
                    Corporate Tax Registration
                    </h3>

                    <div className="pc-pricePill">
                      <span className="pc-priceText">Starts <img src={UaeDirham} alt="" className="priceaed" /><span className="price">{getPrice("corporate-tax-reg", "125")}</span></span>
                    </div>

                    <ul className="pc-bullets">
                      <li className="pc-bulletItem">
                        <span className="pc-bulletIcon">
                          <CheckIcon />
                        </span>
                        <span className="pc-bulletText">
                        30 minutes Live session
                        </span>
                      </li>
                      <li className="pc-bulletItem">
                        <span className="pc-bulletIcon">
                          <CheckIcon />
                        </span>
                        <span className="pc-bulletText">
                          Free VAT Consultancy
                        </span>
                      </li>
                      <li className="pc-bulletItem">
                        <span className="pc-bulletIcon">
                          <CheckIcon />
                        </span>
                        <span className="pc-bulletText">
                          Free CA Consultancy
                        </span>
                      </li>
                    </ul>

                    <div className="pc-note pc-note-unorder pc-note-unorder-1">
                      <div className="pc-noteLine">Complimentary</div>
                      <div className="pc-noteLine">Expert Advice</div>
                    </div>
                  </div>
                    <a href="#" className="pc-ctaBtn">
                  <div className="pc-ctaBtnhh" type="button">
                    Purchase <ArrowCircle />
                  </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 3: VAT Return Filing */}
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="w-100">
              <div className="pc-cardFrame dsdssadas">
                <img
                  src={pricingCardShape}
                  alt=""
                  className="pc-cardBg h-sasfour"
                  draggable="false"
                />

                <div className="pc-cardInner">
                  <div className="pc-content">
                    <p className="pc-title pc-titleSpan">
                    VAT Return Filing
                    </p>

                    <div className="pc-pricePill">
                      <span className="pc-priceText">Starts <img src={UaeDirham} alt="" className="priceaed" /><span className="price">{getPrice("vat-return-micro", "499")}</span></span>
                    </div>

                    <ul className="pc-bullets">
                      
                      <li className="pc-bulletItem">
                        <span className="pc-bulletIcon">
                          <CheckIcon />
                        </span>
                        <span className="pc-bulletText">
                        VAT Filing & Reporting
                        </span>
                      </li>
                      <li className="pc-bulletItem">
                        <span className="pc-bulletIcon">
                          <CheckIcon />
                        </span>
                        <span className="pc-bulletText">
                          VAT Adjustment , Amendment & Refund
                        </span>
                      </li>

                      <li className="pc-bulletItem">
                        <span className="pc-bulletIcon">
                          <CheckIcon />
                        </span>
                        <span className="pc-bulletText">
                          Dedicated VAT Expert
                        </span>
                      </li>

                      <li className="pc-bulletItem">
                        <span className="pc-bulletIcon">
                          <CheckIcon />
                        </span>
                        <span className="pc-bulletText">
                        30 minutes Live session
                        </span>
                      </li>
                    </ul>

                    <div className="pc-note">
                      <div className="pc-noteLine">Free Professional  </div>
                      <div className="pc-noteLine">Guidance</div>
                    </div>
                  </div>
                    <a href="#" className="pc-ctaBtn djd">
                  <div className="pc-ctaBtnhh" type="button">
                    Purchase <ArrowCircle />
                  </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 4: Accounting & Bookkeeping */}
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="w-100">
              <div className="pc-cardFrame">
                <img
                  src={pricingCardShape}
                  alt=""
                  className="pc-cardBg h-sasfour"
                  draggable="false"
                />

                <div className="pc-cardInner">
                  <div className="pc-content">
                    <p className="pc-title pc-titleSpan">
                      Accounting & Bookkeeping
                    </p>

                    <div className="pc-pricePill">
                      <span className="pc-priceText">Starts <img src={UaeDirham} alt="" className="priceaed" /><span className="price">{getPrice("accounting-micro", "499")}</span></span>
                    </div>

                    <ul className="pc-bullets">
                      <li className="pc-bulletItem">
                        <span className="pc-bulletIcon">
                          <CheckIcon />
                        </span>
                        <span className="pc-bulletText">
                          Transactions &lt; 100
                        </span>
                      </li>
                      <li className="pc-bulletItem">
                        <span className="pc-bulletIcon">
                          <CheckIcon />
                        </span>
                        <span className="pc-bulletText">
                        1 Hr Live session
                        </span>
                      </li>
                      <li className="pc-bulletItem">
                        <span className="pc-bulletIcon">
                          <CheckIcon />
                        </span>
                        <span className="pc-bulletText">
                        Dedicated Accounts Manager
                        </span>
                      </li>

                      <li className="pc-bulletItem">
                        <span className="pc-bulletIcon">
                          <CheckIcon />
                        </span>
                        <span className="pc-bulletText">
                          Full Accounting & Bank Reconciliation
                        </span>
                      </li>
                    </ul>

                    <div className="pc-note">
                      <div className="pc-noteLine">Expert Advice </div>
                      <div className="pc-noteLine">at No Cost</div>
                    </div>
                  </div>
                    <a href="#" className="pc-ctaBtn djd">
                  <div className="pc-ctaBtnhh" type="button">
                    Purchase <ArrowCircle />
                  </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 5: Outsource CFO */}
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="w-100">
              <div className="pc-cardFrame">
                <img
                  src={pricingCardShape}
                  alt=""
                  className="pc-cardBg "
                  draggable="false"
                />

                <div className="pc-cardInner">
                  <div className="pc-content">
                    <p className="pc-title pc-titleSpan">
                    Outsource CFO
                    </p>

                    <div className="pc-pricePill">
                      <span className="pc-priceText">Starts <img src={UaeDirham} alt="" className="priceaed" /><span className="price">{getPrice("outsource-cfo", "499")}</span></span>
                    </div>

                    <ul className="pc-bullets">
                      <li className="pc-bulletItem">
                        <span className="pc-bulletIcon">
                          <CheckIcon />
                        </span>
                        <span className="pc-bulletText">
                          1 Visit Monthly
                        </span>
                      </li>
                      <li className="pc-bulletItem">
                        <span className="pc-bulletIcon">
                          <CheckIcon />
                        </span>
                        <span className="pc-bulletText">
                          Free Accounting , VAT & CA Consultancy
                        </span>
                      </li>
                      <li className="pc-bulletItem">
                        <span className="pc-bulletIcon">
                          <CheckIcon />
                        </span>
                        <span className="pc-bulletText">
                          Financial Advisory & Accounting finalization
                        </span>
                      </li>

                    
                    </ul>

                    <div className="pc-note pc-note-unorder">
                      <div className="pc-noteLine">Free Consultation </div>
                      <div className="pc-noteLine">by Experts</div>
                    </div>
                  </div>

                    <a href="#" className="pc-ctaBtn">
                  <div className="pc-ctaBtnhh" type="button">
                    Purchase <ArrowCircle />
                  </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 6: VAT De-Registration */}
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="w-100">
              <div className="pc-cardFrame dsdssadas">
                <img
                  src={pricingCardShape}
                  alt=""
                  className="pc-cardBg"
                  draggable="false"
                />

                <div className="pc-cardInner">
                  <div className="pc-content">
                    <p className="pc-title pc-titleSpan">
                    VAT De-Registration
                    </p>

                    <div className="pc-pricePill">
                      <span className="pc-priceText">Starts <img src={UaeDirham} alt="" className="priceaed" /><span className="price">{getPrice("dereg-individual", "499")}</span></span>
                    </div>

                    <ul className="pc-bullets">
                      <li className="pc-bulletItem">
                        <span className="pc-bulletIcon">
                          <CheckIcon />
                        </span>
                        <span className="pc-bulletText">
                          1 Single De-Registration for 1 firm/company
                        </span>
                      </li>
                      <li className="pc-bulletItem">
                        <span className="pc-bulletIcon">
                          <CheckIcon />
                        </span>
                        <span className="pc-bulletText">
                          Free VAT Consultancy
                        </span>
                      </li>
                      <li className="pc-bulletItem">
                        <span className="pc-bulletIcon">
                          <CheckIcon />
                        </span>
                        <span className="pc-bulletText">
                          Free CA Consultancy
                        </span>
                      </li>

                     
                    </ul>

                    <div className="pc-note pc-note-unorder">
                      <div className="pc-noteLine">No-Cost Expert </div>
                      <div className="pc-noteLine">Advisory</div>
                    </div>
                  </div>

                    <a href="#" className="pc-ctaBtn">
                  <div className="pc-ctaBtnhh" type="button">
                    Purchase <ArrowCircle />
                  </div>
                  </a>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
