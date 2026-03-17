import React from 'react'
import NewPrice from '../PricingPageComponents/NewPrice'
import Navbar from '../CommonComponents/Navbar'
import CalltoAction from '../CommonComponents/CalltoAction'
import PricingPlans from '../PricingPageComponents/PricingPlans'


const PricibgPage = () => {
  return (
    <div className='prize-vatcss'>
    <Navbar/>
    <NewPrice/>
    <PricingPlans/>
    <CalltoAction/>
    </div>
  )
}

export default PricibgPage