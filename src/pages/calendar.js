import * as React from "react"
import styled from '@emotion/styled'

import Navbar from '../components/navbar'
import Layout from '../components/layout'
import { HeaderAccentText, HeaderText } from "."
import upcomingEvent from '../images/calendar/upcoming_event.jpg';

const CalendarPage = () => {
  return (
    <Layout>
      <Navbar />
      <div className="relative text-black p-12">
        <HeaderAccentText className="mb-2">OUR EVENTS</HeaderAccentText>
        <HeaderText className="mb-8">Calendar</HeaderText>
        <div className="flex">
          <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&bgcolor=%23ffffff&showTitle=0&showPrint=0&showCalendars=0&src=Y184YTIzMmU3N2MzZTM3NmY4M2IxNDZkNzUwODRjNzA5MWFjNDEwNjM1YjkxYjUxZDY2OTI3NDQ2OTYwYjg2YzJjQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23F09300" width="800" height="800" frameborder="0" scrolling="no"></iframe>
          <img src={upcomingEvent} width="40%" className="ml-8" />
        </div>
      </div>
    </Layout>
  )
}

export default CalendarPage
