import React, { useEffect, useMemo, useRef, useState } from "react";

const Vattestimonialcertificate = () => {
  const testimonials = useMemo(
    () => [
      {
        name: "Ahamed K.",
        role: "Trading Company, Dubai",
        text: "Smooth VAT registration with clear guidance throughout the process.",
      },
      {
        name: "Priya S.",
        role: "Services Business, Abu Dhabi",
        text: "Fast documentation and very professional handling by the team.",
      },
      {
        name: "Riyaz M.",
        role: "Restaurant Owner, Sharjah",
        text: "Everything explained clearly and filing completed on time.",
      },
      {
        name: "Fatima N.",
        role: "E-commerce, UAE",
        text: "Very responsive support and accurate VAT processing.",
      },
      {
        name: "Naveen R.",
        role: "Consulting Firm, UAE",
        text: "Reliable team. No follow-ups required from our side.",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const visibleCount = 3; // 👈 desktop cards
  const maxIndex = testimonials.length - visibleCount;

  const next = () => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  useEffect(() => {
    timerRef.current = setInterval(next, 3000); // 👈 3 sec once
    return () => clearInterval(timerRef.current);
  }, [maxIndex]);

  return (
    <section className="vat3-wrap">
      <h2 className="vat3-title">What Our Clients Say</h2>

      <div className="vat3-viewport">
        <div
          className="vat3-track"
          style={{ transform: `translateX(-${index * (100 / visibleCount)}%)` }}
        >
          {testimonials.map((t, i) => (
            <div className="vat3-card" key={i}>
              <p className="vat3-text">“{t.text}”</p>
              <div className="vat3-name">{t.name}</div>
              <div className="vat3-role">{t.role}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .vat3-wrap{
          max-width:1200px;
          margin:0 auto;
          padding:50px 16px;
          font-family:system-ui, sans-serif;
        }

        .vat3-title{
          text-align:center;
          font-size:clamp(22px,3vw,32px);
          font-weight:800;
          margin-bottom:30px;
        }

        .vat3-viewport{
          overflow:hidden;
        }

        .vat3-track{
          display:flex;
          transition:transform 700ms cubic-bezier(.2,.8,.2,1);
        }

        .vat3-card{
          flex:0 0 calc(96% / 3);
          padding:24px;
          margin:0 8px;
          background:#fff;
          border-radius:18px;
          border:1px solid black;
          text-align:left;
          animation:fadeUp .6s ease;
        }

        .vat3-text{
          font-size:15px;
          line-height:1.6;
          font-weight:600;
          margin-bottom:14px;
        }

        .vat3-name{
          font-weight:800;
          font-size:14px;
        }

        .vat3-role{
          font-size:12px;
          opacity:.7;
        }

        @keyframes fadeUp{
          from{opacity:0; transform:translateY(12px);}
          to{opacity:1; transform:none;}
        }

        /* 📱 Mobile */
        @media(max-width:768px){
          .vat3-card{
            flex:0 0 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Vattestimonialcertificate;
