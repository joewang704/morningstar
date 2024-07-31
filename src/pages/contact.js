import * as React from "react"
import styled from '@emotion/styled'
import { useForm, ValidationError } from '@formspree/react'

import Navbar from '../components/navbar'
import Layout from '../components/layout'
import { Button } from '../components/styles'
import { Instagram, Youtube, Facebook } from '../components/icons'
import { HeaderAccentText, HeaderText } from "."

const Content = styled.div`
  display: flex;
`

const Left = styled.div`
  width: 50%;
`

const Right = styled.div`
  width: 50%;
  margin-top: -40px;
`

const Icons = styled.div`
  img {
    filter: invert(100%);
  }
`

const ContactPage = () => {
  return (
    <Layout>
      <Navbar />
      <div className="relative text-black p-12">
        <HeaderAccentText className="mb-2">Contact Form</HeaderAccentText>
        <Content>
          <Left>
            <div className="flex justify-between mr-10">
              <HeaderText>Enroll With Us</HeaderText>
              <Icons className="flex justify-end items-end [&>a]:mx-2 mb-4">
              <Instagram />
              <Facebook />
              <Youtube width={45} />
              </Icons>
            </div>
            <ContactForm />
          </Left>
          <Right>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1653.1810731708115!2d-84.18577216674574!3d34.034580337567704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f598b4c3970a95%3A0xed88a4c66cc19725!2sMorningStar%20Dance%20Academy%20of%20Atlanta!5e0!3m2!1sen!2sus!4v1692928730877!5m2!1sen!2sus"
              height="700"
              style={{ border: 0, margin: '0 auto', maxWidth: '1200px', width: '100%' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            >
            </iframe>
          </Right>
        </Content>
      </div>
    </Layout>
  )
}

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mqkvpjpg");

  if (state.succeeded) {
      return <p className="text-lg mt-8 text-slate-800">Thanks for joining! We'll reach out soon with updates on the status of your application.</p>;
  }
  console.log(state)

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col mr-auto mt-10 pr-12">
        <div className="flex">
          <div className="w-1/2 pr-4">
            <label htmlFor="name">
              Your Name
            </label><br />
            <input
              id="name"
              type="text" 
              name="name"
              className="border border-slate-400 rounded p-2 w-full"
              placeholder="First and Last"
              required
            />
            <ValidationError 
              prefix="Name" 
              field="name"
              errors={state.errors}
              className="text-sm text-red-400 mt-1"
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="phone">
              Your Phone
            </label><br />
            <input
              id="phone"
              type="tel" 
              name="phone"
              className="border border-slate-400 rounded p-2 w-full"
              placeholder="ex. (123)-345-5678"
              required
            />
            <ValidationError 
              prefix="Phone" 
              field="phone"
              errors={state.errors}
              className="text-sm text-red-400 mt-1"
            />
          </div>
        </div>
        <label htmlFor="email" className="mt-4">
          Your Email
        </label>
        <input
          id="email"
          type="email" 
          name="email"
          className="border border-slate-400 rounded p-2"
          placeholder="example@gmail.com"
          required
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
          className="text-sm text-red-400 mt-1"
        />
        <label htmlFor="message" className="mt-4">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="border border-slate-400 rounded p-2"
          rows="4"
          placeholder="Tell us about you, which program you'd like to enroll in, and why you'd be a good fit for that program!"
          required
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
          className="text-sm text-red-400 mt-1"
        />
        <ValidationError 
          errors={state.errors}
          className="text-sm text-red-400 mt-1"
        />
        <Button
          type="submit"
          className="mt-8 mx-auto w-full"
          disabled={state.submitting}
        >
          Submit
        </Button>
      </form>
    </>
  );
}

export default ContactPage
