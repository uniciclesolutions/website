import React from "react"
import { Flex } from "@rebass/grid"
import styled from "styled-components"
import BikeLogo from "../static/img/bike.svg"
import { DesktopFlex, MobileFlex } from "../breakpoints"
import * as Scroll from "react-scroll"

const Navbar = styled.div`
  width: 100%;
  background-color: #F2F2F2
  height: 80px
`
const Title = styled.h1`
  font-family: Heebo;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 29px;
  text-align: center;
  color: #333333;
  cursor: pointer;
`
const TitleBrand = styled.h2`
  font-family: Heebo;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 60px;

  color: #333333;
`

const Header = () => {
  const scrollToPosition = number => {
    var Scroll = require("react-scroll")
    var scroll = Scroll.animateScroll

    scroll.scrollTo(number)
  }
  return (
    <Navbar>
      <Flex py={[15, 30]} px={[15, 15]} justifyContent="center">
        <Flex width={[1, 1 / 2]} mt={[0, -10]}>
          <a style={{ textDecoration: "none" }} href="/">
            <TitleBrand>Uni Cycle Solutions</TitleBrand>
          </a>
        </Flex>

        <DesktopFlex width={1 / 3} justifyContent="space-between">
          <Title onClick={() => scrollToPosition(750)}>What´s U.C.S</Title>
          {/* <Title onClick="scrollWin(0, 50)">What´s U.C.S</Title> */}
          <Title onClick={() => scrollToPosition(1400)}>Security</Title>
          <Title onClick={() => scrollToPosition(2080)}>How does it Work</Title>
          <Title onClick={() => scrollToPosition(3550)}>Bikeep</Title>
        </DesktopFlex>
      </Flex>
    </Navbar>
  )
}
export default Header
