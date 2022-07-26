import {
  Section,
  Container,
  Head,
  Title,
  Description,
  FormDescription,
  Form,
  FirstInput,
  ThirdInput,
  SecondInput,
  Name,
  Email,
  Message,
  Button,
  Career,
  DOB,
  Phone,
  Qualification,
  Experience,
  FormText,
} from "./styled.elements";
import {send} from "emailjs-com";
import {useState,useEffect} from 'react';
function CareerPage() {
  const [name,setName] = useState("")
  const[email,setEmail] = useState("")
  const[number,setNumber] = useState("")
  const[dob,setDob] = useState("")
  const[qualification,setQualification] = useState("")
  const[experience,setExperience] = useState("")
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
      "template_o1gm40f",
      {name,email,message,number,dob,qualification,experience,senderTime,senderDate},
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
    setNumber("");
    setSenderDate("");
    setSenderTime("");
    setDob("");
    setQualification("");
    setExperience("");
    setMessage("");
  };
  const submit = (e) => {
    sendMail(e);
  };
  return (
    <Section>
      <Container>
        <Career>
          <Head>CAREERS</Head>
          <Description>CORE PT  believe in meeting the need of our customers proactively by intuitively understanding their requirements and providing them appropriate solutions. CORE PT  is able to offer young professionals an opportunity to realize their dreams of pursuing a rewarding and yet exciting career. We offer annual openings in construction, marketing and design disciplines, as we gear ourselves towards achieving our primary goal</Description>
          <Title>INTEGRITY:</Title>
          <Description>We believe in being transparent and following our organization ethics which includes ensuring equality, mutual motivation, and keeping our conviction on our goals intact.</Description>
          <Title>RESPECT FOR INDIVIDUALS:</Title>
          <Description>We believe in respecting every individual for what they are and hence we make every effort to understand our employee’s ideas, aspiration and needs. We strongly think that when we accept them completely, we bring out the best in them which in turn aids our organization progress.</Description>
          <Title>TEAM WORK:</Title>
          <Description>We believe in bringing out the best in our employees by identifying their true potential and helping them develop optimally to meet our organization objectives. We do this by encouraging self and collective capabilities towards enhanced team performance.</Description>
        </Career>
        <Form onSubmit={submit}>
          <FormText>Career Form</FormText>
          <FormDescription>TO BE THE MOST VALUED SPECIALISED PROJECT PARTNER OF OUR CLIENTS!</FormDescription>
          <FormDescription>For aspiring young graduates or experience applicants seeking for new challenges, please feel free to submit the form below with your details:</FormDescription>
          <FirstInput>
              <Name type="text" placeholder="Your name" value={name}onChange={(e)=>{
                setName(e.target.value);
              }}/>
              <Email type="email" placeholder="Your email" value={email}onChange={(e)=>{
                setEmail(e.target.value);
              }}/>
            </FirstInput>
          <FirstInput>
              <DOB type="date" placeholder="Your Date of Birth" value={dob}onChange={(e)=>{
                setDob(e.target.value);
              }}/>
              <Phone type="number" placeholder="Your Phone" value={number}onChange={(e)=>{
                setNumber(e.target.value);
              }}/>
            </FirstInput>
          <FirstInput>
              <Qualification type="text" value={qualification} placeholder="Your Qualification"onChange={(e)=>{
                setQualification(e.target.value);
              }}/>
              <Experience type="number" value={experience} placeholder="Your Experience"onChange={(e)=>{
                setExperience(e.target.value);
              }}/>
            </FirstInput>
            <Message type="text" value={message} placeholder="Your Message"onChange={(e)=>{
                setMessage(e.target.value);
              }}/>
            <Button type="submit">Send Message</Button>
        </Form>
        {/* <Head>Write a Message</Head>
        <Title>Have Any Questions?</Title>
        <Description>Thank you very much for your interest in our company and our services and if you have any questions, please write us a message now!</Description>
        <Form>
          <FirstInput>
            <Name type="text" placeholder="Your name"/>
            <Email type="email" placeholder="Your email"/>
          </FirstInput>
          <Message/>
          <Button>Send Message</Button>
        </Form> */}
      </Container>
    </Section>
  );
}

export default CareerPage;
