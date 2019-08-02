import React from "react"
import styled from "styled-components"
import Header from "../components/header"
import Application from "../components/application"
import WhatIs from "../components/whatIs"
import FirstImage from "../components/firstImage"
import Points from "../components/points"
import HowWorks from "../components/howWorks"
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
    {/* <AboutUs /> */}
  </>
)

export default IndexPage
