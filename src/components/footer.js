import React from "react"
import { Flex } from "@rebass/grid"
import styled from "styled-components"
import LinkedinLogo from "../static/img/icons/linkedin.svg"
import InstaLogo from "../static/img/icons/insta.svg"

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
      pb={[0, 30]}
      flexDirection={["column"]}
      justifyContent="space-between"
      textAlign="center"
      style={{
        backgroundColor: "#117a65",
      }}
    >
      <Title> Uni Cycle Solutions</Title>
      <Flex pt={[0, 50]} flexDirection={["column", "row"]}>
        <Flex style={{ flex: "auto" }} flexDirection={["column", "row"]}>
          <a href=" https://www.linkedin.com/company/unicyclesolutions/about/">
            <LinkedinLogo
              style={{
                width: 50,
                height: 45,
                marginRight: 30,
                cursor: "pointer",
              }}
            ></LinkedinLogo>
          </a>
          <a href="https://www.instagram.com/unicyclesolutions/">
            <InstaLogo
              style={{ width: 50, height: 50, cursor: "pointer" }}
            ></InstaLogo>
          </a>
        </Flex>
        <Flex justifyContent="flex-end" width={0.5}>
          <Desc>© 2019 All rights reserved</Desc>
        </Flex>
      </Flex>
    </Flex>
  )
}
export default footer
