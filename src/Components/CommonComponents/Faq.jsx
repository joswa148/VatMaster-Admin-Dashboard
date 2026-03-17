import React, { useMemo, useState } from "react";

const Faq = () => {
  const faqs = useMemo(
    () => [
    {
        q: "What happens after VAT registration is approved?",
        a: "Once VAT registration is approved, the business will receive a Tax Registration Number (TRN). The TRN must be mentioned on all tax invoices, and the business must start charging VAT, maintaining records, and filing VAT returns as per FTA guidelines.",
      },
      {
        q: "Can freelancers and sole proprietors register for VAT in the UAE?",
        a: "Yes, freelancers and sole proprietors must register for VAT if their taxable supplies exceed the mandatory threshold. They are required to obtain a valid trade license and comply with VAT filing and reporting requirements once registered.",
      },
      {
        q: "Do free zone companies need VAT registration in the UAE?",
        a: "Free zone companies must register for VAT if they make taxable supplies within mainland UAE or exceed the VAT registration threshold. Being located in a free zone does not automatically exempt a business from VAT obligations.",
      },
      {
        q: "Is a bank account mandatory for VAT registration in the UAE?",
        a: "Yes, providing bank account details (IBAN) is mandatory during VAT registration, as the Federal Tax Authority uses this information for VAT refunds and official financial communications.",
      },
      {
        q: "Can VAT registration be transferred to another business?",
        a: "No, VAT registration and the Tax Registration Number (TRN) are issued to a specific legal entity and cannot be transferred. In cases of business restructuring, mergers, or ownership changes, a new VAT registration or amendment may be required.",
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