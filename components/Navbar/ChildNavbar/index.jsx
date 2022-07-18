import { useState, useEffect } from "react";
import Links from "../../../data/menuLinks";
import {
  Logo,
  MenuIcon,
  MobileMenu,
  Nav,
  NavContainer,
  NavItem,
  NavLink,
  NavLinkA,
  NavMenu,
} from "./ChildNavbar.styled";


const ChildNavbar = ({ toggle}) => {
  const [scrollNav, setScrollNav] = useState(false);

  const chnageNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", chnageNav);
  }, []);

  return (
    
    <Nav  scrollNav={scrollNav} >
      <NavContainer>
        <NavLink href="/">
          <a><Logo src="/images/logo.jpg" alt="logo" /></a>
        </NavLink>
        <MobileMenu onClick={toggle}>
          <MenuIcon />
        </MobileMenu>
        <NavMenu>
          {Links.map((link) => (
            <NavItem key={link.id}>
              <NavLink href={link.to}>
                <NavLinkA> {link.name}</NavLinkA>
              </NavLink>
            </NavItem>
          ))}
        </NavMenu>
      </NavContainer>
    </Nav>
    
  );
};

export default ChildNavbar;
