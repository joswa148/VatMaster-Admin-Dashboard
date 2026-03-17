import React from 'react'
import CtPenaltySection from '../FillingPageComponents/CtPenaltySection'
import CtDocsRatesSection from '../FillingPageComponents/CtDocsRatesSection'
import TrustedBadgesSection from '../FillingPageComponents/TrustedBadgesSection'
import CalltoActionfilling from '../CommonComponents/CalltoActionfilling'
import Vatcertnew from "../FillingPageComponents/vatcertnew"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import CtFaq from "../CommonComponents/CtFaq";
import VatTestimonial from "../VatRegistrationComponents/vattestimonial";


const FillingPage = () => {
  return (
      <div className="fillingpage">
        <Vatcertnew/>
    <CtPenaltySection/>
    <CtDocsRatesSection/>
    <TrustedBadgesSection/>
    {/* <VatTestimonial /> */}
    {/* <CtFaq /> */}
    <CalltoActionfilling/>
    </div>
  )
}

export default FillingPage