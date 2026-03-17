import React from "react";
import { Route, Routes } from "react-router-dom";
import DeregistrationPage from "./Components/Pages/DeregistrationPage";
import RegistrationPage from "./Components/Pages/RegistrationPage";
import OutsourcePage from "./Components/Pages/OutsourcePage";
import AccountingPage from "./Components/Pages/AccountingPage";
import ReturnfillingPage from "./Components/Pages/ReturnfillingPage";
import LandingPage from "./Components/Pages/LandingPage";
import PricibgPage from "./Components/Pages/PricibgPage";
import ContactPage from "./Components/Pages/ContactPage";
import HomePage from "./Components/Pages/HomePage";
import AboutPage from "./Components/Pages/AboutPage";
import VatAccounting from "./Components/PricingPageComponents/VatAccounting";
import VatDeregister from "./Components/PricingPageComponents/VatDeregister";
import VatOutsource from "./Components/PricingPageComponents/VatOutsource";
import VatReturnfill from "./Components/PricingPageComponents/VatReturnfill";
import VatRegistration from "./Components/VatRegistrationComponents/VatRegistration";
import VatNewRegistrationPage from "./Components/Pages/VatNewRegistrationPage";
import VatNewDeregistrationPage from "./Components/Pages/VatNewDeregistrationPage";
import VatNewOutsourcePage from "./Components/Pages/VatNewOutsourcePage";
import VatNewAccountingPage from "./Components/Pages/VatNewAccountingPage";
import VatNewReturnfillingPage from "./Components/Pages/VatNewReturnFilling";
import Vatcertificate from "./Components/Pages/Vatcertificatepage";
import CtainLandingPage from "./Components/Pages/CtainLandingPage";
import VatsecondRegistration from "./Components/Pages/VatsecondRegistration";
import Scroll from"./Components/CommonComponents/Scroll";

import VatConsultant from "./Components/VatConsulateComponents/VatConsultant";
import DubaiPage from "./Components/Pages/DubaiPage";
import  FillingPage from "./Components/Pages/FillingPage";
import UaeConsultantPage from "./Components/Pages/UaeConsultantPage";
import Book from "./Components/BookComponents/Book";
import NewWhatsAppDashboard from "./Components/Pages/NewWhatsAppDashboard";
import PricingDashboard from "./Components/Pages/PricingDashboard";
import MetaDashboard from "./Components/Pages/MetaDashboard";
import LoginPage from "./Components/Pages/LoginPage";
import DashboardHome from "./Components/Pages/DashboardHome";
import BlogCMSDashboard from "./Components/Pages/BlogCMSDashboard";
import CategoriesDashboard from "./Components/Pages/CategoriesDashboard";

const App = () => {
  return (
    <>
    <Scroll />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardHome />} />
        <Route path="/dashboard/whatsapp" element={<NewWhatsAppDashboard />} />
        <Route path="/dashboard/pricing" element={<PricingDashboard />} />
        <Route path="/dashboard/meta" element={<MetaDashboard />} />
        <Route path="/dashboard/blogs" element={<BlogCMSDashboard />} />
        <Route path="/dashboard/categories" element={<CategoriesDashboard />} />
        <Route path="/accounting-and-bookkeeping-in-uae"  element ={<Book/>}  />
        <Route path="/corporate-tax-registration-uae-consultant" element ={<UaeConsultantPage/>} />
         <Route path="/corporate-tax-filing-in-uae" element ={<FillingPage/>} />
        <Route path="/corporate-tax-consultant-dubai" element={<DubaiPage />} />
        <Route path="/vat-registration-uae-consultant" element={<VatConsultant/>} />

        <Route path= "/vat-registration-certificate-uae" element={<Vatcertificate/>} />
        <Route path="/vat-registration-uae" element={<VatRegistration />} />
        <Route path="/vat-second" element={< VatsecondRegistration/>} />
        <Route path="/corporate-tax-registration-uae" element={<LandingPage />} />
        <Route path="/corporate-tax-registration-in-uae" element={<CtainLandingPage/>} />
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing-vat-registration" element={<PricibgPage />} />
        <Route path="/priceVatAccount" element={<VatAccounting />} />
        <Route path="/priceVatDeregister" element={<VatDeregister />} />
        <Route path="/priceOutsource" element={<VatOutsource />} />
        <Route path="/priceVatReturn" element={<VatReturnfill />} />
        <Route path="/vat-registration" element={<VatNewRegistrationPage />} />
        <Route path="/vat-de-registration" element={<VatNewDeregistrationPage />} />
        <Route path="/outsource-cfo-service" element={<VatNewOutsourcePage />} />
        <Route path="/accounting-and-bookkeeping-services" element={<VatNewAccountingPage />}
        />
        <Route path="/vat-return-filling" element={<VatNewReturnfillingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
};

export default App;
