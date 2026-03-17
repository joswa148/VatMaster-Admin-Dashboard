import React from "react";
import Vatherosection from "./Vatherosection";
import CtDocsRatesSectionNew from "./CtDocsRatesSectionNew";
import CtPenaltySectionNew from "./CtPenaltySectionNew";
import TrustedBadgeSectionNew from "./TrustedBadgeSectionNew";
import CalltoActionlan from '../CommonComponents/CalltoActionlan'
import VatFaq from '../CommonComponents/VatFaq'
import VatTestimonial from "./vattestimonial";

import VatRegNew from "./vatregnew";


const VatsecondRegistration = () => {
  return (
    <div className="vat-registration-page">
      {/* <Vatherosection /> */}
      <VatRegNew/>
      <CtPenaltySectionNew />
      <CtDocsRatesSectionNew />
      <TrustedBadgeSectionNew />
      <VatTestimonial />
      <VatFaq />
   <CalltoActionlan />
    </div>
  );
};

export default VatsecondRegistration;
