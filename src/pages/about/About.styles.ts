import styled from 'styled-components';
import { textDarkPurple } from '../../components/core/colours';

export const AboutContainer = styled.div<{ fontStyle?: string }>`
  p {
    text-align: center;
    color: ${textDarkPurple};
    font-style: ${({ fontStyle = 'inherit' }) => fontStyle};
  }
`;

export default AboutContainer;
