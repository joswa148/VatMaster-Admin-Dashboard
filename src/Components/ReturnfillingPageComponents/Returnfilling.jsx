import React from "react";
import "../Style/Deregistration.css";

const Returnfilling = () => {
  return (
    <section className="dr-page">
      {/* HERO */}
      <header className="dr-hero">
        <h1 className="dr-hero-title">VAT Return Filing</h1>
        <p className="dr-hero-text">
          Simplify your VAT Return Filing with VAT Masters Fast, Easy & Hassle
          Free Simplify your VAT Return Filing with VAT Masters Fast, Easy &
          Hassle Free
        </p>
      </header>

      <div className="container-fluid p-0">
        <div className="row g-4">
          {/* LEFT COLUMN */}
          <div className="col-12 col-lg-6">
            <section className="dr-left-top">
              <div>
                <h3>What is VAT Return Filing?</h3>
                <p>
                  VAT return filing is the process of submitting your VAT return
                  to the UAE Federal Tax Authority (FTA) for a specific tax
                  period. It includes reporting taxable sales, purchases, output
                  VAT collected, input VAT claimed, and paying any VAT due or
                  claiming a refund where applicable.
                </p>
              </div>

              <div className="dr-left-middle">
                <h3>
                  When do I need to file VAT returns in the United Arab Emirates?
                </h3>
                <p>VAT-registered businesses must file VAT returns in two cases:</p>
                <p>
                  At the end of each assigned tax period (monthly or quarterly),
                  the business must submit the VAT return by the due date
                  specified by the FTA.
                </p>
                <p>
                  Even if there are no taxable transactions in the period, the
                  business must still file a NIL VAT return to remain compliant.
                </p>
              </div>
            </section>

            <div className="dr-left-image">
              <img src="/assets/image/innerimg2.png" alt="Calculator" style={{height:'594px'}}  />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-12 col-lg-6" style={{ position: "relative" }}>
            <div className="dr-right-image">
              <img src="/assets/image/innerimg1.png" alt="Calculator" />
            </div>

            <section className="dr-right-main" style={{top:'44%'}} >
              <h3>When does the UAE FTA require VAT return filing?</h3>

              <p>
                The FTA requires all VAT-registered persons to file VAT returns
                for every tax period within the deadline, regardless of whether
                VAT is payable or refundable. Late filing or incorrect reporting
                may lead to penalties.
              </p>

              <p>
                VAT returns must reflect accurate output VAT on sales, input VAT
                on eligible expenses, reverse charge where applicable, and any
                adjustments as per UAE VAT rules.
              </p>

              <p className="buss">Regular Tax Period Compliance:</p>
              <p>
                VAT returns must be filed for each tax period (monthly or
                quarterly) by the due date, along with payment of VAT due if any.
              </p>

              <p className="revenue">Accurate Reporting & Reconciliations:</p>
              <p>
                Businesses should reconcile sales, purchases, and VAT reports
                with accounting records to ensure correct filing and avoid
                penalties or audits.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Returnfilling;
