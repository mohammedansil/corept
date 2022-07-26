import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  Title,
  Description,
  Buttons,
  Button,
  Section,
  ButtonTwo,
  ImageDiv,
  SliderIconContainer,
  PrevArrow,
  NextArrow,
  IconCircle,
} from "./styled.elements";
import Link from "next/link";
import slides from "../../../data/homeData";

function Home() {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };

    timeout.current = setTimeout(nextSlide, 3000);
    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
   
    <Section>
      {slides.map((slide, index) => (
        <Container key={index}>
          {index === current && (
            <ImageDiv style={{ backgroundImage: `url(${slide.image})` }}>
              <Title>{slide.title}</Title>
              <Description>{slide.paragraph}</Description>
              <Buttons>
                <Link href="/projects" passHref>
                  <a>
                    <Button>Our Work</Button>
                  </a>
                </Link>
                <Link href="/contact-us" passHref>
                  <a>
                    <ButtonTwo>Contact</ButtonTwo>
                  </a>
                </Link>
              </Buttons>
       
              <SliderIconContainer>
                <IconCircle>
                  {" "}
                  <PrevArrow onClick={prevSlide} />
                </IconCircle>
                <IconCircle>
                  {" "}
                  <NextArrow onClick={nextSlide} />{" "}
                </IconCircle>
              </SliderIconContainer>
           
            </ImageDiv>
          )}
        </Container>
      ))}
    </Section>
 
  );
}

export default Home;
