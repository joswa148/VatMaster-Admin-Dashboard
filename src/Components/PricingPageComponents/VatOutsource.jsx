import React from "react";
const heroImg = "/assets/image/Subtract 10.png";
import "../Style/Pricingcss/VatAccounting.css";
import CalltoAction from "../CommonComponents/CalltoAction";
import Navbar from "../CommonComponents/Navbar";
import { CommonPricingCard } from "../CommonComponents/CommonPricingCards";
import { useWhatsAppRouting } from "../../hooks/useWhatsAppRouting";
const dummyBg = "/assets/image/mobilePricing.jpg";


/* ✅ Tick icon */

const Tick = () => <span className="cu-tickDot">✓</span>;
const plans = [
  {
    title: "Outsource CFO - MICRO",
    price: "499",
    items: [
      " 1 Visit Monthly",

      "Free Consultancy",

      "Free CA Consultancy",

      "Financial Advisory",

      "Accounting finalization",
    ],
  },
  {
    title: "Outsource CFO - SMALL",
    price: "749",
    items: [
      " 2 Visit Monthly",

      "Free Consultancy",

      "Free CA Consultancy",

      "Financial Advisory",

      "Accounting finalization",
    ],
    featured: true,
  },
  {
    title: "Outsource CFO - Medium",
    price: "999",
    items: [

      " 3 Visit Monthly",

      "Free Consultancy",

      "Free CA Consultancy",

      "Financial Advisory",

      "Accounting finalization",
    ],
  },
];

export default function VatOutsource() {
  const { whatsappUrl } = useWhatsAppRouting();
  return (
    <div className='prize-vatcss'>
      <Navbar />
      {/* ===== HERO (NewPricepage) ===== */}
      <section className="cu-page">
        <div className="cu-shell">
          <div className="cu-grid">
            {/* LEFT BIG IMAGE CARD */}
            <div className="cu-heroCard">
              <picture>
                <source
                  media="(max-width: 575px)"
                  srcSet={dummyBg}
                />
                <img className="cu-heroImg" src={heroImg} />
              </picture>              <div className="cu-heroShade" />
              <h1 className="cu-heroTitle"> Vat Outsource CFO</h1>

              {/* Cyan overlay */}
              <div className="cu-cyanWrap">
                <div
                  className="cu-cyanCard"
                >
                  <div className="cu-cyanTitle">
                    Start Your Tax Journey with Ease
                  </div>

                  <div className="cu-cyanTicks">
                    <div className="cu-tickRow">
                      <Tick />
                      Quick Processing
                    </div>
                    <div className="cu-tickRow">
                      <Tick />
                      Professional Support
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT DARK CARD */}
            <aside className="cu-sideCard" aria-label="Highlight">
              <div className="cu-sideText">
                <div>Start Your Tax</div>
                <div>Journey with Ease</div>
                <div className="cu-sideSmall">Let VAT Masters handle</div>
                <div className="cu-sideSmall">your Corporate Tax</div>
                <div className="cu-sideSmall">Registration.</div>
              </div>

              <div className="cu-sideCircle" aria-hidden="true" />
            </aside>
          </div>
        </div>
      </section>

      {/* ===== PLANS (Using CommonPricingCard) ===== */}
      <section className="pp-wrap my">
        <div className="pp-container">
          <div className="cpn-headText">
            <p className="pp-title fs-1  fw-bold text-center ">
              Get Started Or Choose a Plan
            </p>
          </div>
          <div className="row g-4 g-lg-5 mt-2">
            {plans.map((p, idx) => (
              <div key={idx} className="col-12 col-sm-6 col-lg-4">
                <CommonPricingCard
                  title={p.title}
                  priceText={`${p.price}`}
                  bullets={p.items}
                  noteLines={["Free VAT", "Implementation", "Consultancy"]}
                  ctaText="WhatsApp us"
                  ctaLink={whatsappUrl}
                  minHeight={420}
                  maxHeight={300}
                  aspectRatio="8 / 10"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CalltoAction />
    </div>
  );
}