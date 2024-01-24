import styled from 'styled-components';
import { decorativePurple, textDarkPurple } from '../../components/core/colours';
import { mediaUp, rem } from '../../components/core/styles';

const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    background-color: ${decorativePurple};
    padding: 0 ${rem(48)};

    ${mediaUp.lg`
    border-radius: ${rem(50)};
    `}
  }

  h1,
  h2 {
    text-align: center;
    color: white;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: 100;

    text-transform: uppercase;
  }

  p {
    color: ${textDarkPurple};
    text-align: center;
  }

  p:last-child {
    text-align: center;
    font-weight: bold;
    font-style: italic;
  }
`;

export default HomeContent;
