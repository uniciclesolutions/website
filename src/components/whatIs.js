import React from "react"
import { Flex } from "@rebass/grid"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import SecureIcon from "../static/img/icons/secureIcon.svg"

const Title = styled.h1`
  font-family: Heebo;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
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
`

const whatIs = () => {
  return (
    <Flex
      pt={[0, 80]}
      px={[15, 165]}
      py={[10, 50]}
      flexDirection={["column", "column"]}
      style={{ backgroundColor: "white", textAlign: "center" }}
    >
      <Title> What´s U.C.S </Title>
      <Desc>
        Is a platform that connects cyclists to a community that pursues
        sustainable transport as a way for future mobility.
      </Desc>
      <Flex
        pt={[0, 30]}
        flexDirection={["column", "row"]}
        justifyContent="space-between"
        textAlign="center"
      >
        <Flex width={1 / 4} flexDirection="column" justifyContent="center">
          <SecureIcon width="280" height="80" />
          <Subtitle>SAFE</Subtitle>
          <Desc>
            We provide a completely secure way to park your personal bicycle,
            Smart Bicycle racks. (Bikeep link)
          </Desc>
        </Flex>
        <Flex width={1 / 4} flexDirection="column">
          <SecureIcon width="280" height="80" />
          <Subtitle>SUITED</Subtitle>
          <Desc>
            We bring access and control to a wide range of affordable and
            reachable cycling services.
          </Desc>
        </Flex>
        <Flex width={1 / 4} flexDirection="column">
          <SecureIcon width="280" height="80" />
          <Subtitle>SIMPLE</Subtitle>
          <Desc>ALL the services and features that you need in ONE App</Desc>
        </Flex>
      </Flex>
    </Flex>
  )
}
export default whatIs
