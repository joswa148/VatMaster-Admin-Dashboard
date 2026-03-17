import React from 'react'
import ContactHero from '../ContectPageComponents/ContactHero'
import Navbar from '../CommonComponents/Navbar'
import CalltoAction from '../CommonComponents/CalltoAction'
import ContactSection from '../ContectPageComponents/ContactSection'


const ContactPage = () => {
  return (
    <>
    <Navbar/>
    <ContactHero/>
    <ContactSection/>
    <CalltoAction/>
    </>
  )
}

export default ContactPage