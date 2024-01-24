import ParallaxImage from '../../components/blocks/Parallax.styles';
import { Margin } from '../../components/core/spacing';
import { Heading1, Heading2, P } from '../../components/core/typography';
import { Container } from '../../components/pageStructure/Container.styles';
import { NavBacking } from '../../components/pageStructure/header/Navbar.styles';
import CoverImg from '../../assets/CoverImage.webp';
import XRayImg from '../../assets/XRay.webp';
import HomeContent from './Home.styles';

const Home = () => {
  return (
    <Container>
      <NavBacking position="fixed" />

      <Margin top={48} bottom={48}>
        <ParallaxImage imgSrc={CoverImg} />

        <HomeContent>
          <div>
            <Heading1>Welcome to</Heading1>
            <Heading1>Limb Reconstruction Patient Support Australia</Heading1>
            <Heading1>LRPSA</Heading1>
          </div>
        </HomeContent>

        <HomeContent>
          <Heading2>Your life, your limb, my support</Heading2>
          <P>
            Foot & Ankle, Limb (Leg) Lengthening & Reconstruction can be a life and limb changing experience for you, or your
            child and loved ones.{' '}
          </P>
          <P>The magnitude of this 'journey' should never be taken lightly and therefore, never walked alone. </P>
          <P>
            I am a Nurse Practitioner experienced in foot & ankle, limb lengthening and complex reconstruction. l would like to
            assist you and your family on your reconstruction journey in collaboration with your referring Orthopaedic
            Specialist.{' '}
          </P>
          <P>
            Comprehensive clinical assessment, education, review, care and support is provided through each stage of your
            journey within the clinical environment of the hospital, private rooms and / or the comfort of your own home (if
            appropriate) either face to face or via telehealth.
          </P>
          <P>
            The aim of the service is to provide a streamlined, clinically safe, effective, and patient specific approach to
            treatment and care to keep you in your life and out of hospital. To assist you and your loved ones to reach,
            maintain and fulfil the best reconstruction outcome to achieve your dreams and aspirations within the context of
            your condition, before, during and after reconstruction.
          </P>
          <P>'It's not about the frame, it's about the frame of mind'</P>
        </HomeContent>

        <ParallaxImage imgSrc={XRayImg} backgroundPositionY={150} />
      </Margin>
    </Container>
  );
};

export default Home;
