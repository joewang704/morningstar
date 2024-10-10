import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { Instagram, Youtube, Facebook } from '../components/icons'
import logo from '../images/logo.svg'

const Container = styled.div`
  background-color: black;
  color: white;
`

const Header = styled.div`
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: .1em;
  color: #8B6F4A;
  font-size: 18px;
`

const Icons = styled.div`
  img {
    margin-right: 12px;
  }
`

const Footer = () => (
  <Container className="mx-auto p-10">
    <div style={{ maxWidth: '1200px', margin: 'auto' }}>
      <div className="grid grid-cols-4">
        <div>
          <img src={logo} />
        </div>
        <div>
          <Header>Sitemap</Header>
          <div className="mb-1">
            <Link href="/">
              Home
            </Link>
          </div>
          <div className="mb-1">
            <Link href="/story">
              About Us
            </Link>
          </div>
          <div className="mb-1">
            <Link href="/programs">
              Programs
            </Link>
          </div>
          <div className="mb-1">
            <Link href="/calendar">
              Calendar
            </Link>
          </div>
          <div>
            <Link href="https://app.thestudiodirector.com/morningstardanceacademy/portal.sd?page=Login" target="_blank">
              Portal
            </Link>
          </div>
        </div>
        <div>
          <Header>Other</Header>
          <div className="mb-1">
            <Link href="/team">
              Our Team
            </Link>
          </div>
          <div className="mb-1">
            <Link href="/contact">
              Contact Us
            </Link>
          </div>
          <div className="mb-1">
            <Link href="/policy">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div>
          <Header>Follow Us</Header>
          <Icons className="flex items-center">
            <Instagram width={30} />
            <Facebook width={18} />
            <Youtube width={35} />
          </Icons>
          <div className="mt-4">
            <Link href="/contact">
              info.msda@morningstardance.com
            </Link>
          </div>
          <div className="mt-1">
            <Link href="/contact">
              678-516-3026 / 678-471-9666
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Container>
)

export default Footer