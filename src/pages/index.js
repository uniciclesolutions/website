import React from "react"
import styled from "styled-components"
import Header from "../components/header"
import Application from "../components/application"
import WhatIs from "../components/whatIs"
import AboutUs from "../components/aboutUs"
import { Flex } from "@rebass/grid"

const IndexPage = () => (
  <>
    <Header />
    <Application />
    <WhatIs />
    {/* <AboutUs /> */}
  </>
)

export default IndexPage
