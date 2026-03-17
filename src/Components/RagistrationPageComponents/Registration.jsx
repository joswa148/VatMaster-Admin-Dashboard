import React from "react";
import "../Style/Deregistration.css";

const Registration = () => {
  return (
    <section className="dr-page">
      {/* HERO */}
      <header className="dr-hero">
        <h1 className="dr-hero-title">VAT Registration</h1>
        <p className="dr-hero-text">
          Simplify your VAT Registration with VAT Masters Fast, Easy & Hassle
          Free Simplify your VAT Registration with VAT Masters Fast, Easy &
          Hassle Free
        </p>
      </header>

      <div className="container-fluid p-0">
        <div className="row g-4">
          {/* LEFT COLUMN */}
          <div className="col-12 col-lg-6">
            <section className="dr-left-top">
              <div>
                <h3>What is VAT Registration?</h3>
                <p>
                  VAT registration is the process of registering a business with
                  the UAE Federal Tax Authority (FTA) for Value Added Tax (VAT).
                  Once registered, the business receives a Tax Registration
                  Number (TRN) and becomes responsible for charging VAT on
                  taxable supplies and filing VAT returns as per the applicable
                  rules.
                </p>
              </div>

              <div className="dr-left-middle">
                <h3>When can I apply for VAT registration in the United Arab Emirates?</h3>
                <p>Businesses can apply for VAT registration in two cases:</p>
                <p>
                  The business expects its taxable supplies and imports to exceed
                  the mandatory registration threshold (AED 375,000) over the
                  next 30 days or has exceeded this threshold in the last 12
                  months.
                </p>
                <p>
                  The business may voluntarily register if its taxable supplies
                  and imports exceed the voluntary registration threshold (AED
                  187,500) in the last 12 months or are expected to exceed it in
                  the next 30 days.
                </p>
              </div>
            </section>

            <div className="dr-left-image">
              <img src="/assets/image/innerimg2.png" alt="Calculator" />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-12 col-lg-6" style={{ position: "relative" }}>
            <div className="dr-right-image">
              <img src="/assets/image/innerimg1.png" alt="Calculator" />
            </div>

            <section className="dr-right-main">
              <h3>When is VAT registration mandatory in the United Arab Emirates?</h3>

              <p>
                VAT registration becomes mandatory when a business’s taxable
                turnover exceeds the mandatory threshold (AED 375,000) over the
                last 12 months or is expected to exceed it within the next 30
                days. The business must register with the FTA and obtain a TRN.
              </p>

              <p>
                Businesses with taxable turnover above AED 187,500 may also
                choose voluntary registration to recover input VAT and improve
                compliance readiness.
              </p>

              <p className="buss">Business Exceeds Threshold:</p>
              <p>
                If the business’s taxable supplies and imports cross the
                mandatory registration threshold of AED 375,000, VAT
                registration is required.
              </p>

              <p className="revenue">Voluntary Registration Option:</p>
              <p>
                If the taxable turnover over the last 12 months is above AED
                187,500 but below AED 375,000, the business can voluntarily
                register for VAT and receive a TRN.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
