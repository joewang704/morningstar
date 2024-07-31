import React from 'react'
import { Helmet } from "react-helmet";

import logo from '../images/logo_gold.png'
import Footer from './footer'

const Layout = ({ children }) => (
  <>
    <Helmet>
      <link rel="icon" type="image/png" href={logo} sizes="16x16" />
    </Helmet>
    {children}
    <Footer />
  </>
)

export default Layout
