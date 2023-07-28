import * as React from "react"
import Navbar from '../components/navbar'
import bg from "../images/bg.jpg"

const IndexPage = () => {
  return (
    <>
    <Navbar />
      <div className="relative text-white">
        <h1 style={{ fontFamily: 'Belgiano', letterSpacing: '4px' }} className="fade-in-text uppercase absolute left-24 -top-20 text-headlineorg font-semibold text-6xl whitespace-nowrap">MorningStar Dance</h1>
        <h1 style={{ fontFamily: 'Belgiano', letterSpacing: '4px' }} className="fade-in-text uppercase absolute left-24 -top-6 text-headlineorg font-semibold text-6xl whitespace-nowrap">Academy of Atlanta</h1>
        <button style={{ fontWeight: 300 }} className="fade-in-text absolute top-12 left-20 text-lg uppercase py-4 px-4 hover:underline">View Our Performances {'>'}{'>'}</button>
        <img
          src={bg}
          alt="Hero Image"
          className="mt-40"
        />
      </div>
    </>
  )
}

export default IndexPage

export const Head = () => <></>
