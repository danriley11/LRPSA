import dayjs from 'dayjs';
import { Heading4, P } from '../../core/typography';
import { FooterContainer } from './Footer.styles';
import { Container } from '../Container.styles';
import { Link } from 'react-router-dom';
import ButtonTab from '../../buttons/ButtonTab';

const Footer = () => {
  return (
    <FooterContainer as="footer">
      <footer className="footer-top">
        <Container>
          <Heading4>Noelle Coleman</Heading4>
          <Link to="" aria-disabled>
            Testimonies
          </Link>
          <Link to="" aria-disabled>
            Contact Me
          </Link>
        </Container>
        <Container>
          <Heading4>Resources</Heading4>
          <Link to="" aria-disabled>
            Packages
          </Link>
          <Link to="" aria-disabled>
            Attributions
          </Link>
        </Container>
        <Container>
          <Heading4>Socials</Heading4>
          <div className="footer-socials">
            <ButtonTab url="https://www.linkedin.com/in/daniel-riley-a0b43415a/" buttonText="LinkedIn" />
          </div>
        </Container>
      </footer>
      <footer className="footer-bottom">
        <Container>
          <P>© {dayjs().year()} Limb Reconstruction Patient Support Australia - All rights reserved</P>
        </Container>
      </footer>
    </FooterContainer>
  );
};

export default Footer;
