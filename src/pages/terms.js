import React from "react"
import styled from "styled-components"
import Header from "../components/header"
import Application from "../components/application"
import WhatIs from "../components/whatIs"
import FirstImage from "../components/firstImage"
import Points from "../components/points"
import HowWorks from "../components/howWorks"
import UltimateSolutions from "../components/ultimateSolution"
import NewEra from "../components/newEra"
import Footer from "../components/footer"
import Terms from "../components/privacy_policy/terms"
import { Flex } from "@rebass/grid"
import { Helmet } from "react-helmet"

const TermsPage = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>UniCycleSolutions</title>
      <link rel="canonical" href="http://unicycle.solutions/terms" />
    </Helmet>
    <Header />
    <Terms />
    <Footer />
    {/* <AboutUs /> */}
  </>
)

export default TermsPage
