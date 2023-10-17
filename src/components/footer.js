import React from 'react'
import styled from '@emotion/styled'

import { Instagram, Youtube, Facebook } from '../components/icons'

const Container = styled.div`
  background-color: rgb(239, 238, 234);
  border-top: 1px solid #EFEFEF;
  color: rgba(35, 33, 41, 0.7);
`

const Header = styled.div`
  margin-bottom: 1rem;
  color: #444;
  font-weight: 600;
  text-transform: uppercase;
`

const Icons = styled.div`
  a {
    margin-right: 8px;
  }
`

const Footer = () => (
  <Container className="mx-auto mt-20 p-10">
    <div style={{ maxWidth: '800px', margin: 'auto' }}>
      <div className="grid grid-cols-2">
        <div>
          <Header>Company</Header>
          <div>
            <a href="/story">
              About
            </a>
          </div>
          <div>
            <a href="/location">
              Location
            </a>
          </div>
          <div>
            <a href="/policy">
              Policy
            </a>
          </div>
        </div>
        <div>
          <Header>Contact Us</Header>
          <Icons className="flex">
            <Youtube width="2.78rem" height="2rem" />
            <Instagram width="2rem" height="2rem" />
            <Facebook width="2rem" height="2rem" />
          </Icons>
          <div className="mt-4">
            <a href="/contact">
              info.msda@morningstardance.com
            </a>
          </div>
          <div className="mt-1">
            <a href="/contact">
              678-516-3026 / 678-471-9666
            </a>
          </div>
        </div>
      </div>
    </div>
  </Container>
)

export default Footer