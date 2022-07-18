import Links from '../../../data/menuLinks';
import {LogoText} from '../ChildNavbar/ChildNavbar.styled';
import { CloseIcon, IconContainer, SidebarContainer, SidebarMenu, SidebarMenuLink, SidebarMenuLinkA, SidebarMenuWrapper, SidebarTopContainer } from './Sidebar.styled'

const Sidebar = ({ isOpen,toggle}) => {
  return (
    
    <SidebarContainer isOpen={isOpen} onClick={toggle} >
      <SidebarTopContainer>
        <LogoText>Intelpik.</LogoText>
      <IconContainer onClick={toggle}>
            <CloseIcon/>
        </IconContainer>
      </SidebarTopContainer>
       
        <SidebarMenuWrapper>
        {Links.map((link) => (
        <SidebarMenu key={link.id} onClick={toggle}>
        <SidebarMenuLink  href={link.to}>
         <SidebarMenuLinkA> {link.name}</SidebarMenuLinkA>
        </SidebarMenuLink>
        </SidebarMenu>
      ))}
        </SidebarMenuWrapper>
    </SidebarContainer>
   
  )
}

export default Sidebar