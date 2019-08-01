import React from "react"
import { Flex } from "@rebass/grid"
import styled from "styled-components"
import BikeLogo from "../static/img/bike.svg"
import { DesktopFlex, MobileFlex } from "../breakpoints"

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
  return (
    <Navbar>
      <Flex py={[15, 30]} px={[15, 15]} justifyContent="center">
        <Flex width={[1, 1 / 2]}>
          <TitleBrand>UniCycle Solutions</TitleBrand>
        </Flex>

        <DesktopFlex width={1 / 3} justifyContent="space-between">
          <Title>What´s U.C.S</Title>
          <Title>How does it Work</Title>
          <Title>Security</Title>
          <Title>About Us</Title>
        </DesktopFlex>
      </Flex>
    </Navbar>
  )
}
export default Header
