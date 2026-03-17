import React from "react";
import Vatherosectioncertificate from "../VatCerificateComponents/Vatherosectioncertificate";
import CtDocsRatescertificate from "../VatCerificateComponents/CtDocsRatescertificate";
import TrustedBadgeSectioncertificate from "../VatCerificateComponents/TrustedBadgeSectioncertificate";
import CalltoActionlan from "../CommonComponents/CalltoActionlan";
import Faq from "../CommonComponents/faq";
import VatTestimonial from "../VatRegistrationComponents/vattestimonial";
import CtPenaltySectioncertificate from"../VatCerificateComponents/CtPenaltySectioncertificate";
import Vatcornew from "../VatCerificateComponents/vatcornew";
const Vatcertificatepage = () => {
    return (
        <div className="vat-ct-page">
            <Vatcornew/>
       {/* <Vatherosectioncertificate/> */}
         <CtPenaltySectioncertificate/>
        <CtDocsRatescertificate/>
      
        <TrustedBadgeSectioncertificate/>
        <VatTestimonial />
        <Faq/>
        <CalltoActionlan />
        </div>
    );
}

export default Vatcertificatepage