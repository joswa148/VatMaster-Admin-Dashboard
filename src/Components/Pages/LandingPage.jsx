import React, { useEffect } from 'react'
import { useMeta } from "../../hooks/useMeta";
import Hero from '../LandingPageComponents/Hero'
import CtPenaltySection from '../LandingPageComponents/CtPenaltySection'
import CtDocsRatesSection from '../LandingPageComponents/CtDocsRatesSection'
import TrustedBadgesSection from '../LandingPageComponents/TrustedBadgesSection'
import CalltoActionlan from '../CommonComponents/CalltoActionlan'
import Vatcertnew from "../LandingPageComponents/vatcertnew"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import CtFaq from "../CommonComponents/CtFaq";
import VatTestimonial from "../VatRegistrationComponents/vattestimonial";


const LandingPage = () => {
  const { setPageMeta } = useMeta();

  useEffect(() => {
    setPageMeta('corporate-tax');
  }, [setPageMeta]);

  return (
      <div className="corporate-tax-registration-page">
        <Vatcertnew/>
    {/* <Hero/> */}
     
    <CtPenaltySection/>
    <CtDocsRatesSection/>
    <TrustedBadgesSection/>
    <VatTestimonial />
    <CtFaq />
    <CalltoActionlan/>
    </div>
  )
}

export default LandingPage