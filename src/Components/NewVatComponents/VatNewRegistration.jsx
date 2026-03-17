import React from "react";
import "../Style/NewVatcss/VatNewRegistrationPage.css";

const VatNewRegistration = () => {
  return (
    <>
      <section className="vrp-page">
        {/* HERO */}
        <header className="vrp-hero">
          <h1 className="vrp-hero-title">VAT Registration</h1>
          <p className="vrp-hero-text">
            Simplify your VAT Registration with VAT Masters Fast, Easy & Hassle
            Free
          </p>
        </header>

        <div className="container-fluid p-0">
          <div className="row g-4">
            {/* LEFT COLUMN */}
            <div className="col-12 col-lg-6">
              <section className="vrp-left-top">
                <div>
                  <h3>What is Value Added Tax (VAT)</h3>
                  <p>
                    Value-Added Tax (VAT) is a tax levied on each value-added
                    level of a product throughout the supply chain. It is
                    collected from each point of sale of the manufacturer until
                    it is sold to the final consumer. This is done by allowing
                    adjustment of the tax paid on purchases, also known as
                    “temporary sales tax credits” or “temporary sales tax”, while
                    VAT on sales is referred to as “temporary sales tax”. Is
                    called. Ultimately, all taxes are paid by the consumer. The
                    United Arab Emirates imposes a standard tax rate of 5% on the
                    supply of goods and services. However, certain supplies such
                    as local passenger transport, designated financial services,
                    medical care, and exports outside the Gulf Cooperation
                    Council will be zeroed by the UAE or exempt from VAT.
                  </p>
                </div>

                <div className="vrp-left-middle">
                  <h3>What is VAT Registration UAE?</h3>
                </div>

                <p>
                  VAT-registered UAE under VAT Act means that the company is
                  recognized by the government as a supplier of goods and
                  services and is allowed to collect VAT from customers and send
                  it to the government. Only UAEVAT registered online number
                  holders and registered businesses can do the following: VAT
                  will be charged for the supply of taxable goods and services
                  The purchase input tax credit will be deducted from the input
                  tax credit deducted from the sales VAT. Pay VAT to the
                  government. Submit VAT returns on a regular basis In addition
                  to the above, all UAE VAT Registered Online Number Holders and
                  Registered Companies adjust their business reporting structure
                  according to compliance requirements such as accurate and
                  updated books, tax documents (receipts, credit notes, debit
                  notes, etc.) need to do it. , All internal supply records, and
                  the need to maintain external supply, etc.
                </p>
              </section>

              <div className="vrp-left-image">
                <img src="/assets/image/vtreg2.png" alt="Calculator" />
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="col-12 col-lg-6" style={{ position: "relative" }}>
              <div className="vrp-right-image">
                <img src="/assets/image/vtreg.png" alt="Calculator" />
              </div>

              <section className="vrp-right-main">
                <h3>Who should register for VAT registration UAE?</h3>

                <p>
                  Are all companies responsible for VAT registration? No, VAT is
                  only applicable to companies that exceed the prescribed total
                  annual sales threshold. Depending on the registration
                  threshold, the company is allowed to register VAT.
                  Alternatively, the company can apply for registration or apply
                  for VAT tax exemption registration.
                </p>

                <p>
                  Based on this, VAT registered UAE can be divided into the
                  following categories: </p>
                  <p>1. Required VAT registration Dubai </p>
                  <p>2.Voluntary VAT registration UAE</p>
                  <p>3. VAT registration UAE exemption</p> 
                

                <p className="vrp-buss">Mandatory VAT registration UAE:</p>
                <p>
                  All companies that reside in the United Arab Emirates and have
                  supplied more than 375,000 dirhams in member countries in the
                  last 12 months must register with VAT UAE. In addition,
                  companies must register for UAE VAT registration online if
                  they expect their total supply to exceed the required VAT
                  threshold of AED 375,000 within the next 30 days.
                </p>

                <p className="vrp-revenue">Voluntary VAT registration UAE:</p>
                <p>
                  All businesses residing in the United Arab Emirates that do
                  not require a mandatory UAE VAT registration can choose to
                  voluntarily apply for UAE VAT registration online. Can this be
                  higher than the voluntary VAT registration threshold only if
                  the annual supply or tax expense is higher? The voluntary UAE
                  VAT registration online threshold is 187,500 dirhams,
                  accounting for 50% of the mandatory VAT registration UAE
                  threshold.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VatNewRegistration;