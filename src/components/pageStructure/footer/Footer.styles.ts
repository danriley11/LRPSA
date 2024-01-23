import styled from 'styled-components';
import { decorativePurple, hoverPurple, textLightPurple, lightGrey, textDarkPurple } from '../../core/colours';
import { mediaUp, rem } from '../../core/styles';

export const FooterContainer = styled.div`
  position: relative;
  overflow-x: hidden;
  padding: 0 ${rem(30)};
  background-color: ${decorativePurple};
  box-shadow: 0 0 ${rem(32)} ${decorativePurple};

  h4 {
    color: ${textDarkPurple};
    margin-bottom: ${rem(12)};
  }
  p {
    color: ${textLightPurple};
  }

  .footer-top {
    position: relative;
    display: grid;
    border-bottom: ${rem(2)} solid ${lightGrey};
    padding-bottom: ${rem(24)};

    a {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      color: ${textLightPurple};
      text-decoration: none;

      &:hover {
        cursor: pointer;
        color: ${hoverPurple};
      }
    }

    div {
      display: grid;
      gap: ${rem(10)};
      text-align: center;
      justify-items: center;
    }

    [aria-disabled='true'] {
      color: grey;
      text-decoration: line-through;

      &:hover {
        color: grey;
        cursor: not-allowed;
      }
    }

    ${mediaUp.sm`
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      justify-content: center;
      align-items: start;

      .footer-socials {
        display: flex;
        flex-direction: row;
        justify-content: center;
      }
    `}
  }

  .footer-bottom {
    display: grid;
    justify-content: center;
  }
`;
