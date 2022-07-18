import {
  Container,
  Head,
  Title,
  Description,
  Buttons,
  Button,
  SectionOne,
  SectionTwo,
  SectionThree,
  ButtonTwo,
} from "./styled.elements";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Link from 'next/link';


function index() {
  return (
   
    <SectionOne>
      <Container>

        {/* <Head>We are the best</Head> */}
        <Title>Your Expectations are Our Milestones</Title>
        <Description>We as a Specialist agency in Post Tensioning, offer efficient structural solution&apos;s.</Description>
        <Buttons>
        <Link href="/projects" passHref>
          <a><Button>Our Work</Button></a>
          </Link>
          <Link href="/contact-us" passHref>
          <a><ButtonTwo>Contact</ButtonTwo></a>
          </Link>
        </Buttons>
      </Container>
    </SectionOne>
    // <SectionTwo>
    //   <Container>

    //     {/* <Head>We are the best</Head> */}
    //     <Title>Sustainable Engineering Solution</Title>
    //     <Description>Customer Satisfaction is always our top priority in the operations.</Description>
    //     <Buttons>
    //     <Link href="/projects" passHref>
    //       <a><Button>Our Work</Button></a>
    //       </Link>
    //       <Link href="/contact-us" passHref>
    //       <a><ButtonTwo>Contact</ButtonTwo></a>
    //       </Link>
    //     </Buttons>
    //   </Container>
    // </SectionTwo>
    // <SectionThree>
    //   <Container>

    //     {/* <Head>We are the best</Head> */}
    //     <Title>Uncover the true Potential of your structure</Title>
    //     <Description>Strive towards greater cost competitiveness and work towards continued Financial Performance</Description>
    //     <Buttons>
    //     <Link href="/projects" passHref>
    //       <a><Button>Our Work</Button></a>
    //       </Link>
    //       <Link href="/contact-us" passHref>
    //       <a><ButtonTwo>Contact</ButtonTwo></a>
    //       </Link>
    //     </Buttons>
    //   </Container>
    // </SectionThree>
   
  );
}

export default index;
