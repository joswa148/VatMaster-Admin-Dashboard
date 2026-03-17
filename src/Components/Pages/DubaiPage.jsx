import React from 'react'
import Hero from '../DubaiPageComponents/Hero'
import CtPenaltySection from '../DubaiPageComponents/CtPenaltySection'
import CtDocsRatesSection from '../DubaiPageComponents/CtDocsRatesSection'
import TrustedBadgesSection from '../DubaiPageComponents/TrustedBadgesSection'
import CalltoActionlan from '../CommonComponents/CalltoActionlan'
import Vatcertnew from "../DubaiPageComponents/vatcertnew"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import CtFaq from "../CommonComponents/CtFaq";
import VatTestimonial from "../VatRegistrationComponents/vattestimonial";


const DubaiPage = () => {
  return (
      <div className="dubai">
        <Vatcertnew/>
    {/* <Hero/> */}
     
    <CtPenaltySection/>
    <CtDocsRatesSection/>
    <TrustedBadgesSection/>
    {/* <VatTestimonial /> */}
    <CtFaq />
    <CalltoActionlan/>
    </div>
  )
}

export default DubaiPage