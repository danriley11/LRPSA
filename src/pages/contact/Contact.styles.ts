import styled from 'styled-components';
import { textDarkPurple, textLightPurple } from '../../components/core/colours';

const ContactWrapper = styled.div`
  background-color: ${textLightPurple};
  color: ${textDarkPurple};

  padding: 24px;
  border-radius: 24px;
`;

export const ContactNote = styled.div`
  display: flex;
  justify-content: center;

  filter: opacity(60%);
`;

export default ContactWrapper;
