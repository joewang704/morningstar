import * as React from "react"
import { Link } from "gatsby"
import styled from '@emotion/styled'

import Navbar from '../components/navbar'
import bg from "../images/bg.jpg"
import { DarkStyles } from "../components/styles"
import Layout from '../components/layout'

const BGWrapper = styled.div`
  overflow: hidden;
`

const Container = styled.div`
  background-color: black;
  height: 100%;
`;

const IndexPage = () => {
  return (
    <Layout>
      <Container>
        <Navbar />
          <div className="relative text-white">
            <h1 style={{ fontFamily: 'Belgiano', letterSpacing: '.25rem' }}
              className="fade-in-text uppercase absolute left-12 lg:left-24 -top-20 text-headlineorg font-semibold text-6xl whitespace-nowrap">MorningStar Dance</h1>
            <h1 style={{ fontFamily: 'Belgiano', letterSpacing: '.25rem' }}
              className="fade-in-text uppercase absolute left-12 lg:left-24 -top-6 text-headlineorg font-semibold text-6xl whitespace-nowrap">Academy of Atlanta</h1>
            <Link to="programs"><button style={{ fontWeight: 300 }} className="fade-in-text absolute top-12 left-8 lg:left-20 text-lg uppercase py-4 px-4 hover:underline">View Our Programs {'>'}{'>'}</button></Link>
            <BGWrapper
                className="mt-40 md:mt-40 lg:mt-40"
            >
              <img
                src={bg}
                alt="Hero Image"
                style={{ minWidth: '1000px' }}
              />
            </BGWrapper>
          </div>
      </Container>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <DarkStyles />
