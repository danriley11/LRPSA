import { Margin } from '../../components/core/spacing';
import { Heading1, Heading2, P } from '../../components/core/typography';
import { Container } from '../../components/pageStructure/Container.styles';
import { NavBacking } from '../../components/pageStructure/header/Navbar.styles';
import ContactWrapper, { ContactNote } from './Contact.styles';

const Contact = () => {
  return (
    <Container>
      <NavBacking />

      <Margin top={48} bottom={48}>
        <Heading1>Contact Noelle</Heading1>

        <ContactWrapper>
          <Heading2>First time consultations / Office hours:</Heading2>
          <P>☎️ Phone: 02 9477 5554</P>
          <P>
            ✉️ Email: <a href="info@limbsupport.com.au">info@limbsupport.com.au</a>
          </P>

          <P>
            Please know that part of my services is to provide 24/7 support to ensure you get the care and attention you need
            when you least expect it. This service of mine becomes available after our first consultation.
          </P>

          <ContactNote>
            <P>Standard office hours cover 9AM to 5PM AEST (UTC +11)</P>
          </ContactNote>
        </ContactWrapper>
      </Margin>
    </Container>
  );
};

export default Contact;
