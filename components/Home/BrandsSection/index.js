import { Section, Container, Title, Counter, Image,Overlay } from "./styled.elements";

function index() {
  return (
    <Section>
      <Container>
        <Overlay src="/images/corept overlay.jpg"/>
        {/* <Counter>
          <Image src="/images/br1.jpg" alt="image" />
        </Counter> */}
        <Counter>
        <Image src="/images/br2.jpg" alt="image" />
        </Counter>
        <Counter>
        <Image src="/images/br5.jpg" alt="image" />
        </Counter>
        <Counter>
        <Image src="/images/br4.png" alt="image" />
        </Counter>
        <Counter>
        <Image src="/images/br6.jpg" alt="image" />
        </Counter>
        <Counter>
        <Image src="/images/br10.png" alt="image" />
        </Counter>
        <Counter>
        <Image src="/images/br7.jpg" alt="image" />
        </Counter>
        <Counter>
        <Image src="/images/br11.jpg" alt="image" />
        </Counter>
        
      </Container>
    </Section>
  );
}

export default index;
