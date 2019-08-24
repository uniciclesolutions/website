import React from "react"
import { Flex } from "@rebass/grid"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { DesktopFlex, MobileFlex } from "../breakpoints"

const Title = styled.h1`
  font-family: Heebo;
  font-style: normal;
  font-weight: bold;
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
  margin-top: -20px
  width: 100%;
  padding-bottom: 30px
  @media (max-width: 426px) {
    width: 100%;
    padding-bottom: 0px;
  }
`
const Section = styled(Flex)`
  backgroundcolor: white;
  textalign: center;
`

const newEra = () => {
  const { bikeImage } = useStaticQuery(
    graphql`
      query {
        bikeImage: file(relativePath: { eq: "bikeep.png" }) {
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
      px={[15, 165]}
      pt={-10}
      pb={-10}
      flexDirection={["column", "column"]}
    >
      <DesktopFlex>
        <Flex
          flexDirection="column"
          justifyContent="center"
          pt={50}
          width={[1, 0.5]}
        >
          <Title> BIKEEP Smart Bicycle Docks </Title>
          <Desc>
            Secure, smart and easy to use.  Best way to lock up your personal
            bike.
          </Desc>
          <Subtitle>Eliminate bike theft</Subtitle>
          <Desc>
            4 layers of security - steel bar, loudspeaker, distress signal
            forwarding, and camera surveillance.
          </Desc>
          <Subtitle>Full control</Subtitle>
          <Desc>
            Abandoned bike identi cation, usage reports, access restrictions -
            manager has total control over usage.
          </Desc>
          <Subtitle>Easy to use</Subtitle>
          <Desc>
            Use Bikeep mobile app or integrate with your existing access cards.
          </Desc>
        </Flex>
        <Img
          style={{
            position: "absolute",
            height: 710,
            width: "50%",
            right: 0,
            zIndex: -2,
          }}
          fluid={bikeImage.childImageSharp.fluid}
        ></Img>
      </DesktopFlex>
      <MobileFlex>
        <Flex
          pl={[0, 260]}
          flexDirection="column"
          justifyContent="center"
          style={{ alignItems: "center" }}
          pt={20}
        >
          <Title> BIKEEP Smart Bicycle Docks </Title>
          <Desc>
            Secure, smart and easy to use.  Best way to lock up your personal
            bike.
          </Desc>
          <Subtitle>Eliminate bike theft</Subtitle>
          <Desc>
            4 layers of security - steel bar, loudspeaker, distress signal
            forwarding, and camera surveillance.
          </Desc>
          <Subtitle>Full control</Subtitle>
          <Desc>
            Abandoned bike identi cation, usage reports, access restrictions -
            manager has total control over usage.
          </Desc>
          <Subtitle>Easy to use</Subtitle>
          <Desc>
            Use Bikeep mobile app or integrate with your existing access cards.
          </Desc>
        </Flex>
      </MobileFlex>
    </Section>
  )
}
export default newEra
