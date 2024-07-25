import React, { useState } from "react"
import styled from '@emotion/styled';
import { Link } from "gatsby"
import colors from 'tailwindcss/colors';

import { useBreakpoints } from "../utils/breakpoints";
import { Button } from '../components/styles'
import Menu from '../images/menu.js';
import logo from '../images/logo.svg'

const submenuBorder = '#4E4E4E'
const submenuGray = '#292929'

const MenuContainer = styled.div`
  color: #eee;
  background-color: black;
`;

const DesktopMenu = styled.div`
  & > div {
    &:hover {
      color: #bbb;
    }
  }
  .submenu {
    color: #ddd;
    background-color: ${submenuGray};
    border: 1px solid ${submenuBorder};
    border-radius: 4px;
  }
`;

const MobileMenu = styled.div`
  border-radius: 0 0 4px 4px;
  overflow: hidden;
  position: absolute;
  ${({ isLightTheme }) => ({
    backgroundColor: isLightTheme ? 'white' : 'black',
  })}
  div {
    &:hover {
      ${({ isLightTheme }) => ({ color: isLightTheme ? '#999' : '#aaa' })}
    }
  }
`;

const Navbar = () => {
  const { breakpoint } = useBreakpoints();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isLightTheme = false;

  if (typeof window === "undefined") {
    return (
      <MenuContainer className="flex justify-between w-full px-8">
        <Logo />
      </MenuContainer>
    )
  }

  if (breakpoint === 'desktop') {
    return (
      <MenuContainer className="flex justify-between w-full px-16 py-2">
        <Logo />
        <DesktopMenu className="flex items-center text-md">
          <Item link="">Home</Item>
          <Item sub={[
            { title: 'Our Team', link: 'team' },
            { title: 'Our Story', link: 'story' },
            { title: 'Location & Directions', link: 'location' },
          ]}>About Us</Item>
          <Item link="programs">Programs</Item>
          <Item sub={[
            { title: 'Calendar', link: 'calendar' },
            { title: 'School Policy & Waiver', link: 'policy' },
          ]}>School Info</Item>
          <Item link='https://app.thestudiodirector.com/morningstardanceacademy/portal.sd?page=Login' external>Portal</Item>
          <Item link='contact'>
            <Button>Contact Us</Button>
          </Item>
        </DesktopMenu>
      </MenuContainer>
    )
  }

  return (
    <MenuContainer className="flex justify-between w-full px-8">
      <Logo />
      <div className="relative py-4">
        <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)}><Menu color={isLightTheme ? 'black' : 'white'} /></div>
        {mobileMenuOpen && <MobileMenu isLightTheme={isLightTheme} className="top-full -right-8 flex flex-col text-3xl z-10 text-left items-end p-4">
          <MobileItem sub={[
            { title: 'Our Team', link: 'team' },
            { title: 'Our Story', link: 'story' },
            { title: 'Location & Directions', link: 'location' },
          ]}>About Us</MobileItem>
          <MobileItem link="programs">Programs</MobileItem>
          <MobileItem sub={[
            { title: 'Calendar', link: 'calendar' },
            { title: 'School Policy & Waiver', link: 'policy' },
          ]}>School Info</MobileItem>
          <MobileItem link='https://app.thestudiodirector.com/morningstardanceacademy/portal.sd?page=Login' external>Portal</MobileItem>
          <MobileItem link="contact">Contact Us</MobileItem>
        </MobileMenu>}
      </div>
    </MenuContainer>
  )
}

const Logo = () => {
  return <Link to="/" style={{ marginTop: '10px', marginBottom: '10px' }}>
    <div className="flex items-center ml-4 text-black cursor-pointer"><img src={logo} /></div>
  </Link>
}

const Container = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  &:hover {
    div {
      display: block;
    }
  }
  div {
    display: none;
  }
`

const Submenu = styled.div`
  width: fit-content;
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 100px;
  left: 8px;
  right: 0;
  white-space: nowrap;
  z-index: 1;
  border-radius: 0 0 4px 4px;
  div {
    padding: 1rem;
    cursor: pointer;
    &:hover {
    }
  }
`

const MobileSubmenu = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  white-space: nowrap;
  z-index: 1;
  font-size: 1.5rem;
  padding-top: 1rem;
  div {
    padding: .5rem;
  }
`

const SubmenuItem = styled.div`
  &:hover {
    background-color: #4E4E4E;
  }
`;

const Item = ({ children, sub, link, external }) => {
  const inner = (
    <Container className="px-6 cursor-pointer transition-colors">
      {children}
      {sub && <Submenu className="submenu">
        {sub.map(({ title, link }) => (
          <Link to={'/' + link} key={link}>
            <SubmenuItem>
                {title}
            </SubmenuItem>
          </Link>
        ))}
      </Submenu>}
    </Container>
  )
  if (external) {
    return <a href={link} target="_blank">{inner}</a>
  }
  return (link || link === '') ? <Link to={'/' + link}>{inner}</Link> : <>{inner}</>
}

const MobileContainer = styled.div`
  height: 100%;
  position: relative;
  padding-top: 1rem;
  padding-bottom: 1rem;
  &:hover {
    div {
      display: block;
    }
  }
  div {
    display: none;
  }
`

const MobileItem = ({ children, sub, link, external }) => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  if (link && sub) {
    throw new Error('Cannot have link and sublinks in same item')
  }

  return (
    <MobileContainer className="px-4 cursor-pointer transition-colors whitespace-nowrap text-right">
      {link ? (external ? <a href={link} target="_blank">{children}</a> : <Link to={'/' + link}>{children}</Link>) : <span onClick={() => setSubMenuOpen(!subMenuOpen)}>{children}</span>}
      {sub && subMenuOpen && <MobileSubmenu>
        {sub.map(({ title, link }) => (
          <div className="text-gray-600">
            <Link to={'/' + link}>
              {title}
            </Link>
          </div>
        ))}
      </MobileSubmenu>}
    </MobileContainer>
  )
}

export default Navbar