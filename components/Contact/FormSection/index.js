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

import {send} from "emailjs-com";
import {useState,useEffect} from 'react';
function ContactForm() {
  const [name,setName] = useState("")
  const[email,setEmail] = useState("")
  const[message,setMessage] = useState("")
  const Newdate = new Date();
  const date = Newdate.getDate();
  const month = Newdate.getMonth();
  const CurrentMonth = month + 1;
  const year = Newdate.getFullYear();
  const hour = Newdate.getHours();
  const minute = Newdate.getMinutes();
  const [senderTime, setSenderTime] = useState(hour + ":" + minute);
  const [senderDate, setSenderDate] = useState(
    date + "-" + CurrentMonth + "-" + year
  );
  const sendMail = (e) => {
    e.preventDefault();
    send(
      "service_62jcp0i",
      "template_nkw81nh",
      {name,email,message,senderTime,senderDate},
      "ANpZOVY0YaFXiIKJj"
    )
      .then((response) => {
        console.log("message sent succesfully", response.status, response.text);
      })
      .catch((err) => {
        console.log("Failed", err);
      });
    setName("");
    setEmail("");
    setSenderDate("");
    setSenderTime("");
    setMessage("");
  };
  const submit = (e) => {
    sendMail(e);
  };
  return (
    <Section>
      <Container>
        <Head>Write a Message</Head>
        <Title>Have Any Questions?</Title>
        <Description>Thank you very much for your interest in our company and our services and if you have any questions, please write us a message now!</Description>
        <Form onSubmit={submit}>
          
          <FirstInput>
            <Name type="text" placeholder="Your name" value={name}onChange={(e)=>{
                  setName(e.target.value);
                }}/>
                <Email type="email" placeholder="Your email" value={email}onChange={(e)=>{
                  setEmail(e.target.value);
                }}/>
          </FirstInput>
          <Message type="text" value={message} placeholder="Your Message"onChange={(e)=>{
                setMessage(e.target.value);
              }}/>
          <Button type="submit">Send Message</Button>
        </Form>
      </Container>
    </Section>
  );
}

export default ContactForm;
