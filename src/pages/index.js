import React, { useState } from "react"
import { Link } from "gatsby"
import styled from '@emotion/styled'

import Navbar from '../components/navbar'
import bg from "../images/bg.jpg"
import bg2 from "../images/bg2.png"
import bg3 from "../images/bg3.jpg"
import bg4 from "../images/bg4.jpg"
import { DarkStyles } from "../components/styles"
import Layout from '../components/layout'

const Container = styled.div`
  background-color: black;
  height: 100%;
`;

// Jumbotron section
const BGWrapper = styled.div`
  overflow: hidden;
  height: calc(100vh - 57px)
`

const Gradient1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: linear-gradient(135deg, rgba(0,0,0,1) 0%, rgba(255,0,0,0) 100%);
`

const Gradient2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: linear-gradient(180deg, rgba(255,0,0,0) 0%, rgba(255,0,0,0) 70%, rgba(0,0,0,1) 100%);
`

const Text = styled.div`
  z-index: 2;
`

const Left = styled.div`
  position: absolute;
  left: 20px;
  top: 50%;
  cursor: pointer;
  padding: 4px;
  z-index: 10;
`

const Right = styled.div`
  position: absolute;
  right: 20px;
  top: 50%;
  cursor: pointer;
  padding: 4px;
  z-index: 10;
`

// Director section

const DirectorSection = styled.div`
  color: white;
`;

const BGs = [bg, bg2, bg3, bg4]
const Gradient1BGs = [0]

const IndexPage = () => {
  const [bg, setBg] = useState(0)

  const incBg = () => {
    setBg(bg + 1 > 3 ? 0 : bg + 1)
  }

  const decBg = () => {
    setBg(bg - 1 < 0 ? 3 : bg - 1)
  }

  return (
    <Layout>
      <Container>
        <Navbar />
          <div className="relative text-white">
            <Text className="absolute left-12 lg:left-24 top-20 uppercase">
              <h1 style={{ fontFamily: 'Belgiano', letterSpacing: '.25rem' }}
                className="fade-in-text text-headlineorg font-semibold text-6xl whitespace-nowrap">MorningStar Dance</h1>
              <h1 style={{ fontFamily: 'Belgiano', letterSpacing: '.25rem' }}
                className="fade-in-text -mt-2 text-headlineorg font-semibold text-6xl whitespace-nowrap">Academy of Atlanta</h1>
              <Link to="programs"><button style={{ fontWeight: 300 }} className="fade-in-text text-lg uppercase pt-4 hover:underline">View Our Programs {'>'}{'>'}</button></Link>
            </Text>
            <Left onClick={decBg}>{'<'}</Left>
            <Right onClick={incBg}>{'>'}</Right>
            <BGWrapper>
              <img
                src={BGs[bg]}
                alt="Hero Image"
                style={{ minWidth: '1000px' }}
              />
              {Gradient1BGs.includes(bg) && <Gradient1 />}
              <Gradient2 />
            </BGWrapper>
          </div>
          <DirectorSection>
            Xiao Chen Section
          </DirectorSection>
      </Container>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <DarkStyles />
