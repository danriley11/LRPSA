import styled, { css } from 'styled-components';
import { black, darkGrey, hoverPurple, lightGrey, white, activePurple, inactivePurple } from '../core/colours';
import { rem } from '../core/styles';
import { fontFamily, fontSize16, fontWeightSemiBold } from '../core/typography';

type ButtonLinkProps = {
  fontWeight?: number;
  disabled?: boolean;
};
export const ButtonLink = styled.button<ButtonLinkProps>`
  display: flex;
  width: fit-content;

  color: ${hoverPurple};
  background-color: ${inactivePurple};

  border: 1px solid ${hoverPurple};
  border-radius: ${rem(24)};

  padding: ${rem(12)};

  font-size: ${fontSize16};
  font-family: ${fontFamily};
  font-weight: ${({ fontWeight = fontWeightSemiBold }) => fontWeight};

  &:hover {
    color: ${white};
    background-color: ${hoverPurple};
    cursor: pointer;
  }

  &:active {
    color: ${white};
    background-color: ${activePurple};
  }

  ${({ disabled = false }) =>
    disabled &&
    css`
      color: ${darkGrey};
      background-color: ${lightGrey};
      border: 1px solid ${black};
      pointer-events: none;
      text-decoration: line-through;
    `}
`;
