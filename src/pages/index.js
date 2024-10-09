import React, { useState, useRef } from "react"
import { Link } from "gatsby"
import styled from '@emotion/styled'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

import Navbar from '../components/navbar'
import bg1 from "../images/bg1_david.png"
import bg2 from "../images/home_scroller_2.png"
import bg3 from "../images/home_scroller_3.png"
import bg4 from "../images/home_scroller_4.png"
import prixAward from '../images/home/prix_award.png'
import helsinkiAward from '../images/home/helsinki_award.png'
import usaibcAward from '../images/home/usaibc_award.png'
import youthAward from '../images/home/youth_award.png'
import bgvpAward from '../images/home/bgvp_award.png'
import abcAward from '../images/home/abc_award.png'
import wbcAward from '../images/home/wbc_award.png'
import beijingAward from '../images/home/beijing_award.png'
import ubcAward from '../images/home/ubc_award.png'
import showAward from '../images/home/show_award.png'

// Event images
import poster1 from '../images/home/temp/poster1.jpg'
import poster2 from '../images/home/temp/poster2.jpg'
import poster3 from '../images/home/temp/poster3.jpg'
import poster4 from '../images/home/temp/poster4.jpg'

import harvard from '../images/home/harvard.svg'
import stanford from '../images/home/stanford.png'
import columbia from '../images/home/columbia.png'
import mit from '../images/home/mit.png'
import princeton from '../images/home/princeton.png'
import brown from '../images/home/brown.png'
import penn from '../images/home/penn.png'

import { Facebook, Youtube, Instagram } from '../components/icons'
import artisticDirector from "../images/home/xiaochen.jpeg"
import young from '../images/young_hp.jpg'
import mid from '../images/home/intermediate_dancer.jpeg'
import adv from '../images/adv_hp.png'
import { DarkStyles, Button } from "../components/styles"
import Layout from '../components/layout'

const Container = styled.div`
  font-family: Inter;
  background-color: white;
`;

const gold = '#8B6F4A';

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
  display: flex;
  flex-direction: column;
  justify-content: center;
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

const ProgramLink = styled(Link)`
  margin-top: 24px;
  color: ${gold};
  cursor: pointer;
`;

// Awards Section

const AwardsSection = styled.div`
  background-color: white;
  text-align: center;
`

const Awards = styled.div`
  img {
    display: inline-block;
    margin: 0 32px;
    opacity: .8;
    width: 200px;
  }
`;

// Alumni Section

const AlumniSection = styled.div`
  background-color: #efefef;
  color: black;
  text-align: center;
`

const show2024Event = true;

