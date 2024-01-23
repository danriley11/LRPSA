import { useNavigate } from 'react-router';
import { HOME } from '../../../routes/routes';
import { Heading1 } from '../../core/typography';
import { LogoContainer, NavbarContainer } from './Navbar.styles';
import NavigationMenu from './NavigationMenu';
import { useEffect, useState } from 'react';

export const Navbar = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(!!scrollTop);
    };

    window.addEventListener(`scroll`, handleScroll);

    return () => {
      window.removeEventListener(`scroll`, handleScroll);
    };
  }, []);

  return (
    <NavbarContainer isScrolled={isScrolled} as="header">
      <LogoContainer onClick={() => navigate(HOME)}>
        <Heading1>Logo</Heading1>
      </LogoContainer>
      <NavigationMenu />
    </NavbarContainer>
  );
};
