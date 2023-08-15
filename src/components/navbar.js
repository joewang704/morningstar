import React, { useState } from "react"
import styled from '@emotion/styled';
import { Link } from "gatsby"
import { useBreakpoints } from "../utils/breakpoints";
import Menu from '../images/menu.js';
import colors from 'tailwindcss/colors';


const MenuContainer = styled.div`
  ${({ isLightTheme }) => ({
    borderBottom: `1px solid ${isLightTheme ? colors.gray[400] : colors.gray[600]}`,
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
      border: `1px solid ${isLightTheme ? colors.gray[400] : colors.gray[600]}`,
    })}
  }
`;

const MobileMenu = styled.div`
  border-radius: 0 0 4px 4px;
  overflow: hidden;
  position: absolute;
  ${({ isLightTheme }) => ({ color: isLightTheme ? 'black' : 'white', backgroundColor: isLightTheme ? 'white' : 'black' })}
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
        <DesktopMenu className="flex items-center text-gray-600 text-sm mr-16" isLightTheme={isLightTheme}>
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
          <Item link='competitions'>Competition & Performances</Item>
          <Item link='https://app.thestudiodirector.com/morningstardanceacademy/portal.sd?page=Login'>Parent Portal</Item>
        </DesktopMenu>
      </MenuContainer>
    )
  }

  return (
    <MenuContainer className="flex justify-between w-full px-8" isLightTheme={isLightTheme}>
      <Logo isLightTheme={isLightTheme} />
      <div className="relative py-4">
        <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)}><Menu color={isLightTheme ? 'black' : 'white'} /></div>
        {mobileMenuOpen && <MobileMenu isLightTheme={isLightTheme} className="border-gray-800 border top-full -right-8 flex flex-col text-gray-600 text-3xl z-10 text-left items-end p-4">
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
          <MobileItem link="competitions">Competition & Performances</MobileItem>
          <MobileItem link="parent">Parent Portal</MobileItem>
        </MobileMenu>}
      </div>
    </MenuContainer>
  )
}

const Logo = ({ isLightTheme }) => {
  return <Link href="/" className="mt-4">{isLightTheme ?
    <div className="flex items-center ml-4 text-black cursor-pointer">MSDA</div> :
    <div className="flex items-center ml-4 text-white cursor-pointer">MSDA</div>
  }</Link>
}

const Container = styled.div`
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

const Submenu = styled.div`
  width: fit-content;
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 52px;
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

const Item = ({ children, sub, link }) => {
  return (
    <Container className="px-4 cursor-pointer transition-colors">
      {link ? <Link href={'/' + link}>{children}</Link> : <>{children}</>}
      {sub && <Submenu className="submenu">
        {sub.map(({ title, link }) => (
          <div className="text-gray-600">
            <Link href={'/' + link}>
              {title}
            </Link>
          </div>
        ))}
      </Submenu>}
    </Container>
  )
}

const MobileItem = ({ children, sub, link }) => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  if (link && sub) {
    throw new Error('Cannot have link and sublinks in same item')
  }
  return (
    <Container className="px-4 cursor-pointer transition-colors whitespace-nowrap text-right">
      {link ? <Link href={link}>{children}</Link> : <span onClick={() => setSubMenuOpen(!subMenuOpen)}>{children}</span>}
      {sub && subMenuOpen && <MobileSubmenu>
        {sub.map(({ title, link }) => (
          <div className="text-gray-600">
            <Link href={'/' + link}>
              {title}
            </Link>
          </div>
        ))}
      </MobileSubmenu>}
    </Container>
  )
}

export default Navbar