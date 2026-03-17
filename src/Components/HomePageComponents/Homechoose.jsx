import React from "react";
const pricingHeaderShape = "/assets/image/topBar.png";
import "../Style/Homecss/Homechoose.css";

function ChooseCard({ icon, title, desc }) {
  return (
    <div className="wcu-cardWrap mt-3">
      {/* 🔹 Cyan tilted accent (RIGHT SIDE ONLY – hover) */}
      <div className="wcu-accent" aria-hidden="true" />

      {/* 🔹 Main Card */}
      <div className="wcu-card">
        {/* top-right curved glass highlight */}
        <div className="wcu-glass" aria-hidden="true">
          <div className="wcu-glassArc" />
        </div>

        {/* content */}
        <div className="wcu-content">
          {/* icon */}
          <div className="wcu-icon">{icon}</div>

          {/* title */}
          <p className="wcu-title">{title}</p>

          {/* description */}
          <p className="wcu-desc">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function Homechoose() {
  return (
    <section className="bg-white" id="why-choose">
      <div className="wcu-shell mx-auto">
        {/* ✅ Header (topBar.png) */}
        <div className="wcu-header position-relative mx-auto">
          <img
            src={pricingHeaderShape}
            alt=""
            className="wcu-topBar d-none d-lg-block"
            draggable="false"
          />

          <div className="wcu-headerTextWrap">
            <p className="wcu-headerText">
              Why Choose  Us  <br className="d-none d-lg-block" /> <span className="primarss"> VAT  Masters</span>
            </p>
          </div>
        </div>

        {/* ✅ grid (mobile-first) */}
        <div className="row g-0 g-sm-4 g-lg-0">
          {/* CARD 1 */}
          <div className="col-12 col-sm-6 col-lg-4">
            <ChooseCard
              icon="🏛️"
              title="Trusted Expertise"
              desc="Backed by experience, VAT Masters is a leader in accounting and VAT consultancy, known for ethical standards."
            />
          </div>

          {/* CARD 2 */}
          <div className="col-12 col-sm-6 col-lg-4">
            <ChooseCard
              icon="👔"
              title="Skilled & Certified Team"
              desc="Our auditors and consultants are carefully selected, extensively trained, and consistently motivated to deliver services that meet global standards."
            />
          </div>

          {/* CARD 3 */}
          <div className="col-12 col-sm-6 col-lg-4">
            <ChooseCard
              icon="🤝"
              title="Client-Centric Approach"
              desc="We prioritize delivering exceptional value by offering personalized, accurate, and timely financial and tax solutions for every client."
            />
          </div>

          {/* CARD 4 */}
          <div className="col-12 col-sm-6 col-lg-4">
            <ChooseCard
              icon="🌍"
              title="Global Standards"
              desc="Our team combines local market understanding with best practices, ensuring compliance and excellence for every client."
            />
          </div>

          {/* CARD 5 */}
          <div className="col-12 col-sm-6 col-lg-4">
            <ChooseCard
              icon="✅"
              title="Integrity"
              desc="Every service we offer reflects our dedication to precision, transparency, and long-term client success without compromise."
            />
          </div>

          {/* CARD 6 */}
          <div className="col-12 col-sm-6 col-lg-4">
            <ChooseCard
              icon="🧾"
              title="VAT Registration"
              desc="From VAT registration to financial audits, we offer a complete range of services to meet your business compliance needs."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
