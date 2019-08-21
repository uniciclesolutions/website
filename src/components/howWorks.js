import React from "react"
import { Flex } from "@rebass/grid"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import SecureIcon from "../static/img/icons/secureIcon.svg"
import { DesktopFlex, MobileFlex } from "../breakpoints"

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
  @media (max-width: 426px) {
    line-height: 20px;
    padding-bottom: 20px;
  }

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
const Section = styled(Flex)`
  backgroundcolor: white;
  textalign: center;
`

const howWorks = () => {
  const { image1, image2 } = useStaticQuery(
    graphql`
      query {
        image1: file(relativePath: { eq: "image1_ultimateSolution.png" }) {
          childImageSharp {
            fluid(maxWidth: 2048) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        image2: file(relativePath: { eq: "image2_ultimateSolution.png" }) {
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
    <Section
      px={[15, 0]}
      pt={-10}
      pb={-10}
      flexDirection={["column", "column"]}
    >
      <DesktopFlex>
        <Flex width={0.35}>
          <Img
            style={{ width: "100%" }}
            fluid={image1.childImageSharp.fluid}
          ></Img>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="center"
          style={{ alignItems: "center" }}
          width={0.3}
          pt={20}
        >
          <Title> How does it work? </Title>
          <Subtitle> 1. Download the App </Subtitle>
          <Subtitle> 2. Find your Bikeep Rack to park</Subtitle>
          <Subtitle> 3. Unlock with your phone or ID card </Subtitle>
          <Subtitle> 4. Lock up your bike </Subtitle>
          <Subtitle> 5. Access All Services </Subtitle>
        </Flex>
        <Flex width={0.35}>
          <Img
            style={{ width: "100%" }}
            fluid={image2.childImageSharp.fluid}
          ></Img>
        </Flex>
      </DesktopFlex>
      <MobileFlex>
        <Flex
          pl={[0, 260]}
          flexDirection="column"
          justifyContent="center"
          style={{ alignItems: "center" }}
          pt={20}
        >
          <Flex
            flexDirection="column"
            justifyContent="center"
            style={{ alignItems: "center" }}
            pt={20}
          >
            <Title> How does it work? </Title>
            <Subtitle> 1. Download the App </Subtitle>
            <Subtitle> 2. Find your Bikeep Rack to park</Subtitle>
            <Subtitle> 3. Unlock with your phone or ID card </Subtitle>
            <Subtitle> 4. Lock up your bike </Subtitle>
            <Subtitle> 5. Access All Services </Subtitle>
          </Flex>
        </Flex>
      </MobileFlex>
    </Section>
  )
}
export default howWorks
