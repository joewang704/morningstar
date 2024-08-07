import * as React from "react"
import styled from '@emotion/styled'

import Navbar from '../components/navbar'
import Layout from '../components/layout'
import { HeaderAccentText, HeaderText } from "."

const Container = styled.div`
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 32px;
  li {
    margin-top: 4px;
  }
`

const PolicyPage = () => {
  return (
    <Layout>
      <Navbar />
      <Container className="relative text-black p-12">
        <HeaderAccentText className="mb-2">OUR GUIDELINES</HeaderAccentText>
        <HeaderText>School Policy</HeaderText>
        <br />
        <p>As students, have agreed in the school registration, school will provide a fair and healthy environment for students. Students should learn dancing skills, beauty, confidence, respect, and responsibility.</p>
        <br />
        <ul className="list-disc ml-4">
          <li>Students must complete required class hours before moving up to the next level - except in some special cases which approved by the school</li>
          <li>Students must register before attending any class</li>
          <li>Students must wear the school-required leotard and ballet shoes in class</li>
          <li>Students have a required hair style in class. Hair must be tied into a ballet bun in the back, with no hair around the face</li>
          <li>Students should arrive on time. It is recommended to arrive at least 5-10 minutes early to get ready. Those who come to class late must wait on the side of the classroom until the teacher signals you in</li>
          <li>Students should not wear jewelry to class</li>
          <li>Students should remain quiet while the teacher is talking in class</li>
          <li>Students should not make noise, speak loudly, or play/run in the classroom and hallway - especially along any glass window in the school</li>
          <li>Students should turn off their cell phones during class - not just put it on just silent/vibrate</li>
          <li>No videos or pictures may be taken in class without explicit permission from the class teacher or school</li>
          <li>Students always stay in their respective class. If you need leave early, please get permission from your class teacher</li>
          <li>Students should keep the school area clean. No littering.</li>
          <li>Students should not bring any valuable personal items to school or leave them in the dressing room. The school will not be held responsible for students' personal items.</li>
          <li>No food and drink (except water) allowed in the changing room and classroom.</li>
          <li>Be courteous and respectful.</li>
        </ul>
        <HeaderAccentText className="mb-2 mt-16">WAIVER</HeaderAccentText>
        <HeaderText>Liability Agreement</HeaderText>
        <br />
          <p>No liability is assumed by Morningstar Dance Academy of Atlanta for accidents caused by acts of person or persons on the premises in the capacity of student, account holder, parent, guardian, or guest. Person hereinafter signing contract on behalf of registering student assumer's responsibility for actions of said student.</p>
          <br />
          <p>My child (under 18 years of age) has permission to participate in dance classes and all other functions as a student duly registered in Morningstar Dance Academy of Atlanta. My child is in good health and has my physician's approval to participate . I understand I am responsible for dropping off and promptly picking up my child at the end of his/her class. I understand that my child will not be supervised outside of the classroom; therefore MorningStar Dance Academy of Atlanta will not be held responsible for my child welfare.</p>
          <br />
          <p>I understand there  are no waivers, discounts, refunds or credits for any missed classes due to schedule conflict, withdrawals, terminations, or illnesses. Exceptions can be made with a 3+ week prior written notice. Tuition will due the first week of student’ class start (include all class opened in the school). A late fee of $100 will be charged to the student’s account, if any tuition payment is more than 15 days later after due day.</p>
          <br />
          <p>I understand we must follow school regulations and requirements at all times when my child is in the dance school and class.</p>
          <br />
          <p>I authorize the MorningStar Dance Academy of Atlanta to obtain, store, and/or use (without payment) any photographs, slides, and /or videotapes of my child (mine) for public relation, marketing/advertising, and/or class training.</p>
          <br />
      </Container>
    </Layout>
  )
}

export default PolicyPage
