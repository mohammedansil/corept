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
                <IconContainerText>+973 3230 2049</IconContainerText>
              </IconContainer>
          
              <IconContainer>
                <IconContainerTime />{" "}
                <IconContainerText>08:00 am - 05:00 pm</IconContainerText>
              </IconContainer>
              <IconContainer>
                <IconContainerLocation />
                <IconContainerText>
                  villa -130, road -2803, block-328
                  <br />
                  Manama Kingdom of Bahrain
                </IconContainerText>
              </IconContainer>
            </FooterWorkingDiv>
          </FooterTopWrapper>

          <FooterBottomWrapper>
            <FooterCopyRightText>
              Copyrights 2022. All Rights are Reserved by&nbsp;
              <FooterCopyRightTextSpan>Intelpik</FooterCopyRightTextSpan>
            </FooterCopyRightText>
          </FooterBottomWrapper>
        </FooterWrapper>
      </Container>
    </Section>
  );
};

export default Footer;
