import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

export const Nav = styled.nav`
  background:rgba(0, 0, 0, 0.14);
  box-shadow: 0px 9px 5px 0px rgba(176,176,176,0.08);
  color: #fff;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top:0;
  left:0;
  right:0;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  top: 0;
  z-index: 10;
  overflow: hidden;
  @media screen and (max-width:960px) {
    transition: all 0.8s ease-in-out;
    position:relative;
    background:#fff;
    color:#000;
  }
`;
export const NavContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const Logo = styled(motion.img)`
  width: auto;
  height: 40px;
  max-height:100%;
  object-position:center;
  object-fit: cover;
  cursor: pointer;
`;

export const NavMenu = styled(motion.ul)`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;


export const LogoText = styled.h1`
 font-size:24px;
 font-weight:600;
 color: #fff;
`

export const NavItem = styled(motion.li)`
  list-style: none;
  margin-right: 24px;

`;

export const NavLink = styled(Link)`

  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.5px;
  text-align: center;
  white-space: nowrap;
  text-decoration: none;
  height: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 6px;
  padding: 0 1rem;
  cursor: pointer;
`;
export const NavLinkA = styled(motion.a)`

  cursor: pointer;
`;

export const MobileMenu = styled(motion.div)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
    cursor: pointer;
    text-align: center;
  }
`;

export const MenuIcon = styled(HiOutlineMenuAlt4)`
  color: #000;
  font-size: 1.8rem;
`;
