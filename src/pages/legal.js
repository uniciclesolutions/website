import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Legal from "../components/privacy_policy/legal"
import { Helmet } from "react-helmet"

const LegalPage = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>UniCycleSolutions</title>
      <link rel="canonical" href="http://unicycle.solutions/legal" />
    </Helmet>
    <Header />
    <Legal />
    <Footer />
    {/* <AboutUs /> */}
  </>
)

export default LegalPage
