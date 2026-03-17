import React from "react";
import "../Style/NewVatcss/VatNewReturnfillingPage.css"

const VatNewReturnfilling = () => {
    return (
        <>
          
            <section className="vrf-page">
                {/* HERO */}
                <header className="vrf-hero">
                    <h1 className="vrf-hero-title">VAT Return Filing</h1>
                    <p className="vrf-hero-text">
                        Simplify your VAT Return Filing with VAT Masters Fast, Easy & Hassle
                        Free.
                    </p>
                </header>

                <div className="container-fluid p-0">
                    <div className="row g-4">
                        {/* LEFT COLUMN */}
                        <div className="col-12 col-lg-6">
                            <section className="vrf-left-top">
                                <div>
                                    <h3>What is VAT Return Filing?</h3>
                                    <p>
                                        A VAT return is an official document completed by the taxable person and submitted to the Federal Tax Authority (“FTA”) on a regular basis, with details of unpaid and recoverable VAT, and more. Contains the necessary information for. Will be provided. In this guide, this is referred to as a “VAT Return”. All VAT returns must be submitted online using the FTA portal. The tax return can be filed by the taxable person or another person who has the right to file on behalf of the taxable person (for example, a tax agent or legal representative).

                                    </p>
                                </div>

                                <div className="vrf-left-middle">
                                    <h3>
                                        What is Taxation period?
                                    </h3>

                                </div>
                                <p>
                                    The taxable period is the specific period during which the tax payment is calculated and paid. · The standard taxable period applicable to taxable persons must be a period of three calendar months ending on the date determined by the FTA. The FTA may, at its discretion, assign different tax periods other than the standard period to specific taxable groups (for example, companies may need to file VAT in Dubai each month). · If the taxable person is assigned a standard taxable period, the taxable person may request that the taxable period end in the requested month and the FTA may accept such request at its discretion. I will. Check here for the date of filing your VAT return in the United Arab Emirates. The VAT return must be received by the FTA within 28 days of the end of the taxable period or by any other date as directed by the FTA. If the payment is by FTA, it must be received by the FTA by the same deadline. Understand tax obligations
                                </p>
                            </section>

                            <div className="vrf-left-image">
                                <img src="/assets/image/vtr2.png" alt="Calculator" style={{ height: '575px' }} />
                            </div>
                        </div>

                        {/* RIGHT COLUMN */}
                        <div className="col-12 col-lg-6" style={{ position: "relative" }}>
                            <div className="vrf-right-image">
                                <img src="/assets/image/vtr.png" alt="Calculator" />
                            </div>

                            <section className="vrf-right-main" >
                                <h3>Calculation of tax obligations</h3>

                                <p>
                                    The registrant’s tax obligation is the difference between the temporary sales tax paid during a specific tax period and the temporary sales tax that can be collected during the same tax period. If the sales tax exceeds the sales tax, you will need to pay the difference to the FTA. If the amount of VAT exceeds the amount of VAT, the taxable person is entitled to a VAT refund from the FTA.
                                </p>



                                <p className="vrf-buss">Submission of VAT return</p>
                                <p>
                                    For each taxable period, the taxable person is required to submit a VAT return containing details about the supply prepared or received by the taxable person. With respect to sales and other outputs, taxable persons must report
                                </p>
                                <p>
                                    If you are a retailer and offer tax refunds to UAE tourists under the official tourist refund system, the tax refunds provided to tourists under the tax refund system for tourists.
                                    Supply of goods and services subject to zero VAT rate.
                                    If applicable, adjustments to goods imported into the UAE and declared through UAE Customs.
                                    Supply of goods and services received by the taxable person subject to the reverse billing provisions.
                                </p>

                                <p className="revenue">Accurate Reporting & Reconciliations:</p>
                                <p>
                                 

                                    For purchases and other inputs, taxable persons must report
                                    Purchases and costs that are subject to the standard VAT rate and you want to collect VAT.
                                    I want to collect temporary consumption tax. Supplies that are subject to reverse billing. The amount of VAT that the taxable person can claim and collect the temporary sales tax must be offset in the final tax return. The resulting amount is the net VAT paid to or refunded by the FTA (that is, the net VAT position).
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
         
        </>
    );
};

export default VatNewReturnfilling;