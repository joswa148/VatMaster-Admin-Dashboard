import React from "react";
import "../Style/Deregistration.css";

const Accounting = () => {
  return (
    <section className="dr-page">
      {/* HERO */}
      <header className="dr-hero">
        <h1 className="dr-hero-title">Accounting and Bookkeeping Services</h1>
        <p className="dr-hero-text">
          Simplify your Accounting and Bookkeeping Services with VAT Masters
          Fast, Easy & Hassle Free Simplify your Accounting and Bookkeeping
          Services with VAT Masters Fast, Easy & Hassle Free
        </p>
      </header>

      <div className="container-fluid p-0">
        <div className="row g-4">
          {/* LEFT COLUMN */}
          <div className="col-12 col-lg-6">
            <section className="dr-left-top">
              <div>
                <h3>What are Accounting and Bookkeeping Services?</h3>
                <p>
                  Accounting and bookkeeping services involve recording,
                  classifying, and maintaining accurate financial transactions
                  of a business. These services ensure proper financial records,
                  timely reporting, and compliance with accounting standards and
                  regulatory requirements.
                </p>
              </div>

              <div className="dr-left-middle">
                <h3>
                  When should a business use Accounting and Bookkeeping Services
                  in the United Arab Emirates?
                </h3>
                <p>Businesses typically require these services in two cases:</p>
                <p>
                  When a business needs systematic recording of daily financial
                  transactions, invoicing, expense tracking, and bank
                  reconciliations to maintain accurate books of accounts.
                </p>
                <p>
                  When management requires reliable financial statements,
                  monthly reports, and compliance-ready records for VAT,
                  Corporate Tax, audits, or business decision-making.
                </p>
              </div>
            </section>

            <div className="dr-left-image">
              <img src="/assets/image/innerimg2.png" alt="Calculator"  style={{height:'521px'}}/>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-12 col-lg-6" style={{ position: "relative" }}>
            <div className="dr-right-image">
              <img src="/assets/image/innerimg1.png" alt="Calculator"/>
            </div>

            <section className="dr-right-main" style={{top:'41.8%'}}>
              <h3>
                When are Accounting and Bookkeeping Services essential for a
                business?
              </h3>

              <p>
                Accounting and bookkeeping services become essential when a
                business needs accurate financial visibility, compliance with
                UAE regulations, and structured financial reporting. These
                services help in monitoring performance and supporting informed
                business decisions.
              </p>

              <p>
                They also ensure timely preparation of financial statements,
                VAT returns, and audit-ready records while reducing errors and
                compliance risks.
              </p>

              <p className="buss">Business Financial Record Management:</p>
              <p>
                When a business needs proper maintenance of ledgers, journals,
                bank reconciliations, and expense tracking on a regular basis.
              </p>

              <p className="revenue">Compliance & Reporting Support:</p>
              <p>
                When accurate accounting records are required for VAT filings,
                Corporate Tax compliance, audits, and statutory reporting in
                the UAE.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accounting;
