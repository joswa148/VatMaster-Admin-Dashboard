import React, { useEffect, useState } from "react";

const cl3 = "/assets/image/testlancl3.png";
const cl4 = "/assets/image/testlancl4.png";
const cl5 = "/assets/image/testlancl5.png";

const initialData = [
  {
    name: "Khaleed",
    company: "Al Noor Trading LLC, Dubai",
    role: "Managing Partner",
    rating: 5,
    text: "The service provided by VAT Masters exceeded my expectations. From the very first interaction, the team was professional, transparent, and extremely supportive. They guided us through every step of the VAT process, answered all our questions patiently, and ensured complete accuracy.",
    img: cl5,
  },
  {
    name: "Ahamed",
    company: "NextGen Solutions FZCO, Dubai",
    role: "Founder",
    rating: 4,
    text: "Working with VAT Masters has been a great decision for our company. Their team handled our VAT requirements with precision and speed. They explained complex tax matters in a simple way and kept us informed throughout the process. The overall experience was smooth, reliable, and highly professional.",
    img: cl3,
  },
  {
    name: "Lina",
    company: "BrightWave Technologies, Dubai",
    role: "Operations Manager",
    rating: 5,
    text: "Our experience with VAT Masters was outstanding from start to finish. The team demonstrated strong technical knowledge and a clear understanding of UAE VAT regulations. They were always responsive, proactive, and detail-oriented. I highly recommend their services to any growing business in Dubai.",
    img: cl4,
  },
];

