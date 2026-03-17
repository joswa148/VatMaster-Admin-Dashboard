import React from 'react'
import Hero from '../LandingPageComponents/Hero'
import CtPenaltySection from '../UaeConsultantComponents/CtPenaltySection'
import CtDocsRatesSection from '../UaeConsultantComponents/CtDocsRatesSection'
import TrustedBadgesSection from '../LandingPageComponents/TrustedBadgesSection'
import CalltoActionlan from '../CommonComponents/CalltoActionlan'
import Vatcertnew from "../UaeConsultantComponents/vatcertnew"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import CtFaq from "../CommonComponents/CtFaq";
import VatTestimonial from "../VatRegistrationComponents/vattestimonial";


const UaeConsultantPage = () => {
  return (
      <div className="uaecon">
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

export default UaeConsultantPage