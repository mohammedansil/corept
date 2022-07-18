import {
  Section,
  Container,
  Head,
  Title,
  Description,
  Form,
  FirstInput,
  Name,
  Email,
  Message,
  Button,
} from "./styled.elements";

function index() {
  return (
    <Section>
      <Container>
        <Head>Write a Message</Head>
        <Title>Have Any Questions?</Title>
        <Description>Thank you very much for your interest in our company and our services and if you have any questions, please write us a message now!</Description>
        <Form>
          <FirstInput>
            <Name type="text" placeholder="Your name"/>
            <Email type="email" placeholder="Your email"/>
          </FirstInput>
          <Message/>
          <Button>Send Message</Button>
        </Form>
      </Container>
    </Section>
  );
}

export default index;
