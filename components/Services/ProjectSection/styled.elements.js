import styled from "styled-components";

export const Section = styled.div`
  width: 100vw;
  height: 100%;
  max-width: 100%;
`;
export const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding-top: 2rem;
  @media (max-width: 560px) {
    padding-top: 0.9rem;
  } ;
`;

export const ProjectSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem 1rem;
`;
export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-bottom: 2rem;
`;

export const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  width: 90%;
  height: auto;
  margin-top: 2rem;

  @media (max-width: 860px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 520px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ProjectCard = styled.div`
  width: 100%;
  height: 100%;
  position:relative;
  display:flex;
  flex-direction:column;
	border-radius:15px;
  padding:1rem;
  background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.25 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
`;

export const ProjectTextWrapper = styled.div`
width:100%;
height:auto;
padding:6px 0;
border-top:1px solid rgba( 0, 0, 0, 0.22);
margin-top:8px;
display:flex;
flex-direction:column;
justify-content:space-between;
`;

export const ProjectTitle = styled.h3`
font-size:20px;
line-height:150%;
font-weight:600;
margin-bottom:10px;
border-bottom:1px solid black;
/* border-radius:20px; */
padding:10px;

@media screen and (max-width:299px){
  font-size:18px;
}
`

export const ProjectDesc = styled.p`
font-size:16px;
opacity:0.8;
line-height:160%;
text-transform:capitalize;
width:100%;
margin-bottom:8px;
letter-spacing:0.8px ;
/* text-align:center; */
@media screen and (max-width:299px){
  font-size:14px;
}
`
export const ProjectDescTwo = styled.p`
font-size:16px;
opacity:0.8;
line-height:160%;
text-transform:capitalize;
width:100%;
@media screen and (max-width:299px){
  font-size:14px;
}
/* text-align:center; */
`

export const ProjectImage = styled.img`
  /* min-width:500px; */
  width: 100%;
  max-width:450px;
  max-height:450px;
  min-height:250px;
  object-fit: cover;
  object-position:center;
  height: 100%;
`;

export const SubTitle = styled.p`
  color: #ffb200 !important;
  margin-bottom:8px;
  font-size:18px;
  font-weight:600px;
  @media (max-width: 520px) {
    font-size: 16px;
  }
`;

export const Title = styled.h3`
  font-size:34px;
  font-weight: 600;

  @media (max-width: 520px) {
    font-size: 28px;
  }
`;

export const Line = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top:14px;
  &:before {
    display: block;
    content: "";
    width: 60px;
    height: 2.1px;
    background-color: #222;
  }

  &:after {
    display: block;
    content: "";
    margin-top: 4px;
    width: 40px;
    height: 2px;
    background-color: #222;
  }
`;
