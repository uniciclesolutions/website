import React from "react"
import styled from "styled-components"
import Header from "../components/header"
import Application from "../components/application"
import WhatIs from "../components/whatIs"
import FirstImage from "../components/firstImage"
import AboutUs from "../components/aboutUs"
import { Flex } from "@rebass/grid"

const IndexPage = () => (
  <>
    <Header />
    <Application />
    <FirstImage />
    <WhatIs />
    {/* <AboutUs /> */}
  </>
)

export default IndexPage
