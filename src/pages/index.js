import React, { useState } from "react"
import { Link } from "gatsby"
import styled from '@emotion/styled'

import Navbar from '../components/navbar'
import bg from "../images/bg.jpg"
import bg1 from "../images/bg1.jpg"
import bg2 from "../images/bg2.png"
import bg3 from "../images/bg3.jpg"
import bg4 from "../images/bg4.jpg"
import { DarkStyles, Button } from "../components/styles"
import Layout from '../components/layout'

const Container = styled.div`
  background-color: black;
  height: 100%;
  font-family: Inter;
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

const BGs = [bg1, bg2, bg3, bg4]
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
            <Text className="absolute left-12 lg:left-24 top-20">
              <h1 style={{ fontFamily: 'Playfair Display' }}
                className="fade-in-text text-6xl whitespace-nowrap">We Provide Professional</h1>
              <h1 style={{ fontFamily: 'Playfair Display', letterSpacing: '.1rem' }}
                className="fade-in-text font-bold text-6xl whitespace-nowrap">Dance Coaching</h1>
              <p className="fade-in-text mt-6 mb-6 font-light text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <Button>Explore Now</Button>
            </Text>
            <BGWrapper>
              <img
                src={BGs[bg]}
                alt="Hero Image"
                style={{ minWidth: '1000px' }}
              />
              {/* {Gradient1BGs.includes(bg) && <Gradient1 />}
              <Gradient2 /> */}
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
