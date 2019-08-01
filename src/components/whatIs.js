import React from "react"
import { Flex } from "@rebass/grid"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import SecureIcon from "../static/img/icons/secureIcon.svg"
import { DesktopFlex } from "../breakpoints"

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
  width: 375px;
  @media (max-width: 426px) {
    width: 100%;
  }
`

const whatIs = () => {
  const { bikeImage } = useStaticQuery(
    graphql`
      query {
        bikeImage: file(relativePath: { eq: "whatIsImage.png" }) {
          childImageSharp {
            fluid(maxWidth: 2048) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `
  )
  return (
    <Flex
      px={[15, 165]}
      py={[10, 150]}
      flexDirection={["column", "column"]}
      style={{ backgroundColor: "white", textAlign: "center" }}
    >
      <Flex pb={[0]} ml={[0, "75%"]}>
        <Flex flexDirection="column">
          <Title> What´s U.C.S </Title>
          <Desc>
            Is a platform that connects cyclists to a community that pursues
            sustainable transport as a way for future mobility.
          </Desc>
        </Flex>
      </Flex>
    </Flex>
  )
}
export default whatIs
