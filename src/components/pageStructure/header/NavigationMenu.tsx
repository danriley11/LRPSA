import { useState } from 'react';
import { useNavigate } from 'react-router';
import { HOME, ABOUT, CONSULTATIONS, SPECIALISTS, CONTACT } from '../../../routes/routes';
import { MenuIconContainer, XBar1, XBar2, XBar3 } from '../../menu/Menu.styles';
import { MenuDropdownContainer, MenuDropdownItem } from '../../menu/MenuDropdown.styles';
import { P } from '../../core/typography';
import { useLocation } from 'react-router-dom';

const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };

  function pathMatch(path: string): boolean {
    if (path === location.pathname) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
      <MenuIconContainer className="nav-toggle" onClick={toggleHamburger}>
        <XBar1 isOpen={isOpen} />
        <XBar2 isOpen={isOpen} />
        <XBar3 isOpen={isOpen} />
      </MenuIconContainer>

      {isOpen && (
        <MenuDropdownContainer>
          <MenuDropdownItem
            isPath={pathMatch(HOME)}
            onClick={() => {
              toggleHamburger();
              navigate(HOME);
            }}>
            <P>Home</P>
          </MenuDropdownItem>

          <MenuDropdownItem
            isPath={pathMatch(ABOUT)}
            onClick={() => {
              toggleHamburger();
              navigate(ABOUT);
            }}>
            <P>About</P>
          </MenuDropdownItem>

          <MenuDropdownItem
            isPath={pathMatch(CONSULTATIONS)}
            onClick={() => {
              toggleHamburger();
              navigate(CONSULTATIONS);
            }}>
            <P>Consultations</P>
          </MenuDropdownItem>

          <MenuDropdownItem
            isPath={pathMatch(SPECIALISTS)}
            onClick={() => {
              toggleHamburger();
              navigate(SPECIALISTS);
            }}>
            <P>Specialists</P>
          </MenuDropdownItem>

          <MenuDropdownItem
            isPath={pathMatch(CONTACT)}
            onClick={() => {
              toggleHamburger();
              navigate(CONTACT);
            }}>
            <P>Contact Noelle</P>
          </MenuDropdownItem>
        </MenuDropdownContainer>
      )}
    </>
  );
};

export default NavigationMenu;
