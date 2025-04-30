import { useState } from 'react';
import { HeaderStyles as S } from '../../styles';
import { navItems } from '../dataObjects/navigationObjects';

function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <S.NavbarWrapper>
      <S.StyledHamburgerIcon
        onClick={() => setShowMenu(!showMenu)}
        dangerouslySetInnerHTML={{ __html: '<i class="fa-solid fa-bars"></i>' }}
      ></S.StyledHamburgerIcon>
      <S.NavLinkWrapper o={{ showOnMobile: showMenu }}>
        {navItems.map((link) => (
          <S.StyledNavLink
            href={link.link}
            target={link.target}
            onClick={() => setShowMenu(!showMenu)}
          >
            {link.title}
          </S.StyledNavLink>
        ))}
      </S.NavLinkWrapper>
    </S.NavbarWrapper>
  );
}

export default function Header() {
  return (
    <header>
      <Nav />
    </header>
  );
}
