import React, { useState } from "react"
import styled from '@emotion/styled';
import { Link } from "gatsby"
import { useBreakpoints } from "../utils/breakpoints";
import Menu from '../images/menu.js';
import colors from 'tailwindcss/colors';

import logoGold from '../images/logo_gold.png'
import logoWhite from '../images/logo_white.png'
import logoBlack from '../images/logo_black.png'

const lightBorder = '#EFEFEF'
const lightFont = '#666'
const darkFont = '#888'

const MenuContainer = styled.div`
  ${({ isLightTheme }) => ({
    borderBottom: `1px solid ${isLightTheme ? lightBorder : colors.gray[600]}`,
    color: isLightTheme ? lightFont : darkFont,
  })}
`;

const DesktopMenu = styled.div`
  ${({ isLightTheme }) => ({
    backgroundColor: isLightTheme ? 'white' : 'black',
  })}
  div {
    &:hover {
      ${({ isLightTheme }) => ({ color: isLightTheme ? '#aaa' : 'white' })}
    }
  }
  .submenu {
    ${({ isLightTheme }) => ({
      backgroundColor: isLightTheme ? 'white' : '#111',
      border: `1px solid ${isLightTheme ? lightBorder : colors.gray[600]}`,
    })}
  }
`;

const MobileMenu = styled.div`
  border-radius: 0 0 4px 4px;
  overflow: hidden;
  position: absolute;
  ${({ isLightTheme }) => ({
    backgroundColor: isLightTheme ? 'white' : 'black',
    border: `1px solid ${isLightTheme ? lightBorder : colors.gray[600]}`,
  })}
  div {
    &:hover {
      ${({ isLightTheme }) => ({ color: isLightTheme ? '#999' : 'white' })}
    }
  }
`;

const Navbar = ({ theme }) => {
  const { breakpoint } = useBreakpoints();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isLightTheme = theme === 'light';

  if (typeof window === "undefined") {
    return (
      <MenuContainer className="flex justify-between w-full px-8" isLightTheme={isLightTheme}>
        <Logo isLightTheme={isLightTheme} />
      </MenuContainer>
    )
  }

  if (breakpoint === 'desktop') {
    return (
      <MenuContainer className="flex justify-between w-full px-8" isLightTheme={isLightTheme}>
        <Logo isLightTheme={isLightTheme} />
        <DesktopMenu className="flex items-center text-sm mr-16" isLightTheme={isLightTheme}>
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
          <Item link='contact'>Contact Info</Item>
          <Item link='https://app.thestudiodirector.com/morningstardanceacademy/portal.sd?page=Login' external>Parent Portal</Item>
        </DesktopMenu>
      </MenuContainer>
    )
  }

  return (
    <MenuContainer className="flex justify-between w-full px-8" isLightTheme={isLightTheme}>
      <Logo isLightTheme={isLightTheme} />
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
          <MobileItem link="contact">Contact Info</MobileItem>
          <MobileItem link='https://app.thestudiodirector.com/morningstardanceacademy/portal.sd?page=Login' external>Parent Portal</MobileItem>
        </MobileMenu>}
      </div>
    </MenuContainer>
  )
}

const Logo = ({ isLightTheme }) => {
  return <Link to="/" style={{ marginTop: '10px', marginBottom: '10px' }}>{isLightTheme ?
    <div className="flex items-center ml-4 text-black cursor-pointer"><img src={logoGold} /></div> :
    <div className="flex items-center ml-4 text-white cursor-pointer"><img src={logoWhite} /></div>
  }</Link>
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
  top: 56px;
  left: 0;
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

const Item = ({ children, sub, link, external }) => {
  const inner = (
    <Container className="px-4 cursor-pointer transition-colors">
      {children}
      {sub && <Submenu className="submenu">
        {sub.map(({ title, link }) => (
          <Link to={'/' + link} key={link}>
            <div className="text-gray-600">
                {title}
            </div>
          </Link>
        ))}
      </Submenu>}
    </Container>
  )
  if (external) {
    return <a href={link} target="_blank">{inner}</a>
  }
  return link ? <Link to={'/' + link}>{inner}</Link> : <>{inner}</>
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