const VatTestimonial = () => {
  const [cards, setCards] = useState(initialData);
  const [isShifting, setIsShifting] = useState(false);

  useEffect(() => {
    const dur = 900; // must match CSS transition
    const interval = setInterval(() => {
      setIsShifting(true);

      setTimeout(() => {
        setCards((prev) => {
          const next = [...prev];
          const first = next.shift();   // ✅ front
          next.push(first);             // ✅ move to back
          return next;
        });
        setIsShifting(false);
      }, dur);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  // ✅ Star renderer (added only)
  const renderStars = (rating = 5) => {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    const empty = 5 - full - (half ? 1 : 0);

    return (
      <div className="vat-stars" aria-label={`Rating ${rating} out of 5`}>
        {"★".repeat(full)}
        {half ? "☆" : ""}
        {"✩".repeat(empty)}
        {/* <span className="vat-ratingText">{rating}</span> */}
      </div>
    );
  };

  return (
    <>
      <style>{`
        .vat-wrap{
          display:flex;
          justify-content:center;
          padding:24px;
          padding-top:0px;
          padding-bottom:44px;
        }
        .vat-shell{
          width:100%;
          max-width:1140px;
          background-image: url("/assets/image/testlanbg.png");
          padding:24px;
          overflow:hidden;
          background-size: cover;
          background-position: center top;
          border-radius: 0px 0px 50px 50px;
          padding-top:0px;
          height: 600px;
        }
        .vat-title{
          text-align:center;
          font-size:40px;
          font-weight:800;
          margin:-8px 0 18px;
        }
        .vat-stage{
          position:relative;
          height:600px;
          display:grid;
          place-items:center;
          isolation:isolate; /* ✅ z-index stacking reliable */
        }
        .vat-card{
          height: 300px;
          position: absolute;
          width: 100%;
          max-width: 800px;
          background: #fff;
          border-radius: 22px;
          box-shadow: 0 18px 30px rgba(0, 0, 0, .15);
          transition: transform .9s cubic-bezier(.22, .61, .36, 1), opacity .9s cubic-bezier(.22, .61, .36, 1);
          will-change: transform, opacity;
          top: 19%;
          transform: translate3d(0,0,0); /* ✅ smoother */
          pointer-events:none; /* ✅ avoids accidental hover/jank */
        }

        /* Default positions */
        .vat-card[data-pos="0"]{ transform:translate3d(0,0,0)    scale(1);    opacity:1;   z-index:5; }
        .vat-card[data-pos="1"]{ transform:translate3d(0,18px,0) scale(.96); opacity:.9;  z-index:4; }
        .vat-card[data-pos="2"]{ transform:translate3d(0,36px,0) scale(.92); opacity:.75; z-index:3; }
        .vat-card[data-pos="3"]{ transform:translate3d(0,54px,0) scale(.88); opacity:.6;  z-index:2; }
        .vat-card[data-pos="4"]{ transform:translate3d(0,72px,0) scale(.84); opacity:.45; z-index:1; }

        /* SHIFT MODE (front -> back visibly) */
        .vat-stage.shifting .vat-card[data-pos="0"]{
          transform:translate3d(0,72px,0) scale(.84);
          opacity:.45;
          z-index:1; /* ✅ DON'T make it 0/negative, keep visible */
        }
        .vat-stage.shifting .vat-card[data-pos="1"]{
          transform:translate3d(0,0,0) scale(1);
          opacity:1;
          z-index:5;
        }
        .vat-stage.shifting .vat-card[data-pos="2"]{
          transform:translate3d(0,18px,0) scale(.96);
          opacity:.9;
          z-index:4;
        }
        .vat-stage.shifting .vat-card[data-pos="3"]{
          transform:translate3d(0,36px,0) scale(.92);
          opacity:.75;
          z-index:3;
        }
        .vat-stage.shifting .vat-card[data-pos="4"]{
          transform:translate3d(0,54px,0) scale(.88);
          opacity:.6;
          z-index:2;
        }

        .vat-inner{
          display:grid;
          grid-template-columns:230px 1fr;
          gap: 30px;
          padding: 30px;
          padding-top:20px;
        }
        .vat-imgBox{
          border-radius:16px;
          overflow:hidden;
          background:#eee;
          position: relative;
          bottom:66px;
        }
        .vat-imgBox img{ width:100%; height:100%; object-fit:cover; }
        .vat-name{ margin:0; font-size:30px; font-weight:800; }
        .vat-meta{ font-size:16px; margin:6px 0 10px; }
        .vat-role{ color:#00EAF6; font-weight:600; }
        .vat-text{ font-size:14px; color:#333; margin:0; }

        /* ✅ Stars (added only) */
        .vat-stars{
          margin:8px 0 12px;
          font-size:18px;
          letter-spacing:2px;
          color:#FFD200;
          display:flex;
          align-items:center;
          gap:10px;
        }
        .vat-ratingText{
          font-size:14px;
          color:#444;
          letter-spacing:0;
          font-weight:600;
        }

        @media (max-width: 1024px){
          .vat-shell{ max-width: 960px; border-radius:0px; }
          .vat-stage{ height: 250px; }
          .vat-card{ max-width: 720px; height: 280px; top: 18%; }
          .vat-title{ font-size: 34px; }
          .vat-inner{ grid-template-columns: 200px 1fr; gap: 22px; padding: 24px; display:block; }
          .vat-name{ font-size: 26px; }
          .vat-meta{ font-size: 15px; }
          .vat-imgBox{ bottom: 92px; }
          .vat-shell { padding-top:20px; background-color: #00eaf6; background-image: none; }
        }
        @media (max-width: 768px){
          .vat-card{ max-width: 92%; height: auto; top: 16%; }
          .vat-inner{ padding: 18px; gap: 16px; }
          .vat-name{ font-size: 22px; }
          .vat-meta{ font-size: 14px; }
          .vat-imgBox{ bottom: 0px; }
          .vat-shell {height:900px}
        }
        @media (max-width: 480px){
          .vat-wrap{ padding: 14px; padding-bottom:0px; padding-top:0px; }
          .vat-title{ font-size: 26px; margin-bottom: 12px; }
          .vat-card{ top: 14%; }
          .vat-inner{ padding: 14px; }
          .vat-name{ font-size: 20px; }
          .vat-meta{ font-size: 13px; }
          .vat-text{ font-size: 13px; }
          .vat-stars{ font-size:16px; }
        }
        @media (max-width: 360px){
          .vat-title{ font-size: 24px; }
          .vat-shell {height:840px}
        }
      `}</style>

      <section className="vat-wrap">
        <div className="vat-shell">
          <p className="vat-title">Testimonials</p>

          <div className={`vat-stage ${isShifting ? "shifting" : ""}`}>
            {cards.slice(0, 5).map((item, index) => (
              <div key={item.name} className="vat-card" data-pos={index}>
                <div className="vat-inner">
                  <div className="vat-imgBox">
                    <img src={item.img} alt={item.name} />
                  </div>
                  <div>
                    <p className="vat-name">{item.name}</p>

                    {/* ✅ Star rating added only */}
                    {renderStars(item.rating)}

                    <div className="vat-meta">
                      {item.company} • <span className="vat-role">{item.role}</span>
                    </div>
                    <p className="vat-text">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default VatTestimonial;