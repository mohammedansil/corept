import styled from "styled-components";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsTelephone,
} from "react-icons/bs";
import { GoMail, GoLocation } from "react-icons/go";
import { IoMdTime } from "react-icons/io";
import Link from "next/link";

export const Section = styled.section`
  width: 100vw;
  height: 100%;
  max-width: 100%;
  background-color: #191514;
  color: #fff;
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1600px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding-top: 2rem;
  @media (max-width: 560px) {
    padding-top: 0.9rem;
  } ;
`;

export const FooterWrapper = styled.div`
width:100%;
`;
export const FooterTopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width:90%;
  justify-content: space-around;
  align-items: center;
  padding-bottom:1rem;
 margin-top:1rem;
  @media (max-width: 560px) {
    margin-top:1.2rem;
    flex-direction: column;
    min-width:100%;
    justify-content: center;
    align-items: flex-start;
    padding:1.4rem;
    text-align:left;
  } ;
`;

export const FooterLogoDiv = styled.div`
  width: 50%;
`;

export const FooterLogoDivImage = styled.img`
    width: 170px;
    height: 70px;
    margin-bottom:15px;
    object-fit:contain;
`;

export const FooterLogoDivDesc = styled.p`
  width: 80%;
  position: relative;
    color: #ffffff;
    font-size: 15px;
    line-height: 1.9em;

    @media (max-width: 560px) {
    width:97%;
  } ;
`;

export const FooterLogoDivSocial = styled.div`
    position: relative;
    margin-top: 18px;
    display: flex;
    flex-direction: row;
    align-items: center;
    `;

export const FooterLogoDivLink = styled(Link)`

`;
export const FooterLogoDivLinkA = styled.a`

`;

export const FooterLogoDivSocialFacebook = styled(BsFacebook)`
margin-right:18px;
`;

export const FooterLogoDivSocialInsta = styled(BsInstagram)`
margin-right:18px;
`;

export const FooterLogoDivSocialTwitter = styled(BsTwitter)`
margin-right:18px;
`;

export const FooterWorkingDiv = styled.div`
width:auto;

@media (max-width: 560px) {
    padding-top: 0.9rem;
  } ;
`;

export const FooterWorkingTitle = styled.h3`
   position: relative;
    font-size: 16px;
    font-weight: 600;
    color: #ffffff;
    margin-bottom:5px;
    line-height: 1.2em;
    margin-top: 25px;
    text-transform: capitalize;
`;

export const FooterWorkingTitleUnderline = styled.hr`
border-color:#ffb200;
background-color: #ffb200;
outline:none;
margin-bottom: 15px;
width:38%;
height:3px;
`;

export const IconContainer = styled.div`
display:flex;
flex-direction:row;
margin-bottom:10px;
align-items:center;
text-align:left;
`;

export const IconContainerText = styled.p`
color: #ffffff;
    font-size: 15px;
    line-height: 1.9em;
    margin-left:10px;
`;

export const IconContainerMail = styled(GoMail)`
color:#ffb200;
`;
export const IconContainerPhone = styled(BsTelephone)`
color:#ffb200;
`;
export const IconContainerLocation = styled(GoLocation)`
color:#ffb200;
`;
export const IconContainerTime = styled(IoMdTime)`
color:#ffb200;
`;

export const FooterBottomWrapper = styled.div`
  position: relative;
  padding: 20px 0px;
  background-color: #0b0505;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterCopyRightText = styled.p`
  text-align: center;
`;

export const FooterCopyRightTextSpan = styled.span`
  color: #ffb200;
`;
