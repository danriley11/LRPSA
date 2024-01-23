import { Margin } from '../../components/core/spacing';
import { Heading3, Heading4 } from '../../components/core/typography';
import SpecialistContainer from './Specialist.styles';

export type SpecialistProps = {
  title: string;
  location: string;
  specialty: string;
  email: string;
  mobile: string;
};

const Specialist = ({ title, location, specialty, email, mobile }: SpecialistProps) => {
  return (
    <Margin bottom={0}>
      <SpecialistContainer>
        <Heading3>{title}</Heading3>
        <Heading4>{location}</Heading4>
        <Heading4>{specialty}</Heading4>
        <Heading4>
          {email} / {mobile}
        </Heading4>
      </SpecialistContainer>
    </Margin>
  );
};

export default Specialist;
