import React, { useState } from "react"
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import Navbar from '../components/navbar'
import { Heading, Button } from '../components/styles'
import Layout from '../components/layout'
import { HeaderAccentText, HeaderText } from "."

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

const Accordion = ({ title, subtitle, children }) => {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <Container onClick={() => setOpen(!open)}>
        <HeaderText>{title}</HeaderText>
        <p className="text-stone-600 text-lg mt-5 ml-3">{subtitle}</p>
        {children && <i className={`indicator glyphicon chevron-${open ? 'down' : 'up'}`}><span className="sp-1"></span><span class="sp-2"></span></i>}
      </Container>
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

const PageContainer = styled.div`
  ul {
    list-style: inside;
  }
`

const ProgramsPage = () => {
  return (
    <Layout>
      <Navbar />
      <PageContainer className="relative text-black p-12">
        <HeaderAccentText className="mb-2">OUR PROGRAMS</HeaderAccentText>
        <Accordion title="Young Dancer Program" subtitle="(Beginner - Level 3)">
          <br />
          <p className="text-stone-700">Classes for kids combining movement and music to help students develop body awareness, rhythm, flexibility, coordination, and confidence while learning ballet vocabulary. Beginner is 1 class per week. Starting from Level 1, there will be Chinese Folk class in addition to ballet. Starting Level 3 classes will be TWICE a week, Chinese Folk only on the weekend.</p>
          <br />
          <p className="font-bold text-3xl mt-1 mb-4">Beginner</p>
          <div className="flex">
            <div className="mr-16">
              <p className="text-lg font-bold">Schedule</p>
              <ul>
                <li>Beginner A: Saturday 12:45pm (1 hour)</li>
                <li>Beginner B: Sunday 12:45pm (1 hour)</li>
              </ul>
            </div>
            <div>
              <p className="text-lg font-bold">Tuition</p>
              <ul>
                <li>Semester tuition: $480</li>
                <li>Performance fee: $90</li>
                <li>Monthly 5 Installments: $XX</li>
              </ul>
            </div>
          </div>
          <br />
          <p className="font-bold text-3xl mt-1 mb-4">Level 1</p>
          <div className="flex">
            <div className="mr-16">
              <p className="text-lg font-bold">Schedule</p>
              <ul>
                <li>Beginner A: Saturday 12:45pm (1 hour)</li>
                <li>Beginner B: Sunday 12:45pm (1 hour)</li>
              </ul>
            </div>
            <div>
              <p className="text-lg font-bold">Tuition</p>
              <ul>
                <li>Semester tuition: $480</li>
                <li>Performance fee: $90</li>
                <li>Monthly 5 Installments: $XX</li>
              </ul>
            </div>
          </div>
          <br />
          <p className="font-bold text-3xl mt-1 mb-4">Level 2</p>
          <div className="flex">
            <div className="mr-16">
              <p className="text-lg font-bold">Schedule</p>
              <ul>
                <li>Beginner A: Saturday 12:45pm (1 hour)</li>
                <li>Beginner B: Sunday 12:45pm (1 hour)</li>
              </ul>
            </div>
            <div>
              <p className="text-lg font-bold">Tuition</p>
              <ul>
                <li>Semester tuition: $480</li>
                <li>Performance fee: $90</li>
                <li>Monthly 5 Installments: $XX</li>
              </ul>
            </div>
          </div>
          <br />
          <p className="font-bold text-3xl mt-1 mb-4">Level 3</p>
          <div className="flex">
            <div className="mr-16">
              <p className="text-lg font-bold">Schedule</p>
              <ul>
                <li>Beginner A: Saturday 12:45pm (1 hour)</li>
                <li>Beginner B: Sunday 12:45pm (1 hour)</li>
              </ul>
            </div>
            <div>
              <p className="text-lg font-bold">Tuition</p>
              <ul>
                <li>Semester tuition: $480</li>
                <li>Performance fee: $90</li>
                <li>Monthly 5 Installments: $XX</li>
              </ul>
            </div>
          </div>
        </Accordion>
        {/* <div className="grid grid-cols-1">
          {programs.map(props => <Accordion {...props} children={
            props.subprograms ? (
              <div className="grid grid-cols-2 p-4 bg-gradient-to-b from-gray-50 via-gray-50 to-transparent">
                {props.subprograms.map(p => <ProgramItem {...p} />)}
              </div>
            ) : undefined
          } />)}
        </div> */}
      </PageContainer>
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
