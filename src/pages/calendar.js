import * as React from "react"
import Navbar from '../components/navbar'
import { Heading } from '../components/styles'
import styled from '@emotion/styled'

const CalendarPage = () => {
  return (
    <>
    <Navbar theme="light" />
      <div className="relative text-black p-12">
        <Heading>Calendar</Heading>
        <div>Aug 21, Recital</div>
        <div>Sept 5, Special Event 1</div>
        <div>Nov 9, Special Event 2</div>
        <div>Dec 10, Special Event 3</div>
      </div>
    </>
  )
}

export default CalendarPage
