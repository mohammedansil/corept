import {
  Container,
  FooterBottomWrapper,
  FooterCopyRightText,
  FooterCopyRightTextSpan,
  FooterLogoDiv,
  FooterLogoDivDesc,
  FooterLogoDivImage,
  FooterLogoDivLink,
  FooterLogoDivLinkA,
  FooterLogoDivSocial,
  FooterLogoDivSocialFacebook,
  FooterLogoDivSocialInsta,
  FooterLogoDivSocialTwitter,
  FooterTopWrapper,
  FooterWorkingDiv,
  FooterWorkingTitle,
  FooterWorkingTitleUnderline,
  FooterWrapper,
  IconContainer,
  IconContainerLocation,
  IconContainerMail,
  IconContainerPhone,
  IconContainerText,
  IconContainerTime,
  Section,
} from "./Footer.styled";

const Footer = () => {
  return (
    <Section>
      <Container>
        <FooterWrapper>
          <FooterTopWrapper>
            <FooterLogoDiv>
              <FooterLogoDivImage src="/images/logo.jpg" />
              <FooterLogoDivDesc>
                We are a Bahraini Company headed by the Executive Director, Mrs.
                Aala Ebrahim Janahi and Director of Mr. Mohammed Janahi
              </FooterLogoDivDesc>
              <FooterLogoDivSocial>
                {/* <FooterLogoDivLink href="facebook.com">
                  <FooterLogoDivLinkA>
                    <FooterLogoDivSocialFacebook />
                  </FooterLogoDivLinkA>
                </FooterLogoDivLink> */}

                <FooterLogoDivLink
                  href="https://www.instagram.com/p/Cfw7CuAM5rh/?igshid=MDJmNzVkMjY="
                  passHref
                >
                  <FooterLogoDivLinkA>
                    <FooterLogoDivSocialInsta />
                  </FooterLogoDivLinkA>
                </FooterLogoDivLink>

                {/* <FooterLogoDivLink href="twitter.com">
                  <FooterLogoDivLinkA>
                    <FooterLogoDivSocialTwitter />
                  </FooterLogoDivLinkA>
                </FooterLogoDivLink> */}
              </FooterLogoDivSocial>
            </FooterLogoDiv>

            <FooterWorkingDiv>
              <FooterWorkingTitle>Working Hours</FooterWorkingTitle>
              <FooterWorkingTitleUnderline />
              <IconContainer>
                <IconContainerMail />
                <IconContainerText>info@corept.me</IconContainerText>
              </IconContainer>
              <IconContainer>
                <IconContainerPhone />
                <IconContainerText>+973 32302049<br/>+973 37132632</IconContainerText>
              </IconContainer>
          
              <IconContainer>
                <IconContainerTime />{" "}
                <IconContainerText>08:00 am - 05:00 pm</IconContainerText>
              </IconContainer>
              <IconContainer>
                <IconContainerLocation />
                <IconContainerText>
                Building 612, Road -2519, Block -925, <br/>Riffa
Kingdom Of Bahrain

                </IconContainerText>
              </IconContainer>
            </FooterWorkingDiv>
          </FooterTopWrapper>

          <FooterBottomWrapper>
            <FooterCopyRightText>
              Copyrights 2022. All Rights are Reserved by&nbsp;
              <FooterCopyRightTextSpan href="https://intelpik.com/" target="_blank">Intelpik</FooterCopyRightTextSpan>
            </FooterCopyRightText>
          </FooterBottomWrapper>
        </FooterWrapper>
      </Container>
    </Section>
  );
};

export default Footer;
