import React, { useState } from "react"
import styled from '@emotion/styled'

import Navbar from '../components/navbar'
import Layout from '../components/layout'
import { HeaderAccentText, HeaderText } from "."
import youngDancer from '../images/program/young_dancer.jpg'
import intermediateDancer from '../images/program/intermediate_dancer.jpg'
import advancedDancer from '../images/program/advanced_dancer.jpg'

const CLASS_INFO = [
  {
    title: 'Young Dancer Program',
    subtext: '(Beginner - Level 3)',
    description: 'Classes for kids combining movement and music to help students develop body awareness, rhythm, flexibility, coordination, and confidence while learning ballet vocabulary. Beginner is 1 class per week. Starting from Level 1, there will be Chinese Folk class in addition to ballet. Starting Level 3 classes will be TWICE a week, Chinese Folk only on the weekend.',
    img: youngDancer,
    classes: [
      {
        title: 'Beginner',
        schedule: [
          {
            name: 'Beginner A',
            description: 'Saturday 12:45pm (1 hour)',
          },
          {
            name: 'Beginner B',
            description: 'Sunday 12:45pm (1 hour)',
          },
        ]
      },
      {
        title: 'Level 1',
        schedule: [
          {
            name: 'Level 1 A',
            description: 'Saturday 5pm (1.5 hours)',
          },
          {
            name: 'Level 1 B',
            description: 'Sunday 5pm (1.5 hours)',
          },
        ]
      },
      {
        title: 'Level 2',
        schedule: [
          {
            name: 'Level 2 A',
            description: 'Saturday 3:30pm (1.5 hours)',
          },
          {
            name: 'Level 2 B',
            description: 'Sunday 3:30 pm (1.5 hours)',
          },
          {
            name: 'Level 2 D',
            description: 'Sunday 5:00pm (1.5 hours)',
          },
        ]
      },
      {
        title: 'Level 3',
        schedule: [
          {
            name: 'Level 3 A',
            description: 'Saturday 3:30pm (1.5 hours), Wednesday 6:30pm (1 hour)',
          },
          {
            name: 'Level 3 B',
            description: 'Sunday 3:30 pm (1.5 hours), Friday 6:30pm (1 hour)',
          },
          {
            name: 'Level 3 C',
            description: 'Sunday 5:00pm (1.5 hours), Thursday 6:30pm (1 hour)',
          },
        ]
      },
    ]
  },
  {
    title: 'Intermediate Dancer Program',
    subtext: '(Level 4 - Level 7)',
    description: 'Structured ballet class focusing on proper posture, technique, and vocabulary with introduction of the use of ballet barre in Level 4. Level 5 students will be introduced to contemporary style dance. Level 5 and above learn 3 styles - Ballet, Folk, Contemporary.',
    img: intermediateDancer,
    classes: [
      {
        title: 'Level 4',
        schedule: [
          {
            name: 'Level 4 A',
            description: 'Saturday 2:45pm (1.5 hours), Wednesday 6:30pm (1 hour)',
          },
          {
            name: 'Level 4 B',
            description: 'Sunday 2:45pm (1.5 hours), Friday 6:30pm (1 hour)',
          },
        ]
      },
      {
        title: 'Level 5',
        schedule: [
          {
            name: 'Level 5 A',
            description: 'Saturday 1pm (2.5 hours), Tuesday 6:30pm (1 hour)',
          },
          {
            name: 'Level 5 B',
            description: 'Sunday 1pm (2.5 hours), Thursday 6:30pm (1 hour)',
          },
        ]
      },
      {
        title: 'Level 6',
        schedule: [
          {
            name: 'Level 6 A',
            description: 'Saturday 1pm (2.5 hours), Wednesday 7:30pm (1 hour)',
          },
        ]
      },
      {
        title: 'Level 7',
        schedule: [
          {
            name: 'Level 7 B',
            description: 'Sunday 9am (3.5 hours), Thursday 7:30pm (1.25 hours)',
          },
        ]
      },
    ]
  },
  {
    title: 'Advanced Dancer Program',
    subtext: '(Level 8 - Pre-Professional)',
    description: 'More fast paced and challenging movement within all 3 styles of dance. Starting Level 8 students will be introduced to pointe shoes (also dependent on level of strength per student, may only advance to pointe with instructors recommendation.)',
    img: advancedDancer,
    classes: [
      {
        title: 'Level 8',
        schedule: [
          {
            name: 'Level 8 A',
            description: 'Saturday 9am (3 hours), Tuesday 7:30pm (1.5 hours)',
          },
        ]
      },
      {
        title: 'Level 9',
        schedule: [
          {
            name: 'Level 9 A',
            description: 'Saturday 9am (3.5 hours), Tuesday 7:30pm (1.5 hours)',
          },
          {
            name: 'Level 9 B',
            description: 'Sunday 9am (3.5 hours), Thursday 7:30pm (1.5 hours)',
          },
        ]
      },
      {
        title: 'Pre-Professional',
        schedule: [
          {
            name: 'Pre-Professional A',
            description: 'Saturday 9am (3.5 hours), Wednesday 7:30pm (2.5 hours)',
          },
          {
            name: 'Pre-Professional B',
            description: 'Sunday 9am (3.5 hours), Friday 7:30pm (2.5 hours)',
          },
        ]
      },
    ]
  }
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

const Accordion = ({ title, subtitle, children, className }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className={className}>
      <Container onClick={() => setOpen(!open)}>
        <HeaderText id={title.toLowerCase().split(' ').join('-')}>{title}</HeaderText>
        <p className="text-stone-600 text-lg mt-5 ml-3">{subtitle}</p>
        {children && <i className={`chevron-${open ? 'down' : 'up'}`}><span className="sp-1"></span><span className="sp-2"></span></i>}
      </Container>
      {open && children}
    </div>
  )
}

const PageContainer = styled.div`
  min-height: 430px;
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 32px;
  ul {
    list-style: inside;
  }
`

const ProgramsPage = () => {
  return (
    <Layout>
      <Navbar />
      <PageContainer className="text-black p-12">
        <HeaderAccentText className="mb-2">OUR PROGRAMS</HeaderAccentText>
        {CLASS_INFO.map(({ title, subtext, description, classes, img }) => (
          <Accordion title={title} subtitle={subtext} className="relative">
            <br />
            <img src={img} className="rounded absolute top-15 -z-10 opacity-20" />
            <p className="py-4">{description}</p>
            <br />
            {classes.map(({ title, schedule }) => (
              <>
                <p className="font-bold text-3xl mt-1 mb-4">{title}</p>
                <div className="flex">
                  <div className="mr-16">
                    <p className="text-lg font-bold">Schedule</p>
                    <ul>
                      {schedule.map(({ name, description }) => (
                        <li>{name}: {description}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <br />
              </>
            ))}
            <br /><br />
          </Accordion>
        ))}
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
