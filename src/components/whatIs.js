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

  color: #333333;
`

const Desc = styled.p`
  font-family: Heebo;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  color: #696973;
  width: 100%;
  @media (max-width: 426px) {
    width: 100%;
  }
`
const Section = styled(Flex)`
  backgroundcolor: white;
  textalign: center;
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
    <Section
      px={[0, 165]}
      pt={[-10, 0]}
      pb={[0, 240]}
      flexDirection={["column", "column"]}
      

    >
      <DesktopFlex justifyContent="flex-end">
        <Img
          style={{
            position: "absolute",
            height: 730,
            width: "50%",
            left: 0,
            zIndex: -2,
          }}
          fluid={bikeImage.childImageSharp.fluid}
        ></Img>
        <Flex flexDirection="column" style={{ textAlign: "center" , marginLeft:"70%", width:"50%"}} pt={300}>
          <Title> What´s U.C.S </Title>
          <Desc > 
            Is a platform that connects cyclists to a community that pursues
            sustainable transport as a way for future mobility.
          </Desc>
        </Flex>
      </DesktopFlex>
      <MobileFlex>
      <Img
          style={{
            height: 350,
            width: "100%",
          }}
          fluid={bikeImage.childImageSharp.fluid}
        ></Img>
      </MobileFlex>
      <MobileFlex>
        <Flex
          pl={[18, 260]}
          flexDirection="column"
          justifyContent="center"
          style={{ alignItems: "center" }}
          pt={20}
        >
          <Title> What´s U.C.S </Title>
          <Desc>
            Is a platform that connects cyclists to a community that pursues
            sustainable transport as a way for future mobility.
          </Desc>
        </Flex>
      </MobileFlex>
    </Section>
  )
}
export default whatIs