const BGs = show2024Event ? [poster1, poster2, poster3, poster4] : [bg1, bg2, bg3, bg4];

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
                  className="fade-in-text text-6xl whitespace-nowrap">{show2024Event ? 'Morning Stars 2024' : 'We Provide Professional'}</h1>
                <h1 style={{ fontFamily: 'Playfair Display', letterSpacing: '.1rem' }}
                  className="fade-in-text font-bold text-6xl whitespace-nowrap">{show2024Event ? "New Year's Event" : 'Dance Coaching'}</h1>
                <p className="fade-in-text mt-6 mb-12 font-light text-lg">{show2024Event ? "Come join us in celebrating our 20 year anniversary! Tickets available for purchase now." : "Receive top-quality dance instruction at Atlanta's premier dance academy"}</p>
                {show2024Event ? (
                  <Link to="https://www.eventbrite.com/e/nutcracker-ballet-show-20th-anniversary-gala-morningstar-dance-academy-tickets-1034576384817" target="_blank">
                    <Button>Buy Tickets</Button>
                  </Link>
                ) : <Link to="team"><Button>Explore Now</Button></Link>}
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
                      src={BGs[bg]}
                      ref={curBgRef}
                      alt="Hero Image"
                      style={bg === 2 && !show2024Event ? {} : { height: '100%' }}
                    />
                  </CSSTransition>
                </SwitchTransition>
              </BGWrapper>
              <div className="absolute right-[5%] top-2 flex flex-col items-center">
                <div className="bg-white w-px h-24 mb-12 mt-24"></div>
                <Facebook width={20} className="mb-12" />
                <Youtube width={35} className="mb-12" />
                <Instagram width={35} />
              </div>
            </JumbotronRight>
          </JumbotronSection>
          <DirectorSection className="px-24 py-24">
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
                <img src={artisticDirector} className="ml-auto rounded-md" />
              </div>
            </div>
          </DirectorSection>
          <ProgramsSection className="px-24 py-36">
            <HeaderAccentText className="mb-2">PROGRAMS</HeaderAccentText>
            <HeaderText>Programs We Offer</HeaderText>
            <ProgramsCarousel className="mt-12">
              <ProgramsCarouselImages>
                <div className="flex flex-col m-4" style={{ maxWidth: '455px' }} >
                  <div style={{ height: '320px' }}><img src={young} className="rounded" /></div>
                  <h1 style={{ fontFamily: 'Playfair Display' }}
                    className="text-3xl font-bold mb-4">Young Dancer Program</h1>
                  <p className="text-sm">Empowering kids with dance: building body awareness, rhythm, flexibility, and confidence through ballet.</p>
                  <ProgramLink to="/programs#young-dancer-program">View Details &#8594;</ProgramLink>
                </div>
                <div className="flex flex-col m-4" style={{ maxWidth: '455px' }}>
                  <div style={{ height: '320px' }}><img src={mid} className="rounded" /></div>
                  <h1 style={{ fontFamily: 'Playfair Display' }}
                    className="text-3xl font-bold mb-4">Intermediate Dancer Program</h1>
                  <p className="text-sm">Focusing on posture, technique, barre use, and contemporary dance.</p>
                  <ProgramLink to="/programs#intermediate-dancer-program">View Details &#8594;</ProgramLink>
                </div>
                <div className="flex flex-col m-4" style={{ maxWidth: '455px' }}>
                  <div style={{ height: '320px' }}><img src={adv} /></div>
                  <h1 style={{ fontFamily: 'Playfair Display' }}
                    className="text-3xl font-bold mb-4">Advanced Dancer Program</h1>
                  <p className="text-sm">Intense, fast-paced dance classes across all styles of dance. Includes our pre-professional class.</p>
                  <ProgramLink to="/programs#advanced-dancer-program">View Details &#8594;</ProgramLink>
                </div>
              </ProgramsCarouselImages>
            </ProgramsCarousel>
            <Link to="/contact"><Button className="mt-12">Enroll Now</Button></Link>
          </ProgramsSection>
          <AwardsSection className="px-24 py-36">
                <HeaderAccentText className="mb-2">AWARDS</HeaderAccentText>
                <HeaderText>Competitions</HeaderText>
                <ProgramsCarousel className="mt-12">
                  <Awards>
                    <img src={prixAward} />
                    <img src={helsinkiAward} />
                    <img src={usaibcAward} />
                    <img src={youthAward} />
                    <img src={bgvpAward} />
                    <br />
                    <img src={abcAward} style={{ filter: 'invert(1)', width: '280px' }} />
                    <img src={wbcAward} />
                    <img src={beijingAward} style={{ width: '320px' }} />
                    <img src={ubcAward} />
                    <img src={showAward} />
                  </Awards>
                </ProgramsCarousel>
          </AwardsSection>
          <AlumniSection className="px-24 py-36">
                <HeaderAccentText className="mb-2">ALUMNI</HeaderAccentText>
                <HeaderText>Our Success Stories</HeaderText>
                <ProgramsCarousel className="mt-12">
                  <Awards>
                    <img src={harvard} />
                    <img src={stanford} />
                    <img src={mit} />
                    <img src={columbia} />
                    <br />
                    <img src={princeton} />
                    <img src={brown} />
                    <img src={penn} />
                  </Awards>
                </ProgramsCarousel>
          </AlumniSection>
      </Container>
    </Layout>
  )
}

export const HeaderAccentText = ({ children, className }) => (
  <p className={className + ' text-lg uppercase'} style={{ color: gold, letterSpacing: '.4em' }}>
    {children}
  </p>
)

export const HeaderText = styled.p`
  font-size: 48px;
  font-family: Playfair Display;
  font-weight: 700;
`

export default IndexPage

export const Head = () => <DarkStyles />
