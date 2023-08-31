import * as React from "react"
import Navbar from '../components/navbar'
import { Button, Heading } from '../components/styles'

import { useForm, ValidationError } from '@formspree/react';

const ContactPage = () => {
  return (
    <>
    <Navbar theme="light" />
      <div className="relative text-black p-12">
        <Heading>Contact us</Heading>
        <ContactForm />
      </div>
    </>
  )
}

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mqkvpjpg");

  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col max-w-lg m-auto">
      <label htmlFor="email">
        Email Address
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
  );
}

export default ContactPage
