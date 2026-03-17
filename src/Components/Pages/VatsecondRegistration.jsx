import React from "react";
import CtDocsRatesSectionNew from "../VatsecondRegistration/CtDocsRatesSectionNew";
import CtPenaltySectionNew from "../VatsecondRegistration/CtPenaltySectionNew";
import TrustedBadgeSectionNew from "../VatsecondRegistration/TrustedBadgeSectionNew";
import CalltoActionlan from '../CommonComponents/CalltoActionlan'
import VatFaq from '../CommonComponents/VatFaq'
import VatTestimonial from "../VatsecondRegistration/vattestimonial";

import VatRegNew from "../VatsecondRegistration/vatregnew";


const VatsecondRegistration = () => {
  return (
    <div className="vat-second">
      <VatRegNew />
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
