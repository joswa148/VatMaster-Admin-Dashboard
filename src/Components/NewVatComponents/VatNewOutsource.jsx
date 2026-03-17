// VatNewOutsource.jsx
import React from "react";
import "../Style/NewVatcss/VatNewOutsourcePage.css";

const VatNewOutsource = () => {
  return (
    <>
      <section className="vno-page">
        {/* HERO */}
        <header className="vno-hero">
          <h1 className="vno-hero-title">Outsource</h1>
          <p className="vno-hero-text">
            Simplify your Outsource CFO services with VAT Masters Fast, Easy &
            Hassle Free
          </p>
        </header>

        <div className="container-fluid p-0">
          <div className="row g-4">
            {/* LEFT COLUMN */}
            <div className="col-12 col-lg-6">
              <section className="vno-left-card">
                <div>
                  <h3>What is Outsource CFO Services?</h3>
                  <p>
                    As your business grows and becomes more dynamic, the need for
                    senior-level financial professionals becomes important.
                    Companies face more complex financial decisions and can
                    leverage their advanced level of expertise to take the path
                    to achieving their strategic growth goals. Companies striving
                    to maximize their growth potential need experienced
                    professionals to handle functions such as financial
                    forecasting, budgeting and scenario planning. However,
                    hiring a full-time chief financial officer often involves
                    the cost of a six-digit salary.
                  </p>
                  <p>
                    The vatconsultant Solutions provides small business owners
                    with 24×7 access to a team of chartered accountants,
                    certified accountants, and accounting specialists who work
                    together to provide business advisory when needed.
                  </p>
                </div>
              </section>
            </div>

            {/* RIGHT COLUMN */}
            <div className="col-12 col-lg-6" style={{ position: "relative" }}>
              <div className="vno-right-media">
                <img src="/assets/image/otc.png" alt="Calculator" />
              </div>

              <section className="vno-right-card">
                <h3>What is Outsource CFO Services Of Ferings?</h3>
                <p>
                  Budgeting and forecasting <br />
                  Cash flow and revenue management <br />
                  Key performance indicators <br />
                  Support for M &amp; A
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VatNewOutsource;
