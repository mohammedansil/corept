import {
  Section,
  Container,
  Service,
  Icon,
  Image,
  ServiceDiv,
  Button,
  Overlay,
  Description,
  Title,
  BackgroundText,
  SectionHead,
  SectionTitle,
} from "./styled.elements";
import {IoConstructOutline} from 'react-icons/io';

function index() {
  return (
    <Section>
      <SectionHead>Our Services</SectionHead>
      <SectionTitle>Whats Our Offers</SectionTitle>
      <Container>
      <Service>
          <Image src="/images/serv.jpeg" alt="image" />
          <ServiceDiv>
            <Icon></Icon>
            <Title>POST TENSIONING SERVICES</Title>
            <Overlay>
              <Description>
                In the year 2021 CPC Acquired Specialised Engineering a leading
                Post Tensioning Company in the Kingdom of Bahrain as a part of
                the diversification strategy.
              </Description>
              <Button>Read More</Button>
            </Overlay>
          </ServiceDiv>
        </Service>
        <Service>
          <Image src="/images/ptraft.jpeg" alt="Image" />
          <ServiceDiv>
            <Icon></Icon>
            <Title>PT Raft Foundationn</Title>
            <Overlay>
              <Description>
                Post Tensioning is a method of reinforcing concrete. High
                strength steel tendons are passed into the ducts (systematic
                procedure) and concrete is poured after that tension applied to
                the concrete
              </Description>
              <Button>Read More</Button>
            </Overlay>
          </ServiceDiv>
        </Service>
        <Service>
          <Image src="/images/sys.jpeg" alt="image" />
          <ServiceDiv>
            <Icon></Icon>
            <Title>POST TENSIONING SYSTEM</Title>
            <Overlay>
              <Description>
                Our goal is to strengthen our position as a trusted post
                tensioning service provider in Kingdom of Bahrain through the
                development of our technical expertise &amp; satisfy the customer.
              </Description>
              <Button>Read More</Button>
            </Overlay>
          </ServiceDiv>
        </Service>
      </Container>
    </Section>
  );
}

export default index;
