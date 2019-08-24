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
import AboutUs from "../components/aboutUs"
import { Flex } from "@rebass/grid"

const IndexPage = () => (
  <>
    <Header />
    <Application />
    {/* <FirstImage /> */}
    <WhatIs />
    <Points />
    <HowWorks />
    <UltimateSolutions />
    <NewEra />
    <Footer />
    {/* <AboutUs /> */}
  </>
)

export default IndexPage
