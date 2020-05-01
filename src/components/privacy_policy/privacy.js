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
  margin-left:40px;
  color: #000000;
`
const SmallParagraph = styled.p`
  font-family: Heebo;
  font-style: normal;
  margin-left:80px;
  color: #000000;
`
const Subtitle = styled.p`
  font-family: Heebo;
  font-style: normal;
  font-weight: bold;

  color: #000000;
`
const Text = styled.p`
  font-family: Heebo;
  font-style: normal;
  color: #000000;
`

const privacy = () => {
  return (
    <Flex
      px={[20, 200]}
      pt={[20, 50]}
      pb={[0, 30]}
      flexDirection={["column"]}
      justifyContent="space-between"
      textAlign="center"
    >
      <Title>Privacy Policy</Title>
      <Text>Uni Cycle Solutions Limited</Text>
      <Text>Privacy Policy</Text>
      <Text>For use of data and data processing</Text>
      <Subtitle>1. Terms </Subtitle>
      <Paragraph>
        1.1. Data is any data that allow the identification of a person, any
        data that the person has disclosed to Uni Cycle Solutions Limited or the
        person’s or other person’s data that are in the possession of Uni Cycle
        Solutions Limited, including Personal data. Data may include
        identification and categorization, concerning contact information,
        service contracts and other transactions, habits and preferences
        reflecting and data collected under the law or data that is collected
        under the procedure for use of data and data processing.{" "}
      </Paragraph>
      <Paragraph>1.2. Personal data is any information relating to an identified or
        identifiable natural person („data subject“). Personal data is the name
        of a physical person and the person´s identification (name, personal
        identification code, date of birth), identity document, contact
        information (address, e-mail, telephone number), location data, an
        online identifier, IP-address and other personal information that has
        become known to Uni Cycle Solutions Limited in relation to the provision
        and performance of the service. </Paragraph>
      <Paragraph>1.3. Processing of personal data is any
        operation performed on personal data, including the collection,
        recording, organization, storage, alteration, disclosure, granting
        access to personal data, consultation and retrieval, use of personal
        data, communication, cross-usage, combination, closure, erasure or
        destruction of personal data or several of the aforementioned
        operations, regardless of the manner in which the operations are carried
        out or the means used. </Paragraph>
      <Paragraph>1.4. Restriction of processing is the marking of
        stored personal data with the aim of limiting their processing in the
        future. </Paragraph>
      <Paragraph>1.5. Controller is the natural or legal person, public
        authority, agency or other body which, alone or jointly with others,
        determines the purposes and means of the processing of personal data.</Paragraph>
      <Paragraph>1.6. Processor is a natural or legal person, public authority, agency or
        other body which processes personal data on behalf of the Controller.</Paragraph>
      <Paragraph>1.7. A data subject is a person whose personal data is processed. </Paragraph>
      <Paragraph>1.8. A
        third person is a natural or legal person, public authority, agency or
        body other than the Data subject, Controller, Processor and persons who,
        under the direct authority of the Controller or Processor, are
        authorized to process personal data. </Paragraph>
      <Paragraph>1.9. Consent of the data subject is
        any freely given, specific, informed and unambiguous indication of the
        data subject’s wishes by which the person, by a statement or by a clear
        affirmative action, signifies agreement to the processing of personal
        data relating to the person. </Paragraph>
      <Subtitle>2. Processing of personal data with the
        consent of data subject </Subtitle>
      <Paragraph>2.1. Personal data shall be processed with the
        consent of the data subject in accordance with the Personal Data
        Protection Act of the United Kingdom and the EU General Data Protection
        Regulation (GDPR) Article 6, unless otherwise provided by the applicable
        law. </Paragraph>
      <Paragraph>2.2. The data subject shall be entitled to take the consent back at
        any time, informing the Controller by e-mail to
        hello@unicycle.solutions, whereas the Controller shall terminate the
        processing of personal data of the data subject as soon as possible.</Paragraph>
      <Paragraph>2.3. The data subject gives a clear consent to the Controller to process
        its personal data in accordance with the principles and purpose of this
        procedure. The consent with the information about the principles and
        purposes of processing personal data is given by the data subject
        separately on Uni Cycle Solutions Limited website or any other
        information system provided to the use of the data subject by Uni Cycle
        Solutions Limited. </Paragraph>
      <Paragraph>2.4. Uni Cycle Solutions Limited processes the data
        as a Controller and the Processors are any legal person providing
        services to Uni Cycle Solutions Limited. </Paragraph>
      <Paragraph>2.5. As the Controller, Uni
        Cycle Solutions Limited shall provide the Processor with mandatory
        instructions for processing personal data and shall be responsible for
        the Processor’s compliance with the personal data processing
        requirements or responsible for establishing such compliance. </Paragraph>
      <Paragraph>2.6. The
        Processor may delegate the task of processing personal data to another
        person only with the written consent of the Controller, provided that
        this does not exceed the limits of the authority of the Processor. </Paragraph>
      <Paragraph>2.7
        Uni Cycle Solutions Limited service is not available for use by persons
        under the age of 13 without the consent of by the holder of parental
        responsibility over the child. </Paragraph>
      <Subtitle>3. Principles and purpose of processing
        personal data </Subtitle>
      <Paragraph>3.1. The purposes of processing personal data are: </Paragraph>
      <SmallParagraph>3.1.1.
        Identification of the person; </SmallParagraph>
      <SmallParagraph> 3.1.2. In order to comply with the
        obligations taken and offering services in front of the person; </SmallParagraph>
      <SmallParagraph>3.1.3.
        In order to improve services; </SmallParagraph>
      <SmallParagraph>3.1.4. In order to send reminders about
        parking (mobile Push, SMS, e-mail) </SmallParagraph>
      <SmallParagraph>3.1.5. Asking for feedback; </SmallParagraph>
      <SmallParagraph>3.1.6.
        Fulfillment of the obligations provided by law or implementation of the
        permitted uses of the law. </SmallParagraph>
      <Paragraph>3.2. Controller nor the Processor shall not
        transfer, rent or otherwise give personal data to third parties, unless
        clearly requested so by the person. </Paragraph>
      <Paragraph>3.3. When processing personal data,
        the Controller and the Processor will follow the principles in the
        Personal Data Protection Act of the United Kingdom and the EU General
        Data Protection Regulation, including the principle of minimal
        processing. </Paragraph>
      <Paragraph>3.4. Uni Cycle Solutions Limited works with third persons to
        whom Uni Cycle Solutions Limited shall be also forwarding data,
        including Personal Data, in the context of and for the purposes of
        cooperation. Such persons may be accounting firms, audit firms,
        IT-partners or providers of postal services, etc. authorities and
        organizations with which Uni Cycle Solutions Limited cooperates,
        provided Uni Cycle Solutions Limited authorizes its use of data to the
        minimum extent necessary; ensuring that data security is at least the
        same level as of Uni Cycle Solutions Limited itself. </Paragraph>
      <Subtitle>4. The obligations
        of Uni Cycle Solutions Limited</Subtitle>
      <Paragraph>4.1. Uni Cycle Solutions Limited will
        process the data only according to the law. </Paragraph>
      <Paragraph>4.2. Uni Cycle Solutions
        Limited ensures the protection of personal data through taking all kinds
        of organizational, physical and IT security measures and through strict
        confidentiality and security rules. Uni Cycle Solutions Limited confirms
        that all necessary measures have been taken to protect personal data.
        The processing of personal data is limited to the minimum required for
        the purposes of the processing of personal data. </Paragraph>
      <Paragraph>4.3. All provisions
        which are related to the relations between Uni Cycle Solutions Limited
        and the Processor and which are not stated herein are either agreed
        separately between Uni Cycle Solutions Limited and the Processor or
        regulated in the General terms and conditions of Uni Cycle Solutions
        Limited Contracts. </Paragraph>
      <Paragraph>4.4. Uni Cycle Solutions Limited is liable for
        compliance with the requirements of the Personal Data Protection Act of
        the United Kingdom and the EU General Data Protection Regulation. </Paragraph>
      <Subtitle>5.
        Protection of the rights of the data subject </Subtitle>
      <Paragraph>5.1. The data subject has
        the right to access personal data held about him/her by Uni Cycle
        Solutions Limited and to receive further information on processing
        his/her personal data. </Paragraph>
      <Paragraph> 5.2. The data subject has the right to submit
        complaints regarding the processing of his/her personal data at any
        time, including requiring the termination of the processing of personal
        data concerning him/her, the termination of the disclosure or the
        granting of access to personal data and / or the deletion, correction or
        destruction of the data collected. </Paragraph>
      <Paragraph>5.3. The data subject has the right
        to obtain from Uni Cycle Solutions Limited restriction of processing
        where one of the following applies:</Paragraph>
      <SmallParagraph>5.3.1. the accuracy of the personal
        data is contested by the data subject, for a period enabling the
        Controller to verify the accuracy of the personal data; </SmallParagraph>
      <SmallParagraph>5.3.2. the
        processing is unlawful and the data subject opposes the erasure of the
        personal data and requests the restriction of their use instead; </SmallParagraph>
      <SmallParagraph>5.3.3.
        the Controller no longer needs the personal data for the purposes of the
        processing, but they are required by the data subject for the
        establishment, exercise or defense of legal claims; </SmallParagraph>
      <SmallParagraph>5.3.4. the data
        subject has objected to processing pursuant to GDPR Article 21(1)
        pending the verification whether the legitimate grounds of the
        Controller override those of the data subject. </SmallParagraph>
      <Paragraph>5.4. The data subject
        shall have the right to receive any personal data concerning the person,
        which the person has provided to the Controller, in a structured,
        commonly used and machine-readable format and have the right to transmit
        those data to another Controller without hindrance from the controller
        to which the personal data have been provided. </Paragraph>
      <Paragraph>5.5. The data subject
        shall have the right to request the erasure of personal data concerning
        him/her or her without undue delay and the Controller shall have the
        obligation to erase personal data without undue delay where one of the
        following grounds applies:</Paragraph>
      <SmallParagraph>5.5.1. the personal data are no longer
        necessary in relation to the purposes for which they were collected or
        otherwise processed;</SmallParagraph>
      <SmallParagraph>5.5.2. the data subject withdraws consent on which
        the processing is based according to point 2.1 and where there is no
        other legal ground for the processing; </SmallParagraph>
      <SmallParagraph>5.5.3. the data subject objects
        to the processing and there are no overriding legitimate grounds for the
        processing; </SmallParagraph>
      <SmallParagraph>5.5.4. the personal data have been unlawfully processed;</SmallParagraph>
      <SmallParagraph>5.5.5. the personal data has to be erased for compliance with a legal
        obligation in applicable law to which the controller is subject. </SmallParagraph>
      <Paragraph>5.6. If
        the data subject has used the right of restriction of processing, Uni
        Cycle Solutions Limited has the right to retain the data but not process
        the data. </Paragraph>
      <Paragraph>5.7. Uni Cycle Solutions Limited shall communicate any
        rectification or erasure of personal data or restriction of processing
        carried out in accordance with GDPR Article 16, Article 17(1) and
        Article 18 to each recipient to whom the personal data have been
        disclosed, unless this proves impossible or involves disproportionate
        effort. Uni Cycle Solutions Limited shall inform the data subject about
        those recipients if the data subject requests it. </Paragraph>
      <Paragraph>5.8. If the data
        subject finds that Uni Cycle Solutions Limited has violated his/her
        rights in the processing of personal data or if he/she wishes to delete
        his/her data, he/she has the right to appeal to Uni Cycle Solutions
        Limited for the termination or deletion of the violation. </Paragraph>
      <Paragraph>5.9. The data
        subject has the right at any time to seek the protection of his/her
        rights from the United Kingdom Data Protection Inspectorate or the
        court. </Paragraph>
      <Subtitle>6. Use of Cookies</Subtitle>
      <Paragraph>6.1. Cookies are small data files that host the
        Web server on a web server. The web browser is being sent to the browser
        and the visitor is kept on the computer so that the web page recognizes
        the computer. </Paragraph>
      <Paragraph>6.2. Uni Cycle Solutions Limited uses cookies. Uni Cycle
        Solutions Limited collects data and cookies from visitors to the web.</Paragraph>
      <Paragraph>6.3. The cookie-related information is not used to identify the website
        user personally and the pattern data is fully under the control of Uni
        Cycle Solutions Limited. </Paragraph>
      <Paragraph>6.4. Uni Cycle Solutions Limited only uses
        cookies that serve the purposes described above. </Paragraph>
      <Paragraph>6.5. The website
        visitor can choose whether or not to accept cookies. The website visitor
        can delete or block these cookies, but if he/she does that some features
        of this site may not work as intended.</Paragraph>

    </Flex>
  )
}
export default privacy
