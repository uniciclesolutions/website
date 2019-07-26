import React from "react"
import { Flex } from "@rebass/grid"
import styled from "styled-components"
import Img from "gatsby-image"

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
  width: 400px;
  color: #696973;
`

const aboutUs = () => {
  const { bikeepImg } = useStaticQuery(
    graphql`
      query {
        bikeepImg: file(relativePath: { eq: "bikeep_example.png" }) {
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
      pt={[0, 80]}
      px={[15, 165]}
      py={[10, 50]}
      flexDirection={["column", "row"]}
      style={{
        backgroundColor: "#6EC1A9",
      }}
    >
      hi
    </Flex>
  )
}
export default aboutUs
