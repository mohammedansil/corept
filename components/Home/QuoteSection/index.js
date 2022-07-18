import { Section, Container, Title,Button } from "./styled.elements";
import Link from 'next/link'

function index() {
  return (
    <Section>
      <Container>
        <Title>LOOKING AN ADEQUATE SOLUTION FOR YOUR PROJECT?</Title>
        <Link href="/contact-us" passhref>
         <a> <Button>Get A Quote</Button></a>
       </Link>
      </Container>
    </Section>
  );
}

export default index;
