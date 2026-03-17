import CtPenaltySection from '../CtainLandingPageComponents/CtPenaltySection'
import CtDocsRatesSection from '../CtainLandingPageComponents/CtDocsRatesSection'
import TrustedBadgesSection from '../CtainLandingPageComponents/TrustedBadgesSection'
import CalltoActionlan from '../CommonComponents/CalltoActionlan'
import Vatcertnew from "../CtainLandingPageComponents/vatcertnew"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import CtFaq from "../CommonComponents/CtFaq";
import VatTestimonial from "../VatRegistrationComponents/vattestimonial";


const CtainLandingPage = () => {
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

export default CtainLandingPage