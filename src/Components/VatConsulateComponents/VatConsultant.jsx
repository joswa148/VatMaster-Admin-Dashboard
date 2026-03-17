import React from "react";
import CtDocsRatesSectionNew from "./CtDocsRatesSectionNew";
import CtPenaltySectionNew from "./CtPenaltySectionNew";
import TrustedBadgeSectionNew from "./TrustedBadgeSectionNew";
import CalltoActionlan from '../CommonComponents/CalltoActionlan'
import VatFaq from '../CommonComponents/VatFaq'
import VatTestimonial from "./vattestimonial";

import VatRegNew from "./vatregnew";


const VatConsultant = () => {
  return (
    <div className="VatConsultant">
      <VatRegNew/>
      <CtPenaltySectionNew />
      <CtDocsRatesSectionNew />
      <TrustedBadgeSectionNew />
      {/* <VatTestimonial /> */}
      {/* <VatFaq /> */}
   <CalltoActionlan />
    </div>
  );
};

export default VatConsultant;
