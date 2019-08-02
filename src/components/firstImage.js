import React from "react"
import { Flex } from "@rebass/grid"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import SecureIcon from "../static/img/icons/secureIcon.svg"
import { DesktopFlex } from "../breakpoints"

const firstImage = () => {
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
    <DesktopFlex>
      <Img
        style={{ position: "absolute", width: "50%" }}
        fluid={bikeImage.childImageSharp.fluid}
      ></Img>
    </DesktopFlex>
  )
}
export default firstImage
