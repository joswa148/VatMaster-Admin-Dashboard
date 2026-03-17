import React from 'react'
import Navbar from '../CommonComponents/Navbar'
import CalltoAction from '../CommonComponents/CalltoAction'
import VatNewDeregistration from '../NewVatComponents/VatNewDeregistration'

function VatNewDeregistrationPage() {
  return (
    <div>
       <Navbar />
    <VatNewDeregistration />
   
    <CalltoAction />

    </div>
  )
}

export default VatNewDeregistrationPage
