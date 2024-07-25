import * as React from "react"
import styled from '@emotion/styled'
import { useForm, ValidationError } from '@formspree/react'

import Navbar from '../components/navbar'
import Layout from '../components/layout'
import { Button, Heading } from '../components/styles'
import { Instagram, Youtube, Facebook } from '../components/icons'

const Content = styled.div`
  display: flex;
`

const Left = styled.div`
  width: 50%;
`

const Right = styled.div`
  width: 50%;
`

const ContactPage = () => {
  return (
    <Layout>
      <Navbar />
      <div className="relative text-black p-12">
        <Heading>
          <div>Contact us</div>
        </Heading>
        <Content>
          <Left>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1653.1810731708115!2d-84.18577216674574!3d34.034580337567704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f598b4c3970a95%3A0xed88a4c66cc19725!2sMorningStar%20Dance%20Academy%20of%20Atlanta!5e0!3m2!1sen!2sus!4v1692928730877!5m2!1sen!2sus"
              height="700"
              style={{ border: 0, margin: '0 auto', maxWidth: '1200px', width: '100%' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            >
            </iframe>
          </Left>
          <Right>
            {/* <div className="mx-auto flex justify-center mt-10 [&>a]:mx-2">
              <Youtube width="2.78rem" height="2rem" />
              <Instagram width="2rem" height="2rem" />
              <Facebook width="2rem" height="2rem" />
            </div> */}
            <ContactForm />
          </Right>
        </Content>
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
      <form onSubmit={handleSubmit} className="flex flex-col max-w-lg m-auto items-start">
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
