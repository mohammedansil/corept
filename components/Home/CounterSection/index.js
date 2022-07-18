import { Section, Container, Title, Counter, Number } from "./styled.elements";

function index() {
  return (
    <Section>
      <Container>
        <Counter>
          <Number>14</Number>
          <Title>Years of Experience</Title>
        </Counter>
        <Counter>
          <Number>237</Number>
          <Title>Project Taken</Title>
        </Counter>
        <Counter>
          <Number>11K</Number>
          <Title>Twitter Follower</Title>
        </Counter>
        <Counter>
          <Number>12</Number>
          <Title>Awards won</Title>
        </Counter>
      </Container>
    </Section>
  );
}

export default index;
