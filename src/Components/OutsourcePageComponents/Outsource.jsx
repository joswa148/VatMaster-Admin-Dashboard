import React from "react";
import "../Style/Deregistration.css";

const Outsource = () => {
  return (
    <section className="dr-page">
      {/* HERO */}
      <header className="dr-hero">
        <h1 className="dr-hero-title">Outsource CFO</h1>
        <p className="dr-hero-text">
          Simplify your Outsource CFO services with VAT Masters Fast, Easy &
          Hassle Free Simplify your Outsource CFO services with VAT Masters
          Fast, Easy & Hassle Free
        </p>
      </header>

      <div className="container-fluid p-0">
        <div className="row g-4">
          {/* LEFT COLUMN */}
          <div className="col-12 col-lg-6">
            <section className="dr-left-top">
              <div>
                <h3>What is Outsource CFO?</h3>
                <p>
                  Outsource CFO is a service where an experienced finance
                  professional manages your company’s financial strategy,
                  reporting, and compliance without hiring a full-time CFO. It
                  helps businesses control costs, improve cash flow, and make
                  better financial decisions with expert guidance.
                </p>
              </div>

              <div className="dr-left-middle">
                <h3>
                  When should I choose an Outsource CFO service in the United Arab Emirates?
                </h3>
                <p>Businesses typically choose Outsource CFO services in two cases:</p>
                <p>
                  The business is growing and needs expert financial planning,
                  budgeting, and reporting, but does not require a full-time CFO
                  yet.
                </p>
                <p>
                  The business wants stronger financial controls, cash flow
                  management, investor-ready reporting, and ongoing compliance
                  support without increasing fixed payroll costs.
                </p>
              </div>
            </section>

            <div className="dr-left-image">
              <img src="/assets/image/innerimg2.png" alt="Calculator" style={{height:'647px'}} />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-12 col-lg-6" style={{ position: "relative" }}>
            <div className="dr-right-image">
              <img src="/assets/image/otc.png" alt="Calculator" />
            </div>

            <section className="dr-right-main" style={{top:'42%'}}>
              <h3>When is an Outsource CFO service required for a business?</h3>

              <p>
                An Outsource CFO is recommended when a business needs
                higher-level financial leadership to improve profitability,
                manage cash flow, and ensure accurate reporting. It is ideal for
                companies that want CFO expertise without the cost of a full-time
                executive.
              </p>

              <p>
                It also supports businesses that need better budgeting,
                forecasting, MIS reporting, and guidance for funding, expansion,
                or restructuring decisions.
              </p>

              <p className="buss">Business Needs Financial Leadership:</p>
              <p>
                When management needs strategic financial insights, KPI tracking,
                budgeting, and performance review to drive growth and control
                costs.
              </p>

              <p className="revenue">Improve Reporting & Compliance:</p>
              <p>
                When the business needs accurate monthly reports, stronger
                internal controls, audit support, and timely compliance handling
                for tax and regulatory requirements.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Outsource;
