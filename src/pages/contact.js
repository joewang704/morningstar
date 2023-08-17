import * as React from "react"
import Navbar from '../components/navbar'

import { useForm, ValidationError } from '@formspree/react';

const ContactPage = () => {
  return (
    <>
    <Navbar theme="light" />
      <div className="relative text-black p-12">
        <h1 style={{ fontFamily: 'Belgiano', letterSpacing: '.25rem' }}
          className="uppercase text-headlineorg font-semibold text-6xl whitespace-nowrap mb-12">Contact</h1>
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
    <form onSubmit={handleSubmit} className="flex flex-col max-w-lg">
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
      <button type="submit" disabled={state.submitting} className="py-2 px-8 rounded border mt-6 max-w-fit">
        Submit
      </button>
    </form>
  );
}

export default ContactPage
