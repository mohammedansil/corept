import {
  Section,
  Container,
  Head,
  Title,
  Description,
  LeftContainer,
  ContactDetails,
  Contact,
  Icon,
  SocialMedia,
  Icons,
  RightContainer,
  Map,
} from "./styled.elements";

function index() {
  return (
    <Section>
      <Container>
        <LeftContainer>
          <Head>Contact Us</Head>
          <Title>Get in Touch</Title>
          <Description>
            Our engineering department is managed by highly qualified and
            experienced staff, directing a sizeable permanent workforce with
            skills available within the entire major engineering disciplines.
          </Description>
          <ContactDetails>
            <Contact>
              <Icon></Icon>
              <Description>Call us: +973 32302049 / +973 17341435</Description>
              {/* <Description>Call us: +973 32302049 / +973 37132632</Description> */}
            </Contact>
            <Contact>
              <Icon></Icon>
              <Description>Email: info@corept.me</Description>
            </Contact>
            <Contact>
              <Icon></Icon>
              <Description>Open Hours 08:00 am - 05:00 pm</Description>
            </Contact>
            <Contact>
              <Icon></Icon>
              <Description>
              Flat -26, building 1164, road 2831<br></br>block 328 Alsuqayyah 
              </Description>
            </Contact>
          </ContactDetails>
          {/* <SocialMedia>
            <Head>Follow on:</Head>
            <Icons></Icons>
            <Icons></Icons>
            <Icons></Icons>
            <Icons></Icons>
            <Icons></Icons>
          </SocialMedia> */}
        </LeftContainer>
        <RightContainer>
          <Map
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.16509202558!2d50.56970221502846!3d26.126159583472635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x60fc3c618160f353!2zMjbCsDA3JzM0LjIiTiA1MMKwMzQnMTguOCJF!5e0!3m2!1sen!2sbh!4v1658208772614!5m2!1sen!2sbh"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
         
        </RightContainer>
      </Container>
    </Section>
  );
}

export default index;
