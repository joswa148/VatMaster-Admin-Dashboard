import React from 'react'
import Navbar from '../CommonComponents/Navbar'

import CalltoAction from '../CommonComponents/CalltoAction'
import VatNewAccounting from '../NewVatComponents/VatNewAccounting'

const VatNewAccountingPage = () => {
  return (
   <>
   <Navbar />
  <VatNewAccounting />
   <CalltoAction />
   </>
  )
}

export default VatNewAccountingPage