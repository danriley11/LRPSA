import dayjs from 'dayjs';
import { Heading4, P } from '../../core/typography';
import { FooterContainer } from './Footer.styles';
import { Container } from '../Container.styles';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <FooterContainer as="footer">
      <footer className="footer-top">
        <Container>
          <Heading4>Noelle Coleman</Heading4>
          <Link to="/contact">Contact Me</Link>
          <Link to="" aria-disabled>
            Testimonies
          </Link>
        </Container>
        <Container>
          <Heading4>Resources</Heading4>
          <Link to="" aria-disabled>
            Packages
          </Link>
          <Link to="" aria-disabled>
            Books
          </Link>
        </Container>
        <Container>
          <Heading4>Other</Heading4>
          <Link to="/terms-of-use">Terms of Use</Link>
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
