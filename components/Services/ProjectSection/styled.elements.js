import Image from "next/image";
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
  height: auto;
  position:relative;
	
`;

export const ProjectImage = styled(Image)`
  /* min-width:500px; */
  width: 100%;
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
