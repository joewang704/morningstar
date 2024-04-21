import React, { useState } from "react"
import { Link } from "gatsby"
import styled from '@emotion/styled'

import Navbar from '../components/navbar'
import bg from "../images/bg.jpg"
import bg1 from "../images/bg1.jpg"
import bg2 from "../images/bg2.png"
import bg3 from "../images/bg3.jpg"
import bg4 from "../images/bg4.jpg"
import artisticDirector from "../images/artistic_director_hp.png"
import { DarkStyles, Button } from "../components/styles"
import Layout from '../components/layout'
import { IconWrapper, Left, Right } from '../components/icons'

const Container = styled.div`
  font-family: Inter;
  background-color: white;
`;

// Jumbotron section
const JumbotronSection = styled.div`
  background-color: black;
  height: calc(100vh - 137px);
`

const BGWrapper = styled.div`
  overflow: hidden;
  height: 100%;
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

// Director section

const DirectorSection = styled.div`
  background-color: white;
`;

// Programs section

const ProgramsSection = styled.div`
  background-color: #0E0A0B;
  color: white;
  text-align: center;
`;

const ProgramsCarousel = styled.div`
  width: 100vw;
  left: 50%;
  transform: translateX(-50%);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProgramsCarouselImages = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  flex-grow: 1;
  flex-shrink: 0;
`;

// Awards Section

const AwardsSection = styled.div`
  background-color: white;
  text-align: center;
`

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
          <JumbotronSection className="relative text-white">
            <Text className="absolute left-12 lg:left-24 top-20">
              <h1 style={{ fontFamily: 'Playfair Display' }}
                className="fade-in-text text-6xl whitespace-nowrap">We Provide Professional</h1>
              <h1 style={{ fontFamily: 'Playfair Display', letterSpacing: '.1rem' }}
                className="fade-in-text font-bold text-6xl whitespace-nowrap">Dance Coaching</h1>
              <p className="fade-in-text mt-6 mb-12 font-light text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
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
          </JumbotronSection>
          <DirectorSection className="px-24 py-36">
            <div className="flex">
              <div className="w-1/2">
                <HeaderAccentText className="mb-2">LOREM IPSUM</HeaderAccentText>
                <HeaderText>Artistic Director</HeaderText>
                <br />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <br />
                <p>
                  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <Button className="mt-12">Read More</Button>
              </div>
              <div className="w-1/2 text-center">
                <img src={artisticDirector} className="ml-auto" />
              </div>
            </div>
          </DirectorSection>
          <ProgramsSection className="px-24 py-36">
            <HeaderAccentText className="mb-2">PROGRAMS</HeaderAccentText>
            <HeaderText>Programs We Offer</HeaderText>
            <ProgramsCarousel className="mt-12">
              <IconWrapper className="p-4"><Left /></IconWrapper>
              <ProgramsCarouselImages>
                <div className="bg-white rounded" style={{ height: '300px', width: '32%' }}>Placeholder</div>
                <div className="bg-white rounded" style={{ height: '300px', width: '32%' }}>Placeholder</div>
                <div className="bg-white rounded" style={{ height: '300px', width: '32%' }}>Placeholder</div>
              </ProgramsCarouselImages>
              <IconWrapper className="p-4"><Right /></IconWrapper>
            </ProgramsCarousel>
            <Button className="mt-12">Read More</Button>
          </ProgramsSection>
          <AwardsSection className="px-24 py-36">
                <HeaderAccentText className="mb-2">AWARDS</HeaderAccentText>
                <HeaderText>Competitions We've Won</HeaderText>
                <ProgramsCarousel className="mt-12">
                  <ProgramsCarouselImages>
                    <div className="bg-white rounded" style={{ height: '100px', width: '32%' }}>Placeholder</div>
                    <div className="bg-white rounded" style={{ height: '100px', width: '32%' }}>Placeholder</div>
                    <div className="bg-white rounded" style={{ height: '100px', width: '32%' }}>Placeholder</div>
                  </ProgramsCarouselImages>
                </ProgramsCarousel>
          </AwardsSection>
      </Container>
    </Layout>
  )
}

const HeaderAccentText = ({ children, className }) => (
  <p className={className + ' text-lg'} style={{ color: '#8B6F4A', letterSpacing: '.4em' }}>
    {children}
  </p>
)

const HeaderText = ({ children, className }) => (
  <p className={className + ''} style={{ fontSize: '48px', fontFamily: 'Playfair Display', fontWeight: 700 }}>
    {children}
  </p>
)

export default IndexPage

export const Head = () => <DarkStyles />
