// Deregistration.jsx
import React from "react";
import "../Style/Deregistration.css";

const Deregistration = () => {
  return (
    <section className="vdg-page">
      {/* HERO */}
      <header className="vdg-hero">
        <h1 className="vdg-hero-title">VAT De-Registration</h1>
        <p className="vdg-hero-text">
          Simplify your Corporate TAX Registration with VAT Masters Fast, Easy &
          Hassle Free Simplify your Corporate TAX Registration with VAT Masters
          Fast, Easy & Hassle Free
        </p>
      </header>

      <div className="container-fluid p-0">
        <div className="row g-4">
          {/* LEFT COLUMN */}
          <div className="col-12 col-lg-6">
            <section className="vdg-left-card">
              <div>
                <h3>What is VAT De-Registration?</h3>
                <p>
                  VAT deregistration is a provision for registered taxable persons to cancel VAT
                  registration. This means invalidation of registration and VAT number of taxable
                  person. Tax deregistration can be done by an FTA if a person registered with
                  VAT applies or if the conditions for deregistration are met.
                </p>
              </div>

              <div className="vdg-left-subcard">
                <h3>
                  When can I apply for VAT deregistration in the United Arab Emirates?
                </h3>
                <p>VAT registered persons can apply for tax deregistration in two cases:</p>
                <p>
                  The person has stopped the taxable supply and does not expect to provide the
                  taxable supply over the next 12 months.or
                </p>
                <p>
                  Individual taxable objects or taxable expenses incurred over 12 consecutive
                  months are below the self-registration threshold (AED 187,500) and are not
                  expected to exceed this threshold within the next 30 days.
                </p>
              </div>
            </section>

            <div className="vdg-left-media">
              <img src="/assets/image/innerimg2.png" alt="Calculator" />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-12 col-lg-6" style={{ position: "relative" }}>
            <div className="vdg-right-media">
              <img src="/assets/image/innerimg1.png" alt="Calculator" />
            </div>

            <section className="vdg-right-card">
              <h3>When can an FTA in the United Arab Emirates be deregistered?</h3>

              <p>
                The FTA may cancel an individual's registration if the registrant is found to
                meet either of the above two deregistration conditions. This is called
                compulsory tax deregistration.
              </p>

              <p>
                Individual taxable objects or taxable expenses incurred over 12 consecutive
                months are below the self-registration threshold (AED 187,500) and are not
                expected to exceed this threshold within the next 30 days.
              </p>

              <p className="vdg-right-label-buss">Business Ceased Operations:</p>
              <p>
                The business has stopped making taxable supplies and does not intend to
                continue in the future.
              </p>

              <p className="vdg-right-label-revenue">Revenue Falls Below Threshold:</p>
              <p>
                If the taxable turnover over the last 12 months is below the mandatory
                registration threshold of AED 375,000 and the business does not expect it to
                exceed this limit in the next 30 days.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deregistration;
