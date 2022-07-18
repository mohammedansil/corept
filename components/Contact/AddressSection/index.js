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
              <Description>Call us +973 3230 2049</Description>
            </Contact>
            <Contact>
              <Icon></Icon>
              <Description>info@corept.me</Description>
            </Contact>
            <Contact>
              <Icon></Icon>
              <Description>Open Hours 08:00 am - 05:00 pm</Description>
            </Contact>
            <Contact>
              <Icon></Icon>
              <Description>
              villa -130, road -2803, block-328
                  <br />
                  Manama Kingdom of Bahrain
              </Description>
            </Contact>
          </ContactDetails>
          <SocialMedia>
            <Head>Follow on:</Head>
            <Icons></Icons>
            <Icons></Icons>
            <Icons></Icons>
            <Icons></Icons>
            <Icons></Icons>
          </SocialMedia>
        </LeftContainer>
        <RightContainer>
          <Map
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6161.432483264134!2d50.570572594941765!3d26.21586132811764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49af3f7bbb9283%3A0x103c272ac21821f9!2sBlock%20328%2C%20Manama%2C%20Bahrain!5e1!3m2!1sen!2sin!4v1658114789365!5m2!1sen!2sin"
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
