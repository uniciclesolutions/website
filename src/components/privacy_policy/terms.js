import React from "react"
import { Flex } from "@rebass/grid"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Title = styled.h1`
  font-family: Heebo;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 60px;

  color: #000000;
`
const Paragraph = styled.p`
  font-family: Heebo;
  font-style: normal;

  color: #000000;
`
const Subtitle = styled.p`
  font-family: Heebo;
  font-style: normal;
  font-weight: bold;

  color: #000000;
`

const terms = () => {
  return (
    <Flex
      px={[20, 200]}
      pt={[20, 50]}
      pb={[0, 30]}
      flexDirection={["column"]}
      justifyContent="space-between"
      textAlign="center"
    >
      <Title>Terms and conditions</Title>

      <Subtitle>1. General </Subtitle>
      <Paragraph style={{marginLeft:40}}>- These Terms and Conditions apply to using the Service provided by Uni
        Cycle Solutions Limited (UCS).</Paragraph>
      <Paragraph style={{marginLeft:40}}>- On the basis of this Agreement, UCS
        grants the User the right to use the Services provided by UCS and Bikeep
        (Smart Bicycle racks).</Paragraph>
      <Paragraph style={{marginLeft:40}}>- Bikeep offers safe parking and does not assume
        responsibility for abandoned vehicles.</Paragraph>
      <Paragraph style={{marginLeft:40}}>- UCS and Bikeep provide Service
        via RFID/NFC card, via Mobile Application and other ways.</Paragraph>
      <Paragraph style={{marginLeft:40}}>- User is the
        person who concludes the Service using the Service provided by UCS.</Paragraph>
      <Paragraph style={{marginLeft:40}}>- In
        addition to the Terms and Conditions, legal relations arising from this
        Agreement shall be governed by legislation regulated in the United
        Kingdom.</Paragraph>

      <Subtitle>2. UCS App or online registration </Subtitle>
      <Paragraph style={{marginLeft:40}}>- The use of UCS app requires
        installation of UCS app and registration of a user account. During the
        installation of the UCS app, the user is linked to the respective user
        account and added to the database.</Paragraph>
      <Paragraph style={{marginLeft:40}}>- When using the UCS app or online
        registration, the user can choose whether he/she wishes to pay for the
        service with a bank/credit card or prepaid account.</Paragraph>
      <Paragraph style={{marginLeft:40}}>- All complaints can
        be sent to our support team via email hello@unicycle.solutions
        (available on workdays 08.00-17.00 CET).</Paragraph>

      <Subtitle>3. Use of the UCS app </Subtitle>
      <Paragraph style={{marginLeft:40}}>- UCS is a
        mobile app enabling the customers requiring a Bike Dock service to find
        a suitable Bike Dock location.</Paragraph>
      <Paragraph style={{marginLeft:40}}>- In order to use the Service via app the
        user must download and launch the mobile app; submit requested
        information and start the Service.</Paragraph>

      <Subtitle>4. By registering an account with UCS, a
        customer shall accept the following conditions </Subtitle>
        <Paragraph style={{marginLeft:40}}>- UCS shall have the right
        to add the personal data of the app user to UCS database and to forward
        the personal data tobike shops in accordance with UCS’s Privacy Policy.</Paragraph>
        <Paragraph style={{marginLeft:40}}>- UCS shall have a right to make unilateral amendments to the Terms and
        Conditions and Privacy Policy and to relinquish the database to third
        parties. UCS shall notify the users of changes to Terms and Conditions
        and Privacy Policy.</Paragraph>
        <Paragraph style={{marginLeft:40}}>
        - UCS shall be entitled to forward personal data and
        bank data to credit card payment intermediaries.</Paragraph>

        <Subtitle>5. Good practice of using UCS </Subtitle>
        <Paragraph style={{marginLeft:40}}>- UCS is committed to contributing to improvement of the quality of
        services. For this reason, we might ask to fill out a feedback form in
        the UCS app. </Paragraph>
        <Paragraph style={{marginLeft:40}}>- We expect that the users of UCS use the Services in good
        faith and are respectful of the Bike Docks that offer their Services
        through UCS.</Paragraph>

        <Subtitle>6. Other Conditions </Subtitle>
        <Paragraph style={{marginLeft:40}}>- To provide the service, UCS needs to
        process the User’s personal data. When downloading and launching the
        mobile application for the first time, the User confirms that he / she
        has familiarized himself / herself with the terms of processing personal
        data of UCS and agrees with UCS processing his / her personal data in
        accordance with the conditions of processing personal data of UCS.
        Consent can be withdrawn. In case of withdrawal of consent, UCS has the
        right to suspend the provision of the Service.  </Paragraph>
        <Paragraph style={{marginLeft:40}}>- UCS has the right to
        unilaterally amend these Terms and Conditions and their actual
        implementation.</Paragraph>
        <Paragraph style={{marginLeft:40}}>- UCS contact info: e-mail hello@unicycle.solutions,
        address Park House, 37 Clarence Street, Leicester, Leicestershire,
        England, LE1 3RW</Paragraph>

    </Flex>
  )
}
export default terms
