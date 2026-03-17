import React, { useMemo, useState } from "react";

const Faq = () => {
  const faqs = useMemo(
    () => [
{
        q: "What is VAT and how does it work in the UAE?",
        a: "Value Added Tax (VAT) is an indirect tax levied on the supply of most goods and services in the UAE at a standard rate of 5%. Businesses collect VAT from customers on behalf of the Federal Tax Authority (FTA) and periodically remit the tax collected after deducting allowable input VAT on purchases.",
      },
      {
        q: "Who needs to register for VAT in the UAE?",
        a: "Any business or individual whose taxable supplies and imports exceed AED 375,000 per annum must register for VAT. Voluntary registration is also allowed if annual supplies are above AED 187,500. Registration ensures you comply with UAE tax regulations and can reclaim input VAT where eligible.",
      },
      {
        q: "How long does it take to get VAT registered in the UAE?",
        a: "The Federal Tax Authority usually processes VAT registration within 10–20 business days from submission, provided all documents are complete and accurate. Delays may occur if additional information is requested by the authorities.",
      },
      {
        q: "Is VAT registration mandatory for new businesses in the UAE?",
        a: "VAT registration becomes mandatory for new businesses once their taxable turnover exceeds AED 375,000 within a 12-month period or is expected to exceed the threshold in the next 30 days. Until then, VAT registration is not compulsory, but eligible businesses may opt for voluntary registration.",
      },
      {
        q: "What are the penalties for not registering for VAT in the UAE?",
        a: "Failure to register for VAT within the prescribed time can result in penalties imposed by the Federal Tax Authority (FTA), including fines starting from AED 10,000, along with additional penalties for late filing or non-compliance. Timely registration helps avoid unnecessary fines and legal issues.",
      },
    ],
    []
  );

  const BRAND = "#243e42";
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <section className="faq-wrap" aria-label="FAQ">
      <style>{`
        :root{
          --faq-brand:${BRAND};
          --faq-brand-2: rgba(36,62,66,.10);
          --faq-border: rgba(36,62,66,.18);
          --faq-text: #0f172a;
          --faq-muted: rgba(15,23,42,.72);
          --faq-bg: #ffffff;
          --faq-shadow: 0 14px 40px rgba(2, 8, 23, .10);
          --faq-radius: 14px;
          --faq-ease: cubic-bezier(.2,.8,.2,1);
        }

        .faq-wrap{
          padding: clamp(18px, 3.5vw, 44px);
          padding-top:0px !important;
          background: #fff;
        }

        .faq-shell{
        max-width:1134px;
          margin: 0 auto;
        }

        .faq-title{
          margin: 0 0 14px 0;
          font-size:40px;
          font-weight: 800;
          letter-spacing: .2px;
          color: var(--faq-text);    
          text-align: center;
        }

        .faq-sub{
          margin: 0 0 22px 0;
          color: var(--faq-muted);
          font-size: clamp(14px, 1.4vw, 16px);
          line-height: 1.6;
          text-align: center;
        }

        .faq-card{
          background: var(--faq-bg);
          border: 1px solid var(--faq-border);
          border-radius: var(--faq-radius);
          box-shadow: var(--faq-shadow);
          overflow: hidden;
        }

        .faq-item{
          border-top: 1px solid rgba(36,62,66,.12);
        }
        .faq-item:first-child{
          border-top: 0;
        }

        .faq-btn{
          width: 100%;
          display: grid;
          grid-template-columns: 38px 1fr 28px;
          gap: 12px;
          align-items: center;
          padding: clamp(14px, 2vw, 18px) clamp(14px, 2.2vw, 20px);
          background: #fff;
          border: 0;
          cursor: pointer;
          text-align: left;
          color: var(--faq-text);
          transition: background .25s var(--faq-ease);
        }

        .faq-btn:hover{
          background: rgba(36,62,66,.05);
        }

        .faq-icon{
          width: 30px;
          height: 30px;
          border-radius: 10px;
          display: grid;
          place-items: center;
          background: var(--faq-brand-2);
          color: var(--faq-brand);
          font-weight: 900;
          font-size: 20px;
          line-height: 1;
          user-select: none;
          transition: transform .35s var(--faq-ease), background .25s var(--faq-ease);
        }

        .faq-q{
          font-size: clamp(14.5px, 1.55vw, 18px);
          font-weight: 700;
          letter-spacing: .1px;
          line-height: 1.35;
        }

        .faq-caret{
          width: 26px;
          height: 26px;
          border-radius: 10px;
          display: grid;
          place-items: center;
          color: var(--faq-brand);
          background: transparent;
          transition: transform .35s var(--faq-ease), background .25s var(--faq-ease);
        }

        /* Smooth open/close using grid rows */
        .faq-panel{
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows .45s var(--faq-ease);
          background: #fff;
        }

        .faq-panelInner{
          overflow: hidden;
        }

        .faq-ans{
          padding: 0 clamp(14px, 2.2vw, 20px) clamp(16px, 2.4vw, 22px) calc(clamp(14px, 2.2vw, 20px) + 50px);
          color: var(--faq-muted);
          font-size: clamp(13.5px, 1.35vw, 16px);
          line-height: 1.75;
          padding-top:22px;

        }

        .faq-item.is-open .faq-panel{
          grid-template-rows: 1fr;
        }

        .faq-item.is-open .faq-icon{
          background: var(--faq-brand);
          color: #fff;
          transform: rotate(180deg);
        }

        .faq-item.is-open .faq-caret{
          transform: rotate(180deg);
          background: rgba(36,62,66,.08);
        }

        /* Top row like your screenshot */
        .faq-item.is-open .faq-btn{
          background: var(--faq-brand);
          color: #fff;
        }
        .faq-item.is-open .faq-q{
          color: #fff;
        }
        .faq-item.is-open .faq-caret{
          color: #fff;
          background: rgba(255,255,255,.14);
        }
        .faq-item.is-open .faq-icon{
          background: rgba(255,255,255,.16);
          color: #fff;
        }

        /* Mobile tweaks */
        @media (max-width: 520px){
          .faq-btn{
            grid-template-columns: 36px 1fr 26px;
            gap: 10px;
          }
          .faq-ans{
            padding-left: calc(clamp(14px, 2.2vw, 20px) + 46px);
          }
        }

        /* Accessibility focus */
        .faq-btn:focus-visible{
          outline: 3px solid rgba(36,62,66,.35);
          outline-offset: 2px;
        }

      `}</style>

      <div className="faq-shell">
        <div className="faq-title">Frequently Asked Questions</div>
        {/* <p className="faq-sub">
          Find quick answers to common questions about VAT registration in the UAE.
        </p> */}

        <div className="faq-card" role="list">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            const panelId = `faq-panel-${idx}`;
            const btnId = `faq-btn-${idx}`;

            return (
              <div
                key={idx}
                className={`faq-item ${isOpen ? "is-open" : ""}`}
                role="listitem"
              >
                <button
                  id={btnId}
                  className="faq-btn"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(idx)}
                >
                  <span className="faq-icon" aria-hidden="true">
                    {isOpen ? "–" : "+"}
                  </span>

                  <span className="faq-q">{item.q}</span>

                  <span className="faq-caret" aria-hidden="true">
                    ▾
                  </span>
                </button>

                <div
                  id={panelId}
                  className="faq-panel"
                  role="region"
                  aria-labelledby={btnId}
                >
                  <div className="faq-panelInner">
                    <div className="faq-ans">{item.a}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;