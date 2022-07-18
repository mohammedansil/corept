import styled from "styled-components";

export const Section = styled.div`
  margin-bottom: 10px;
  background-color: #fff;
  width:100vw;
  max-height:auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top:100px;
  touch-action: pan-down;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  user-select: none;
  overflow:hidden;
  width: 90%;
  height:auto;
  cursor:grab;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  
`;
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  position:relative;
  

`;
export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit:cover;
  border-radius: 20px;
  @media (max-width: 768px) {
    width: 100%;
    object-fit: cover;
  }
`;
export const Project = styled.div`
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: center;
  padding:1.5rem;
  position: relative;
  width:90%;
   height:auto;
   margin:0 auto;
   background-size:cover;
  background-repeat: no-repeat;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
  @media (min-width: 768px)and (max-width:1367px) {
    flex-direction: row;
  }
`;

export const RightContainer = styled.div`
  width: 370px;
  height: auto;
  margin-bottom:1rem;
  max-width:100%;
  overflow:none;
  padding: 95px 20px 0 20px;
  margin-left: auto;

margin-right:auto;  
@media (max-width: 768px) {
    width: 90%;
  }
  @media (min-width: 768px)and (max-width:1367px) {
    width: 60%;
  }
  
`;
export const IndexNo = styled.h1`
  position: relative;
  color: #febc35;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 50px;
`;
export const Title = styled.h1`
  position: relative;
  margin-bottom: 30px;
  @media (max-width: 768px){
    font-size: 20px;
  }
`;
export const Description = styled.p`
  position: relative;
  opacity:0.8;
  text-align:center;
  line-height: 1.5em;
  margin-bottom: 1rem;
  width:90%;
  @media (max-width: 768px){
    font-size: 12px;
    width: 50%;
    margin-right: 0;
    display:none;
    
  }
`;
export const Button = styled.button`
  position: relative;
  color: #222222;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration:underline;
  transition: all 300ms ease;
  background-color: transparent;
  border: none;
`;
export const Span = styled.span`
font-size:22px;
font-weight:600;
`;
export const QuestionSection = styled.div``;
export const Icon = styled.div``;
