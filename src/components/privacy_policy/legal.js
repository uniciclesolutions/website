import React from "react"
import { Flex } from "@rebass/grid"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { DesktopFlex, MobileFlex } from "../../breakpoints"

const Title = styled.h1`
  font-family: Heebo;
  font-style: normal;
  font-weight: bold;
  font-size: 80px;
  line-height: 60px;
  @media (max-width: 426px) {
    font-size: 50px;
    color: #000000;
  }
  color: #ffffff;
`
const SubTitle = styled.h2`
  font-family: Heebo;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 50px;

  color: #000000;
`

const Links = styled.h3`
  font-family: Heebo;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 20px;

  color: #4f616b;
`

const Url = styled.a`
  text-decoration: none;
`

const legal = () => {
  const { bikeImage } = useStaticQuery(
    graphql`
      query {
        bikeImage: file(relativePath: { eq: "whatIsImage.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `
  )
  return (
    <Flex
      px={[20, 200]}
      pt={[20, 50]}
      pb={[0, 30]}
      flexDirection={["column"]}
      justifyContent="space-between"
      textAlign="center"
    >
      <DesktopFlex style={{ justifyContent: "center" }}>
        <Img
          style={{ width: 700 }}
          fluid={bikeImage.childImageSharp.fluid}
        ></Img>
      </DesktopFlex>
      <Flex mt={[30, -140]} style={{ justifyContent: "center", zIndex: 1 }}>
        <Title>Legal</Title>
      </Flex>
      <Flex pt={[20, 160]} pb={[0, 100]} flexDirection={["column", "column"]}>
        <SubTitle>Privacy Policy</SubTitle>
        <Flex flexDirection={["column", "column"]}>
          <Url href="/privacy">
            <Links>Privacy Policy</Links>
          </Url>
          <Url href="/terms">
            <Links>Terms and conditions</Links>
          </Url>
          <Url href="https://bikeep.com/terms-and-conditions-for-using-bike-dock/">
            <Links>Terms and conditions for using bikeep racks</Links>
          </Url>
        </Flex>
      </Flex>
    </Flex>
  )
}
export default legal
