import React, { CSSProperties } from "react";
import {
  Section,
  Container,
  LeftContainer,
  IndexNo,
  Image,
  RightContainer,
  Title,
  Description,
  Button,
  Project,
  Span,
} from "./styled.elements";
import { FaLongArrowAltRight } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Link from 'next/link'

function index() {
 
  return (
    <Section>
      <Container>
        <Carousel
          infiniteLoop={true}
          showArrows={true}
          autoPlay={true}
          interval={1900}
          width={"100%"}
          useKeyboardArrows={true}
          showStatus={false}
          showThumbs={false}
          stopOnHover={true}
          swipeable={true}
          emulateTouch={true}
        >
          <Project>
            <LeftContainer>
              <Image
                src="/images/projectImg/Web capture_15-7-2022_194814_.jpeg"
                alt="image"
              />
            </LeftContainer>

            <RightContainer>
              <IndexNo>
                01<Span>/03</Span>
              </IndexNo>
              <Title>VILLA AT RIFFA</Title>
              <Description>
                In the year 2021 CPC Acquired Specialised Engineering a leading
                Post Tensioning Company in the Kingdom of Bahrain as a part of
                the diversification strategy.
              </Description>
              <Link href="/projects" passHref>
                <a>
                  <Button>
                    See Project <FaLongArrowAltRight />
                  </Button>
                </a>
              </Link>
            </RightContainer>
          </Project>

          <Project>
            <LeftContainer>
              <Image
                src="/images/projectImg/Web capture_15-7-2022_19461_.jpeg"
                alt="image"
              />
            </LeftContainer>
            <RightContainer>
              <IndexNo>
                02<Span>/03</Span>
              </IndexNo>
              <Title> VILLA AT DIYAR AL MUHARRAQ</Title>
              <Description>
                Our goal is to strengthen our position as a trusted post
                tensioning service provider in Kingdom of Bahrain through the
                development of our technical expertise&amp; satisfy the
                customer.
              </Description>
              <Link href="/projects" passHref>
                <a>
                  <Button>
                    See Project <FaLongArrowAltRight />
                  </Button>
                </a>
              </Link>
            </RightContainer>
          </Project>

          <Project>
            <LeftContainer>
              <Image
                src="/images/projectImg/Web capture_17-7-2022_104339_.jpeg"
                alt="image"
              />
            </LeftContainer>
            <RightContainer>
              <IndexNo>
                03<Span>/03</Span>
              </IndexNo>
              <Title> VILLA AT MURQOBAN</Title>
              <Description>
                &quot;Customer Satisfaction&quot; is always our top priority in
                the operations. HSE, Quality and Reliability are the
                comer-stones of CPC&apos;s business venture.
              </Description>
              <Link href="/projects" passHref>
                <a>
                  <Button>
                    See Project <FaLongArrowAltRight />
                  </Button>
                </a>
              </Link>
            </RightContainer>
          </Project>
        </Carousel>
      </Container>
    </Section>
  );
}

export default index;
