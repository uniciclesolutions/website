import React from "react"
import { Flex } from "@rebass/grid"
import styled from "styled-components"
import Img from "gatsby-image"
import SecureIcon from "../static/img/icons/secureIcon.svg"

const Title = styled.h1`
  font-family: Heebo;
  font-style: normal;
  font-size: 30px;
  line-height: 60px;

  color: #333333;
`

const Subtitle = styled.h2`
  font-family: Heebo;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 60px;

  color: #333333;
`
const Desc = styled.p`
  font-family: Heebo;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  color: #696973;
  margin-top: -20px;
`

const ultimateSolution = () => {
  return (
    <Flex
      px={[20, 165]}
      pt={[-10, 100]}
      pb={[0, 140]}
      flexDirection="column"
      justifyContent="center"
      style={{
        backgroundColor: "#F2F2F2",
      }}
    >
      <Title>Your Ultimate Cycling Solution</Title>
      <Desc>
        U.C.S will solve the biggest problem in UK, <b>bicycle theft</b>. BIKEEP
        provides maximum-security bicycle racks for your personal bike. You will
        also access a wide range of online bicycle services delivered there,
        such as{" "}
        <b>
          Bicycle Repair, Second Hand Market, Online Shop, Summer Storage and
          much more!
        </b>
      </Desc>
      <Flex pt={[0, 50]} flexDirection="column">
        <Title>Pedalling to reinvent cycling</Title>
        <Desc>
          We encourage cycling by offering the ultimate cycling solutions.
          Everything you need regarding bicycles available with just a tap.
        </Desc>
      </Flex>
      <Flex pt={[0, 70]} justifyContent="center">
        <Title style={{ fontStyle: "italic" }}>
          " Empowering YOU to join the movement that will brighten our future."
        </Title>
      </Flex>
    </Flex>
  )
}
export default ultimateSolution
