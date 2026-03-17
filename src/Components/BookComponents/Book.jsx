import React from "react";
import Vatherosection from "./Vatherosection";
import CtDocsRatesSectionNew from "./CtDocsRatesSectionNew";
import CtPenaltySectionNew from "./CtPenaltySectionNew";
import TrustedBadgeSectionNew from "./TrustedBadgeSectionNew";
import VatFaq from '../CommonComponents/VatFaq'
import VatTestimonial from "./vattestimonial";

import VatRegNew from "./vatregnew";
import BookCalltoAction from "../CommonComponents/BookCalltoAction";


const Book = () => {
  return (
    <div className="Book">
      {/* <Vatherosection /> */}
      <VatRegNew/>
      <CtPenaltySectionNew />
      <CtDocsRatesSectionNew />
      <TrustedBadgeSectionNew />
      {/* <VatTestimonial /> */}
      {/* <VatFaq /> */}
   <BookCalltoAction/>
    </div>
  );
};

export default Book;
