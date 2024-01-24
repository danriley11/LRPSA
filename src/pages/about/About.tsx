import { Margin } from '../../components/core/spacing';
import { Heading1, P } from '../../components/core/typography';
import { Container } from '../../components/pageStructure/Container.styles';
import { NavBacking } from '../../components/pageStructure/header/Navbar.styles';
import AboutMe from '../../assets/AboutMe.webp';
import Logo from '../../assets/Logo.webp';
import AboutContainer from './About.styles';
import ParallaxImage from '../../components/blocks/Parallax.styles';

const About = () => {
  return (
    <Container>
      <NavBacking position="fixed" />

      <Margin top={48} bottom={48}>
        <Heading1>About Noelle</Heading1>

        <ParallaxImage imgSrc={AboutMe} backgroundPositionY={200} />

        <AboutContainer>
          <P>
            Noelle Coleman has over 20 years experience in public and private orthopaedic nursing. With specific expertise in
            the provision of comprehensive clinical assessment, support and delivery of care for patients and families
            undergoing Foot & Ankle, Leg lengthening & Limb Reconstruction for congenital and acquired orthopaedic conditions
            including post traumatic conditions, infection, cancer, deformity & chronic disease processes.
          </P>
          <P>
            Noelle completed a Master in Nurse Practitioner (NP) - specialising in Limb Reconstruction / Complex Orthopaedics to
            enhance her knowledge, experience and expertise in nursing both adults and children undergoing Foot & Ankle, Leg
            Lengthening and Limb Reconstruction.
          </P>
          <P>
            She is an associate member of the Australian & the British Limb Lengthening & Reconstruction Societies (ALLARS &
            BLRS) and has been instrumental in the development of a number of Leg Lengthening & Reconstruction Services through
            out her career, in Dublin, Ireland, in Brisbane, Qld and now here in Sydney, Australia as an independent
            practitioner.
          </P>
        </AboutContainer>

        <ParallaxImage imgSrc={Logo} backgroundPositionY={175} />

        <AboutContainer fontStyle="italic">
          <P>
            I initially trained as a registered nurse through London South Bank University in Paediatrics at Great Ormond Street
            Children's Hospital and as an registered nurse in Adult's at the Hammersmith Hospital, London
          </P>
          <P>
            My nursing career in Foot & Ankle, Leg Lengthening & Reconstruction has taken me from London back home to Dublin, to
            the USA, Dubai, Brisbane & now Sydney, where I have established a private, independent, nursing practice Limb
            Reconstruction Patient Support Australia (LRSPSA) on completion of my Masters as a Nurse Practitioner
          </P>
          <P>
            This nursing service provides specialised and individualised, orthopaedic condition specific, education,
            preparation, clinical assessment, care, and support to patients and families undergoing each stage of limb
            lengthening and reconstruction.
          </P>
          <P>
            The service is provided in person and via Telehealth both in the home and clinical settings of the hospital or
            private rooms on referral from, and in direct collaboration with, your treating Orthopaedic Specialist
          </P>
        </AboutContainer>
      </Margin>
    </Container>
  );
};

export default About;
