import { Section, Container, Title, Counter, Image } from "./styled.elements";

function index() {
  return (
    <Section>
      <Container>
        <Counter>
          <Image src="/images/br1.jpg" alt="image" />
        </Counter>
        <Counter>
        <Image src="/images/br2.jpg" alt="image" />
        </Counter>
        <Counter>
        <Image src="/images/br3.png" alt="image" />
        </Counter>
        <Counter>
        <Image src="/images/br4.png" alt="image" />
        </Counter>
        
      </Container>
    </Section>
  );
}

export default index;
