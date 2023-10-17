import * as React from "react"
import styled from '@emotion/styled'
import { useForm, ValidationError } from '@formspree/react'

import Navbar from '../components/navbar'
import Layout from '../components/layout'
import { Button, Heading } from '../components/styles'
import { Instagram, Youtube, Facebook } from '../components/icons'


const BG = styled.img`
  position: fixed;
  top: 60px;
  opacity: .1;
`

const ContactPage = () => {
  return (
    <Layout>
      <Navbar theme="light" />
      <div className="relative text-black p-12">
        <Heading>
          <div>Contact us</div>
          <div className="mx-auto flex justify-center mt-10 [&>a]:mx-2">
            <Youtube width="2.78rem" height="2rem" />
            <Instagram width="2rem" height="2rem" />
            <Facebook width="2rem" height="2rem" />
          </div>
        </Heading>
        <ContactForm />
      </div>
    </Layout>
  )
}

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mqkvpjpg");

  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col max-w-lg m-auto">
        <label htmlFor="email">
          Your Email
        </label>
        <input
          id="email"
          type="email" 
          name="email"
          className="border border-slate-400 rounded p-2"
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
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
          className="text-sm text-red-400 mt-1"
        />
        <Button
          type="submit"
          className="mt-6 mx-auto w-full"
          disabled={state.submitting}
        >
          Submit
        </Button>
      </form>
    </>
  );
}

export default ContactPage
