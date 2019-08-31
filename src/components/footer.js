import React from "react"
import { Flex } from "@rebass/grid"
import styled from "styled-components"

const Title = styled.h1`
  font-family: Heebo;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 60px;

  color: #ffffff;
`

const Desc = styled.p`
  font-family: Heebo;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  color: #ffffff;
  text-align: center;
`

const footer = () => {
  return (
    <Flex
      px={[20, 200]}
      pt={[20, 50]}
      pb={[0, 10]}
      flexDirection={["column"]}
      justifyContent="space-between"
      textAlign="center"
      style={{
        backgroundColor: "#117a65",
      }}
    >
      <Title> Uni Cycle Solutions</Title>
      <Flex pt={[0, 100]} width={1} flexDirection={["column", "row"]}>
        <Flex
          justifyContent="space-between"
          width={0.5}
          flexDirection={["column", "row"]}
        >
          <Desc>What's U.C.S</Desc>
          <Desc>How does it work</Desc>
          <Desc>Security</Desc>
        </Flex>
        <Flex justifyContent="flex-end" width={0.5}>
          <Desc>© 2019 All rights reserved</Desc>
        </Flex>
      </Flex>
    </Flex>
  )
}
export default footer
