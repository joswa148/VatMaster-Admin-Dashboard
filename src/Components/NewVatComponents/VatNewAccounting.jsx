// VatNewAccounting.jsx
import React from "react";
import "../Style/NewVatcss/VatNewAccountingPage.css";

const VatNewAccounting = () => {
  return (
    <>
      <section className="vna-page">
        {/* HERO */}
        <header className="vna-hero">
          <h1 className="vna-hero-title">Accounting and Bookkeeping Services</h1>
          <p className="vna-hero-text">
            Simplify your Accounting and Bookkeeping Services with VAT Masters
            Fast, Easy & Hassle Free
          </p>
        </header>

        <div className="container-fluid p-0">
          <div className="row g-4">
            {/* LEFT COLUMN */}
            <div className="col-12 col-lg-6">
              <section className="vna-left-card">
                <div>
                  <h3>What are Accounting and Bookkeeping Services?</h3>
                  <p>
                    Organizations can remain on the foundations provided by
                    their accounts and financial platforms. This is seen as
                    the lifeline of business that enables an organization to
                    sustain itself.
                  </p>
                  <p>
                    Financial accounting and outsourcing services help
                    businesses provide themselves by showing the
                    organization’s true financial position and supporting
                    the planning and decision-making process.
                  </p>
                  <p>
                    Financial companies in the UAE have shaped economic growth and positioned Dubai as a global hub.
                  </p>
                </div>
              </section>

              <div className="vna-left-media">
                <img
                  src="/assets/image/abt2.png"
                  alt="Calculator"
                  style={{ height: "708px" }}
                />
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="col-12 col-lg-6" style={{ position: "relative" }}>
              <div className="vna-right-media">
                <img src="/assets/image/abt.png" alt="Calculator" />
              </div>

              <section className="vna-right-card">
                <h3>Features</h3>

                <p className="vna-feature-buss">
                  Increase the credibility of the company:
                </p>
                <p>
                  Accounting records all business transactions and helps reduce the risk of fraud.
                </p>

                <p className="vna-feature-label">Better credit management:</p>
                <p>
                  Maintaining accounting books strengthens credit
                  management and builds trust with stakeholders.
                </p>

                <p className="vna-feature-label">Ease of loan approval:</p>
                <p>
                  Improved accounting book management makes loan approvals
                  easier and facilitates auditing processes.
                </p>

                <p className="vna-feature-label">
                  Shows the financial status of the company:
                </p>
                <p>
                  Accounting books provide a financial indication of the
                  overall health of the company.
                </p>

                <p className="vna-feature-label">
                  Helps to win the mass market:
                </p>
                <p>
                  Having reports ready helps understand investor
                  expectations clearly.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VatNewAccounting;
