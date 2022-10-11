import { Section, Container, Title, Counter, Number } from "./styled.elements";

function index() {
  return (
    <Section>
      <Container>

        <Counter>
          <Number>15+</Number>
          <Title>Years of Experience engineers</Title>
        </Counter>
        <Counter>
          <Number>100+</Number>
          <Title>Satisfied Clients</Title>
        </Counter>
        <Counter>
          <Number>300+</Number>
          <Title>Projects Ongoing </Title>
        </Counter>
        {/* <Counter>
          <Number>11K</Number>
          <Title>Twitter Follower</Title>
        </Counter>
        <Counter>
          <Number>12</Number>
          <Title>Awards won</Title>
        </Counter> */}
      </Container>
    </Section>
  );
}

export default index;
