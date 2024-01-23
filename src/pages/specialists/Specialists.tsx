import { FlexDiv } from '../../components/blocks/FlexDiv.styles';
import { Margin } from '../../components/core/spacing';
import { Container } from '../../components/pageStructure/Container.styles';
import { NavBacking } from '../../components/pageStructure/header/Navbar.styles';
import Specialist from './Specialist';
import { SPECIALISTS_LIST } from './Specialists.const';

const Specialists = () => {
  return (
    <Container>
      <NavBacking />

      <Margin top={48} bottom={48}>
        <FlexDiv justifyContent="space-between" flexDirection="row">
          {SPECIALISTS_LIST.map((specialist, index) => (
            <Specialist
              key={index}
              title={specialist.title}
              location={specialist.location}
              specialty={specialist.specialty}
              email={specialist.email}
              mobile={specialist.mobile}
            />
          ))}
        </FlexDiv>
      </Margin>
    </Container>
  );
};

export default Specialists;
