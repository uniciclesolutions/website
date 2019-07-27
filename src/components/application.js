import React from "react"
import { Flex } from "@rebass/grid"
import styled from "styled-components"
import Img from "gatsby-image"
import { DesktopFlex, MobileFlex } from "../breakpoints"

import { useStaticQuery, graphql } from "gatsby"

const Navbar = styled.div`
  width: 100%;
  background-color: #9EC766
  height: 80px
`
const Title = styled.h1`
  font-family: Heebo;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
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

const application = () => {
  const { app, downloadAndroid, downloadIos } = useStaticQuery(
    graphql`
      query {
        app: file(relativePath: { eq: "iphone_web.png" }) {
          childImageSharp {
            fluid(maxWidth: 2048) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        downloadAndroid: file(relativePath: { eq: "download_android.png" }) {
          childImageSharp {
            fluid(maxWidth: 2048) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        downloadIos: file(relativePath: { eq: "download_ios.png" }) {
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
      pt={[10, 150]}
      pb={[250, 400]}
      flexDirection={["column", "row"]}
      style={{ backgroundColor: "#F2F2F2" }}
    >
      <Flex flexDirection="column" width={[0.8, 1 / 2]}>
        <Title> Care in the Smart Way</Title>
        <Desc>
          Download the App and take control. <b>Coming soon!</b>
        </Desc>
      </Flex>
      <DesktopFlex>
        <Img
          style={{
            position: "absolute",
            top: 160,
            right: 300,
            width: 250,
            transform: "rotate(-9.98deg)",
          }}
          fluid={app.childImageSharp.fluid}
        ></Img>
        <Img
          style={{
            position: "absolute",
            top: 450,
            left: 150,
            width: 200,
          }}
          fluid={downloadAndroid.childImageSharp.fluid}
        ></Img>
        <Img
          style={{
            position: "absolute",
            top: 450,
            left: 450,
            width: 200,
          }}
          fluid={downloadIos.childImageSharp.fluid}
        ></Img>
      </DesktopFlex>
      <MobileFlex>
        <Img
          style={{
            position: "absolute",
            top: 342,
            right: 235,
            width: 80,
          }}
          fluid={app.childImageSharp.fluid}
        ></Img>
        <Img
          style={{
            position: "absolute",
            top: 342,
            left: 200,
            width: 100,
          }}
          fluid={downloadAndroid.childImageSharp.fluid}
        ></Img>
        <Img
          style={{
            position: "absolute",
            top: 400,
            left: 200,
            width: 100,
          }}
          fluid={downloadIos.childImageSharp.fluid}
        ></Img>
      </MobileFlex>
    </Flex>
  )
}
export default application
