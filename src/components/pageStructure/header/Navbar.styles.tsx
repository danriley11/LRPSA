import styled from 'styled-components';
import { darkGrey, decorativePurple, softGrey, white } from '../../core/colours';
import { MENU_Z_INDEX } from '../../core/z-index';
import { mediaUp, rem } from '../../core/styles';

type NavbarContainerProps = {
  isScrolled: boolean;
};
export const NavbarContainer = styled.div<NavbarContainerProps>`
  display: flex;
  position: sticky;
  top: 0;
  justify-content: space-between;
  flex-wrap: nowrap;
  border-bottom: 1px solid ${softGrey};
  z-index: ${MENU_Z_INDEX};

  background-color: ${({ isScrolled }) => (isScrolled ? darkGrey : 'transparent')};

  & > * {
    align-self: center;

    ${mediaUp.xs`
    margin: 0 ${rem(8)};
  `};

    ${mediaUp.sm`
    margin: 0 ${rem(16)};
  `};

    ${mediaUp.md`
    margin: 0 ${rem(24)};
  `};

    ${mediaUp.lg`
    margin: 0 ${rem(40)};
  `};
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  padding: 4px 0;
  cursor: pointer;

  h1 {
    color: ${white};
  }
`;

export const NavBacking = styled.div<{ position?: string }>`
  position: ${({ position = 'absolute' }) => position};
  top: 0;
  left: 0;
  right: 0;
  background-color: ${decorativePurple};

  height: ${rem(108)};
`;
