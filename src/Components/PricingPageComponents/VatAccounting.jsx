const heroImg = "/assets/image/Subtract 10.png";
const dummyBg = "/assets/image/mobilePricing.jpg";

import "../Style/Pricingcss/VatAccounting.css";
import Navbar from "../CommonComponents/Navbar";
import CalltoAction from "../CommonComponents/CalltoAction";
import { CommonPricingCard } from "../CommonComponents/CommonPricingCards";
import { useWhatsAppRouting } from "../../hooks/useWhatsAppRouting";

/* ✅ Tick icon */
const Tick = () => <span className="cu-tickDot">✓</span>;

const plans = [
  {
    title: "Accounting Bookkeeping Micro",
    price: "499",
    items: [
      "Transactions < 100",
      "30 Minutes Live session",
      "Dedicated Accounts Manager",
      "Full Cycle Accounting & Bank Reconciliation",
    ],
  },
  {
    title: "Accounting Bookkeeping Small",
    price: "999",
    items: [
      "Transactions < 500",
      "1 Hr Live session",
      "Dedicated Accounts Manager",
      "Full Cycle Accounting & Bank Reconciliation",
    ],
    featured: true,
  },
  {
    title: "Accounting Bookkeeping Medium",
    price: "1499",
    items: [
      "Transactions < 1000",
      "2 Hr Live session",
      "Dedicated Accounts Manager",
      "Full Cycle Accounting & Bank Reconciliation",
    ],
  },
];

export default function VatAccounting() {
  const { whatsappUrl } = useWhatsAppRouting();
  return (
    <div className='prize-vatcss'>
      <Navbar />

      {/* ===== HERO ===== */}
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
              </picture>
              <div className="cu-heroShade" />
              <h1 className="cu-heroTitle"> Vat Accounting Bookkeeping</h1>

              {/* Cyan overlay */}
              <div className="cu-cyanWrap">
                <div
                  className="cu-cyanCard"
                >
                  <div className="cu-cyanTitle">Start Your Tax Journey with Ease</div>

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

      {/* ===== PLANS ===== */}
      <section className="pp-wrap" id="pricing">
        <div className="pp-container mx-auto">

          {/* ✅ Correct Header Order */}
          <div className="cpn-headText">
            <p className="pp-title fs-1  fw-bold text-center ">
              Get Started Or Choose a Plan
            </p>
          </div>

          <div className="row g-4 g-lg-5 ">
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
                  maxHeight={340}
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
