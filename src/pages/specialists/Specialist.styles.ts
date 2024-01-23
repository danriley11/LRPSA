import styled from 'styled-components';
import { hoverPurple, textDarkPurple, textLightPurple } from '../../components/core/colours';
import { rem } from '../../components/core/styles';

const SpecialistContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  width: fit-content;
  box-shadow: 0 0 20px ${textDarkPurple};
  border-radius: 24px;
  padding: ${rem(24)};
  margin: ${rem(12)};

  h4 {
    margin: 0;
  }

  &:hover {
    background-color: ${hoverPurple};
    h3,
    h4 {
      color: ${textLightPurple};
    }
  }
`;

export default SpecialistContainer;
