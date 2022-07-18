import { Section, Container, Title, Counter, Image } from "./styled.elements";

function index() {
  return (
    <Section>
      <Container>
        <Counter>
          <Image src="/images/br1.jpeg" alt="image" />
        </Counter>
        <Counter>
        <Image src="/images/br2.jpeg" alt="image" />
        </Counter>
        <Counter>
        <Image src="/images/br3.jpeg" alt="image" />
        </Counter>
        <Counter>
        <Image src="/images/br4.jpeg" alt="image" />
        </Counter>
        <Counter>
        <Image src="/images/br5.jpeg" alt="image" />
        </Counter>
      </Container>
    </Section>
  );
}

export default index;
