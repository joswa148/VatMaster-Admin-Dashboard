// VatNewDeregistration.jsx
import React from "react";
import "../Style/NewVatcss/VatNewDeregistrationPage.css";

const VatNewDeregistration = () => {
  return (
    <>
      <section className="vnd-page">
        {/* HERO */}
        <header className="vnd-hero">
          <h1 className="vnd-hero-title">VAT De-Registration</h1>
          <p className="vnd-hero-text">
            Simplify your Corporate TAX Registration with VAT Masters Fast, Easy &
            Hassle Free
          </p>
        </header>

        <div className="container-fluid p-0">
          <div className="row g-4">
            {/* LEFT COLUMN */}
            <div className="col-12 col-lg-6">
              <section className="vnd-left-card">
                <div>
                  <h3>What is VAT De-Registration?</h3>
                  <p>
                    VAT deregistration is a provision for registered taxable persons to cancel
                    VAT registration. This means invalidation of registration and VAT number of
                    taxable person. Tax deregistration can be done by an FTA if a person
                    registered with VAT applies or if the conditions for deregistration are met.
                  </p>
                </div>

                <div className="vnd-left-subcard">
                  <h3>
                    When can I apply for VAT deregistration in the UAE?
                  </h3>
                  <p>
                    VAT registered persons can apply for tax deregistration in two cases:
                  </p>
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

              <div className="vnd-left-media">
                <img src="/assets/image/vtd2.png" alt="Calculator" />
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="col-12 col-lg-6" style={{ position: "relative" }}>
              <div className="vnd-right-media">
                <img src="/assets/image/vtd.png" alt="Calculator" />
              </div>

              <section className="vnd-right-card">
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
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VatNewDeregistration;
