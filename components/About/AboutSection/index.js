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
  DotImage,
} from "./styled.elements";
import Link from 'next/link'
function index() {
  return (
    <Section>
      <DotImage
        src="https://expert-themes.com/newwp/emarat/wp-content/themes/emarat/assets/images/resource/curve-1.png"
        alt="image"
      />
      <Container>
        <LeftContainer>
          {/* <Head>About us</Head> */}
          <FirstImage src="/images/projectImg/Web capture_15-7-2022_19470_.jpeg" alt="image"/>
          <SecondImage
            src="/images/projectImg/Web capture_15-7-2022_194814_.jpeg"
            alt="image"
          />
          {/* <Head2>About Us</Head2> */}
        </LeftContainer>
        <RightContainer>
          <Title>POST TENSIONING SERVICES</Title>
          <Description>
            In the year 2021 CPC Acquired Specialised Engineering a leading Post
            Tensioning Company in the Kingdom of Bahrain as a part of the
            diversification strategy. Our goal is to strengthen our position as
            a trusted post tensioning service provider in Kingdom of Bahrain
            through the development of our technical expertise &apm; satisfy the
            customer. The company now offers Design, Supply, Installation and
            Supervision of Post Tension Slab systems that add value to the end
            user in terms of Savings in overall structural cost. Post Tensioning
            is a method of reinforcing concrete. High strength steel tendons are
            passed into the ducts (systematic procedure) and concrete is poured
            after that tension applied to the concrete
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
