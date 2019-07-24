import React from "react"
import { Flex } from "@rebass/grid"
import styled from "styled-components"

const Navbar = styled.div`
  width: 100%;
  background-color: #9EC766
  height: 80px
`
const Title = styled.h1`
  font-family: Heebo;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  text-transform: uppercase;

  color: #696973;
`

const Header = () => {
  return (
    <Navbar>
      <Flex py={30} px={15} justifyContent="center">
        <Flex width={1 / 2}>
          <Title>UCS</Title>
        </Flex>
        <Flex width={1 / 3} justifyContent="space-between">
          <Title>What's UCS?</Title>

          <Title>About Us</Title>

          <Title>Security</Title>
        </Flex>
      </Flex>
    </Navbar>
  )
}
export default Header
