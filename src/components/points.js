import React from "react"
import { Flex } from "@rebass/grid"
import styled from "styled-components"
import Img from "gatsby-image"
import SecureIcon from "../static/img/icons/secureIcon.svg"
const Navbar = styled.div`
  width: 100%;
  background-color: #9EC766
  height: 80px
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
`

const points = () => {
  return (
    <Flex
      px={[20, 165]}
      pt={[0, 50]}
      flexDirection={["column", "row"]}
      justifyContent="space-between"
      textAlign="center"
      style={{
        backgroundColor: "#F2F2F2",
      }}
    >
      <Flex
        width={[1, 1 / 4]}
        flexDirection="column"
        justifyContent="center"
        style={{ alignItems: "center" }}
      >
        <SecureIcon width="330" height="80" />
        <Subtitle>SAFE</Subtitle>
        <Desc>
          We provide a completely secure way to park your personal bicycle,
          Smart Bicycle racks. (Bikeep link)
        </Desc>
      </Flex>
      <Flex
        width={[1, 1 / 4]}
        flexDirection="column"
        style={{ alignItems: "center" }}
      >
        <SecureIcon width="330" height="80" />
        <Subtitle>SUITED</Subtitle>
        <Desc>
          We bring access and control to a wide range of affordable and
          reachable cycling services.
        </Desc>
      </Flex>
      <Flex
        width={[1, 1 / 4]}
        flexDirection="column"
        style={{ alignItems: "center" }}
      >
        <SecureIcon width="330" height="80" />
        <Subtitle>SIMPLE</Subtitle>
        <Desc>ALL the services and features that you need in ONE App</Desc>
      </Flex>
    </Flex>
  )
}
export default points
