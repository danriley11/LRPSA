import { Margin } from '../../components/core/spacing';
import { Heading1, Heading2, P } from '../../components/core/typography';
import { Container } from '../../components/pageStructure/Container.styles';
import { NavBacking } from '../../components/pageStructure/header/Navbar.styles';
import ConsultationsWrapper from './Consultations.styles';

const Consultations = () => {
  return (
    <Container>
      <NavBacking />

      <Margin top={48} bottom={48}>
        <ConsultationsWrapper>
          <Heading1>Consultations</Heading1>
          <P>
            Welcome to the Limb Reconstruction Patient Support Consultation page! Here you'll find all sorts of information
            provided for patients, friends, families and anyone who may embark on or support through the journey.
          </P>

          <Heading2>Pre-operative</Heading2>
          <P>
            Embarking on this journey is no small feat. It's going to take blood, sweat and tears to come through the other
            side, but you'll be better for it. It's with my years of experience that I have the knowledge, understanding and
            creativity to explain and guide you through what things will look like moving forward. You'll be surprised how much
            you'll learn.
          </P>
          <ul>
            <li>
              <P>Personalised preparation checklist</P>
            </li>
            <li>
              <P>Education on what your day-to-day experiences, concerns and maintenance</P>
            </li>
            <li>
              <P>Management and coordination of your care in collaboration with your treating Orthopaedic Specialist</P>
            </li>
          </ul>

          <Heading2>Post-operative</Heading2>
          <P>
            This is where the hard yards come into play and my promise to you is support and information at the tip of your
            fingertips.
          </P>
          <ul>
            <li>
              <P>Personalised maintenance and management checklist</P>
            </li>
            <li>
              <P>
                Regular, reliable and more affordable consults with a more expansive explanation than specialists may have the
                time for
              </P>
            </li>
            <li>
              <P>
                I will have downloadable info-packs available at your fingertips covering visual and step-by-step processes for
                the small and forgettable things that will undoubtedly come up time and time again.
              </P>
            </li>
          </ul>

          <Heading2>Ongoing Education</Heading2>
          <P>
            The most common situations I find myself in are uninformed patients & support networks, under-prepared environments
            and genuine edge-cases. It's because of these and so many more situations that I can say with certainty it will be a
            learning curve/process for all involved from start to finish; this is where my job comes into play to keep you
            informed & supported.
          </P>

          <Heading2>24/7 Support</Heading2>
          <ul>
            <li>
              <P>Face-to-face or telehealth consults</P>
            </li>
            <li>
              <P>One-stop shop for support, enforcing efficiency & continuity</P>
            </li>
            <li>
              <P>Knowledge and experience with collaborating with Orthopaedic specialists</P>
            </li>
          </ul>
        </ConsultationsWrapper>
      </Margin>
    </Container>
  );
};

export default Consultations;
