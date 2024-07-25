import * as React from "react"
import styled from '@emotion/styled'

import Navbar from '../components/navbar'
import { Heading } from '../components/styles'
import Layout from '../components/layout'

const CalendarPage = () => {
  return (
    <Layout>
      <Navbar />
      <div className="relative text-black p-12">
        <Heading>Calendar</Heading>
        <div>Aug 21, Recital</div>
        <div>Sept 5, Special Event 1</div>
        <div>Nov 9, Special Event 2</div>
        <div>Dec 10, Special Event 3</div>
      </div>
    </Layout>
  )
}

export default CalendarPage
