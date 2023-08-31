import * as React from "react"

import Navbar from '../components/navbar'
import { Heading } from '../components/styles'

const LocationPage = () => {
  return (
    <>
      <Navbar theme="light" />
      <div className="relative text-black p-12">
        <Heading>Location & Directions</Heading>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1653.1810731708115!2d-84.18577216674574!3d34.034580337567704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f598b4c3970a95%3A0xed88a4c66cc19725!2sMorningStar%20Dance%20Academy%20of%20Atlanta!5e0!3m2!1sen!2sus!4v1692928730877!5m2!1sen!2sus"
          height="700"
          style={{ border: 0, margin: '0 auto', maxWidth: '1200px', width: '100%' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        >
        </iframe>
      </div>
    </>
  )
}

export default LocationPage
