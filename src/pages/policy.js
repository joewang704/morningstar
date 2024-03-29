import * as React from "react"

import Navbar from '../components/navbar'
import { Heading } from '../components/styles'
import Layout from '../components/layout'

const PolicyPage = () => {
  return (
    <Layout>
      <Navbar theme="light" />
      <div className="relative text-black p-12">
        <Heading>School Regulation</Heading>
          <p>As students, have agreed in the school registration, school will provide a fair and healthy environment for students. Students should learn dancing skills, beauty, confidence, respect, and responsibility.</p>
          <br />
          <ul className="list-disc ml-4">
            <li>All students must complete required class hours before moving up to the next level except in some special cases which are approved by the school.</li>
            <li>Any students who join the class or try class, must make a registration before taking any class.</li>
            <li>Students must wear school required leotard and required ballet shoes in the class</li>
            <li>Students have required hair style in the class. must make a ballet hair bun on back, no hair around face.</li>
            <li>Student should come to the class on time. recommended to arrive at least 5-10 minutes earlier to get ready for the class. come to class late, must wait aside of the classroom until the class teacher allows you to join in.</li>
            <li>Students should be No Jewelry allowed in the class.</li>
            <li>Students should be No talking while the teacher is talking on the class.</li>
            <li>Students should not make noise, speak loudly, play or run in the classroom and hallway, especially along any glass window in the school.</li>
            <li>Student should turn off cell phone during the class (not just silence or put on vibrate)</li>
            <li>No video or take picture in class expect you have permission from your class teacher or school</li>
            <li>Student always stay in your class, if you need leave early, please get permission from your class teacher</li>
            <li>Students should keep the school area clean, no littering.</li>
            <li>Students should not bring any valuable personal items to the school or leave them in the dressing room. The dance School will not be held responsible for any students and their personal welfare.</li>
            <li>NO food and drink (expect water) allowed in the change room and classroom.</li>
            <li>Be courteous and respectful, giving applaud and thank to teacher at end of class.</li>
          </ul>
      </div>
      <div className="relative text-black p-12">
        <Heading>Liability Agreement</Heading>
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
      </div>
    </Layout>
  )
}

export default PolicyPage
