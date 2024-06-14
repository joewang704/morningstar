import React, { useState, useRef } from "react"
import { Link } from "gatsby"
import styled from '@emotion/styled'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

import Navbar from '../components/navbar'
import bg1 from "../images/bg1_david.png"
import bg2 from "../images/home_scroller_2.png"
import bg3 from "../images/home_scroller_3.png"
import bg4 from "../images/home_scroller_4.png"
import artisticDirector from "../images/xiaochen_hp.jpg"
import fb from "../images/fb_hp.svg"
import youtube from "../images/yt_hp.svg"
import insta from "../images/insta_hp.svg"
import twitter from "../images/twitter_hp.svg"
import young from '../images/young_hp.jpg'
import mid from '../images/mid_hp.png'
import adv from '../images/adv_hp.png'
import { DarkStyles, Button } from "../components/styles"
import Layout from '../components/layout'

const Container = styled.div`
  font-family: Inter;
  background-color: white;
`;

// Jumbotron section
const JumbotronSection = styled.div`
  background-color: black;
  height: calc(100vh - 137px);
  display: flex;
`
const JumbotronLeft = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: space-between;
`
const JumbotronRight = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
`

const BGWrapper = styled.div`
  overflow: hidden;
  height: 100%;
`

const PageNumber = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  cursor: pointer;
  z-index: 2;
`;

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
  justify-content: center;
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
  const bgRef = useRef(null);
  const bg1Ref = useRef(null);
  const bg2Ref = useRef(null);
  const bg3Ref = useRef(null);

  const bgRefs = [bgRef, bg1Ref, bg2Ref, bg3Ref]
  const curBgRef = bgRefs[bg]

  return (
    <Layout>
      <Container>
        <Navbar />
          <JumbotronSection className="relative text-white">
            <JumbotronLeft>
              <Text className="ml-12 lg:ml-24 mt-40">
                <h1 style={{ fontFamily: 'Playfair Display' }}
                  className="fade-in-text text-6xl whitespace-nowrap">We Provide Professional</h1>
                <h1 style={{ fontFamily: 'Playfair Display', letterSpacing: '.1rem' }}
                  className="fade-in-text font-bold text-6xl whitespace-nowrap">Dance Coaching</h1>
                <p className="fade-in-text mt-6 mb-12 font-light text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <Button>Explore Now</Button>
              </Text>
              <div className="bottom-12 mb-12 ml-12 lg:ml-24 text-xl flex items-center font-extralight">
                {[0, 1, 2, 3].map(bgNum => {
                  const displayNum = `0${bgNum + 1}`;
                  const isLast = bgNum === 3;
                  const onClick = () => setBg(bgNum);

                  if (bg === bgNum) {
                    if (isLast) {
                      return <>
                        <div className="h-px w-44 bg-white"></div>
                        <PageNumber className="font-bold" onClick={onClick}>{displayNum}</PageNumber>
                      </>
                    }
                    return <>
                      <PageNumber className="font-bold" onClick={onClick}>{displayNum}</PageNumber>
                      <div className="h-px w-44 bg-white"></div>
                    </>
                  }
                  return <PageNumber onClick={onClick}>{displayNum}</PageNumber>
                })
                }
              </div>
            </JumbotronLeft>
            <JumbotronRight>
              <BGWrapper>
                <SwitchTransition mode="out-in">
                  <CSSTransition
                    key={"bg" + bg}
                    nodeRef={curBgRef}
                    addEndListener={(done) => {
                      curBgRef.current.addEventListener("transitionend", done, false);
                    }}
                    classNames="fade"
                  >
                    <img
                      onClick={() => setBg(2)}
                      src={BGs[bg]}
                      ref={curBgRef}
                      alt="Hero Image"
                      style={{ height: '100%' }}
                    />
                  </CSSTransition>
                </SwitchTransition>
              </BGWrapper>
              <div className="absolute right-[5%] top-2 flex flex-col items-center">
                <div className="bg-white w-px h-24 mb-12 mt-24"></div>
                <img src={fb} width={20} className="mb-12" />
                <img src={twitter} width={35} className="mb-12" />
                <img src={youtube} width={35} className="mb-12" />
                <img src={insta} width={35} />
              </div>
            </JumbotronRight>
          </JumbotronSection>
          <DirectorSection className="px-24 py-36">
            <div className="flex">
              <div className="w-1/2">
                <HeaderAccentText className="mb-2">MEET OUR</HeaderAccentText>
                <HeaderText>Artistic Director</HeaderText>
                <div className="my-16" style={{ color: '#444', fontSize: '18px', lineHeight: '30px' }}>
                  <p style={{ fontSize: '18px' }}>"Embarking on this journey, I envisioned a sanctuary where passion meets technique, where dreams take flight through the graceful art of ballet. With each step, we strive to nurture talent, inspire creativity, and illuminate the stage with the brilliance of our dancers' performances."</p>
                  <br />
                  - Chen Xiao
                </div>
                <Link to="/team"><Button>Read More</Button></Link>
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
              {/* <IconWrapper className="p-4"><Left /></IconWrapper> */}
              <ProgramsCarouselImages>
                <div className="flex flex-col m-4" style={{ maxWidth: '455px' }} >
                  <div style={{ height: '320px' }}><img src={young} className="rounded" /></div>
                  <h1 style={{ fontFamily: 'Playfair Display' }}
                    className="text-3xl font-bold mb-4">Young Dancer Program</h1>
                    <p className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                </div>
                <div className="flex flex-col m-4" style={{ maxWidth: '455px' }}>
                  <div style={{ height: '320px' }}><img src={mid} /></div>
                  <h1 style={{ fontFamily: 'Playfair Display' }}
                    className="text-3xl font-bold mb-4">Intermediate Dancer Program</h1>
                  <p className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                </div>
                <div className="flex flex-col m-4" style={{ maxWidth: '455px' }}>
                  <div style={{ height: '320px' }}><img src={adv} /></div>
                  <h1 style={{ fontFamily: 'Playfair Display' }}
                    className="text-3xl font-bold mb-4">Advanced Dancer Program</h1>
                  <p className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                </div>
              </ProgramsCarouselImages>
              {/* <IconWrapper className="p-4"><Right /></IconWrapper> */}
            </ProgramsCarousel>
            <Button className="mt-12">View Details</Button>
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
