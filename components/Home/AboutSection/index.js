import {
  Section,
  Container,
  LeftContainer,
  FirstImage,
  SecondImage,
  RightContainer,
  Title,
  Description,
  Button,
  Head,
  Head2,
  DotImage
} from "./styled.elements";
import Link from "next/link";

function index() {
  return (
    <Section>
      <DotImage src="https://expert-themes.com/newwp/emarat/wp-content/themes/emarat/assets/images/resource/curve-1.png"/>
      <Container>
        <LeftContainer>
          {/* <Head>About Us</Head> */}
          <FirstImage src="https://expert-themes.com/newwp/emarat/wp-content/uploads/2020/10/about-1.jpg" />
          <SecondImage src="/images/WhatsApp Image 2022-07-05 at 8.50.43 PM.jpeg" />
          <Head2>About Us</Head2>
        </LeftContainer>
        <RightContainer>
          <Title>Committed 	&amp; Motivated</Title>
          <Description>
          CORE PT, post tensioning company was established by a team of Singapore and Indian experienced professionals in the year of 2021 with the aim to provide value added engineering solutions to our clients using post tensioning system.
We as a specialist agency in post tensioning, offer efficient structural Engineering consultation solution to building and infrastructure works.

          </Description>
          <Link href="/contact-us" passhref>
         <a><Button>Contact</Button></a>
          </Link>
        </RightContainer>
      </Container>
    </Section>
  );
}

export default index;
