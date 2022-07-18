import React,{useState} from 'react';
import {Data} from '../../../data/FaqData';
import {
  Section,
  Container,
  LeftContainer,
  RightContainer,
  Head,
  Title,
  Faqs,
  Question,
  Answer,
  Image,
  Icon,
  QuestionSection,
  QuestionWrapper,
} from "./styled.elements";
import{FiPlus,FiMinus} from 'react-icons/fi'
function Faq() {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <Section>
      <Container>
        <LeftContainer>
          <Image src="/images/tre.jpeg" alt="image"/>
        </LeftContainer>
        <RightContainer>
          <Head>Fequality Ask Question</Head>
          <Title>Some FAQ’s</Title>
          <Faqs>
          {Data.map((item, index) => {
            return (
              
              <QuestionWrapper key={item.id}>
            <QuestionSection onClick={() => toggle(index)} >
              
              <Question>{item.question} {clicked === index ?<FiMinus/>: <FiPlus />}</Question>
            </QuestionSection>
            {clicked === index ? (
            <Answer>{item.answer}</Answer>
            ) : null}
            </QuestionWrapper>
          
            );
          })}
            </Faqs>
          
        </RightContainer>
      </Container>
    </Section>
  );
}

export default Faq;
