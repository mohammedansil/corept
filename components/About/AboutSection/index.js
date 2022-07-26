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
  BelowContainer,
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
          CORE PT, post tensioning company was established by a team of Singapore and Indian experienced professionals in the year of 2021 with the aim to provide value added engineering solutions to our clients using post tensioning system.
We as a specialist agency in post tensioning, offer efficient structural Engineering consultation solution to building and infrastructure works.


          </Description>
          <Description>
          CORE PT is operating throughout Kingdom of Bahrain and its track record encompasses projects from private to public sectors, and completed sky scrappers and massive civil engineering projects are testimonials to its strive to be a leading SUSTAINABLE ENGINEERING SOLUTION company.
          </Description>
          <Link href="/contact-us" passhref>
         <a><Button>Contact</Button></a>
          </Link>
        </RightContainer>
        
      </Container>
      <BelowContainer>
        <Title>Our Strength</Title>
        <Description>All Managers & Engineers have more than 10-15 years of post-tensioning and specialist work experience.</Description>
        <Description>CORE PT powerfully trusts in getting involved with the customers’ project satisfaction from the conceptual stage so as to contribute positively in collaborating with the architectural and engineering teams from the very start, to achieve a the more efficient and cost-effective construction method.</Description>
        <Description>CORE PT construction team consists of skilled workers who are supervised by highly experienced project managers, engineers and technicians, who have unmatched experience in post-tensioning and general construction company.</Description>
        </BelowContainer>
    </Section>
  );
}

export default index;
