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
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1610340.110288804!2d145.053135!3d-37.972566!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1657737995037!5m2!1sen!2sus"
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
