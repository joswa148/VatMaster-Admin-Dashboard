import React from "react";
const cardBg = "/assets/image/displayCard.png";
import "../Style/Homecss/Homeabout.css";
import { useNavigate } from "react-router-dom";



const FeatureCard = ({ title, desc, tilt = 4 }) => {
  return (
    <div className="abt-featureWrap">
      {/* Cyan sheet behind */}
      <div
        className="abt-featureBack"
        style={{
          transform: `rotate(${tilt}deg) translate(7px, -12px)`,
        }}
      />

      {/* Front glass card */}
      <div className="abt-featureFront">
        {/* subtle top-right highlight */}
        <div className="abt-featureArc" />

        <h4 className="abt-featureTitle">{title}</h4>

        <p className="abt-featureDesc">{desc}</p>
      </div>
    </div>
  );
};

const AboutRightCard = () => {
  return (
    <section className="abt-rightCard">
      {/* grid texture */}
     

      <div className="abt-rightInner">
        <p className="abt-rightHeading">About Us</p>

        <p className="abt-rightText">
         VAT Masters is a Leading Professional Accounting and VAT consulting firm with the highest ethical and professional standards, We provide exceptional value to our customers, employees and society. VAT Masters auditors pay special attention to hiring and retaining a highly skilled workforce, with appropriate training and motivation to achieve quality levels comparable to internationally expected standard
        </p>

        <div className="abt-featureGrid">
          <FeatureCard
            tilt={4}
            title={
              <>
                Live Expert Advice
              </>
            }
            desc="VAT Masters offers expert VAT registration, return filing, compliance, and advisory services for UAE businesses."
          />

          <FeatureCard
            tilt={4}
            title={
              <>
                100% Accuracy 
              </>
            }
            desc="Our VAT experts ensure precise filings, error-free documentation, and full compliance with UAE tax regulations—every time."
          />

          <FeatureCard
            tilt={4}
            title={
              <>
                Safe and Secure
              </>
            }
            desc="Your data is protected with secure systems, strict confidentiality, and industry-standard safety measures at all times."
          />
        </div>
      </div>
    </section>
  );
};

const AboutLeftCard = () => {
  const navigate = useNavigate();

  return (
  <div className="abt-leftWrap">
      {/* ✅ NO aspect-ratio now */}
      <div className="abt-mediaBox">
        <img
          src={cardBg}
          alt=""
          className="abt-leftImg"
          draggable="false"
        />

        {/* TEXT BLOCK */}
        <div className="abt-leftTextBlock">
          <div className="abt-leftTextBold">
            <div className="abt-t1">
              <span className="abt-bestVat">Trusted VAT</span>
            </div>

            {/* <div className="abt-consultingRow">
              <span className="abt-consulting">Advisory</span>
            </div> */}

            <div className="abt-firmRow">
              <span className="abt-firm">Experts </span>
               <span className="abt-uae">UAE</span>
            </div>

            {/* <div className="abt-uaeRow">
              <span className="abt-uae">UAE</span>
            </div> */}
          </div>
        </div>

        {/* BUTTON */}
       <button
  type="button"
  className="abt-leftBtn"
  onClick={() => navigate("/about")}
>
  <span className="abt-leftBtnText">Explore More</span>
</button>
      </div>
</div>

  );
};

export default function Homeabout() {
  return (
    <section className="abt-section" id="about">
      <div className="container-fluid">
        <div className="row g-4 ">
          {/* LEFT */}
          <div className="col-12 col-lg-5 p-md-0 p-sm-0 ovea">
            <div className="abt-leftHeight">
              <AboutLeftCard />
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-12 col-lg-7 ovea">
            <div className="abt-rightHeight">
              <AboutRightCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
