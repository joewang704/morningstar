import React, { useState } from "react"
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import Navbar from '../components/navbar'
import { Heading, Button } from '../components/styles'
import Layout from '../components/layout'

const programs = [
  {
    title: 'Young Dancer Program',
    description: 'Test',
    link: '',
    subprograms: [
      {
        title: 'Beginner Level',
        description: 'Designed for individuals with little to no prior experience. Discover fundamental techniques, ballet vocabulary, and graceful movements while developing body awareness and creative expression.',
        link: 'young_beginner',
      },
      {
        title: 'Level 1',
        description: 'This class builds upon fundamental techniques, refining posture, alignment, and turnout while introducing more intricate ballet vocabulary and movements.',
        link: 'young_1',
      },
      {
        title: 'Level 2',
        description: 'In this class, we delve deeper into the art of ballet, refining and expanding upon the foundational techniques acquired earlier. Students will tackle more intricate combinations at the barre and center, honing their balance, control, and artistic expression.',
        link: 'young_2',
      },
      {
        title: 'Level 3',
        description: 'In this class, we delve deeper into the art of ballet, refining and expanding upon the foundational techniques acquired earlier. Students will tackle more intricate combinations at the barre and center, honing their balance, control, and artistic expression.',
        link: 'young_3',
      },
    ]
  },
  {
    title: 'Intermediate Dancer Program',
    description: 'Test',
    link: '',
    subprograms: [
      {
        title: 'Level 4',
        description: 'Designed for individuals with little to no prior experience. Discover fundamental techniques, ballet vocabulary, and graceful movements while developing body awareness and creative expression.',
        link: 'intermediate_4',
      },
      {
        title: 'Level 5',
        description: 'Designed for individuals with little to no prior experience. Discover fundamental techniques, ballet vocabulary, and graceful movements while developing body awareness and creative expression.',
        link: 'intermediate_4',
      },
      {
        title: 'Level 6',
        description: 'Designed for individuals with little to no prior experience. Discover fundamental techniques, ballet vocabulary, and graceful movements while developing body awareness and creative expression.',
        link: 'intermediate_4',
      },
      {
        title: 'Level 7',
        description: 'Designed for individuals with little to no prior experience. Discover fundamental techniques, ballet vocabulary, and graceful movements while developing body awareness and creative expression.',
        link: 'intermediate_4',
      },
    ]
  },
  {
    title: 'Advanced Dancer Program',
    description: 'Test',
    link: '',
    subprograms: [
      {
        title: 'Level 4',
        description: 'Designed for individuals with little to no prior experience. Discover fundamental techniques, ballet vocabulary, and graceful movements while developing body awareness and creative expression.',
        link: 'intermediate_4',
      },
      {
        title: 'Level 5',
        description: 'Designed for individuals with little to no prior experience. Discover fundamental techniques, ballet vocabulary, and graceful movements while developing body awareness and creative expression.',
        link: 'intermediate_4',
      },
      {
        title: 'Level 6',
        description: 'Designed for individuals with little to no prior experience. Discover fundamental techniques, ballet vocabulary, and graceful movements while developing body awareness and creative expression.',
        link: 'intermediate_4',
      },
      {
        title: 'Level 7',
        description: 'Designed for individuals with little to no prior experience. Discover fundamental techniques, ballet vocabulary, and graceful movements while developing body awareness and creative expression.',
        link: 'intermediate_4',
      },
    ]
  },
  {
    title: 'Special Training',
    description: 'Test',
    link: '',
  },
  {
    title: 'Summer Intensive',
    description: 'Test',
    link: '',
  },
  {
    title: 'Adult Program',
    description: 'Test',
    link: '',
  },
]

const Container = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  user-select: none;
  i {
    margin-left: .75rem;
    margin-top: .625rem;
  }
`;

const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <Container onClick={() => setOpen(!open)}>
        {/* <span style={{ fontSize: '28px', fontFamily: 'Belgiano', letterSpacing: '.07rem', textTransform: 'uppercase' }}>{title}</span> */}
        <div className="ml-8 mt-4 text-3xl" style={{ fontWeight: 300, fontFamily: 'Belgiano', letterSpacing: '.04rem' }}>{title}</div>
        {children && <i className={`indicator glyphicon chevron-${open ? 'down' : 'up'}`}><span className="sp-1"></span><span class="sp-2"></span></i>}
      </Container>
      <hr className="mt-1" />
      {open && children}
    </div>
  )
}

const ProgramItem = ({ title, description, link }) => {
  return (
    <div className="p-5 m-4 rounded bg-white shadow-lg">
      <div className="mb-2 text-xl">{title}</div>
      <div className="text-slate-500 mb-4 text-sm">{description}</div>
      <Link to={link}><Button>Learn More</Button></Link>
    </div>
  )
}

const BG = styled.div`
`

const ProgramsPage = () => {
  return (
    <Layout>
      <Navbar theme="light" />
      <BG className="relative text-black py-12">
        <Heading>Our programs</Heading>
        <div className="grid grid-cols-1">
          {programs.map(props => <Accordion {...props} children={
            props.subprograms ? (
              <div className="grid grid-cols-2 p-4 bg-gradient-to-b from-gray-50 via-gray-50 to-transparent">
                {props.subprograms.map(p => <ProgramItem {...p} />)}
              </div>
            ) : undefined
          } />)}
        </div>
      </BG>
      {/* <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div id="title"></div>
      <Navbar theme="dark" />
        <div style={{ color: 'white', padding: '48px' }}>
        <Heading>Our programs</Heading>
        <div className="grid grid-cols-1">
          {programs.map(props => <Accordion {...props} children={
            props.subprograms && props.subprograms.map(p => <ProgramItem {...p} />)
          } />)}
        </div>
        </div> */}
    </Layout>
  )
}

const Tile = ({ title, description, link }) => {
  return (
    <div>
      <h2 style={{ fontSize: '28px', fontFamily: 'Belgiano' }}>{title}</h2>
      {/* <img src={xiaochen} /> */}
      {description}
    </div>
  )
}

export default ProgramsPage
