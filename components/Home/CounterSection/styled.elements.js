import styled from "styled-components";

export const Section = styled.div`
  background-image: url("https://expert-themes.com/newwp/emarat/wp-content/uploads/2020/10/3.jpg");
  width: 100%;
  height: 181px;
  align-items: center;
  justify-content: center;
  display: flex;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  flex-direction: row;
  @media (max-width: 768px) {
    height: 100%;
  }
`;
export const Container = styled.div`
  padding: 0px 15px;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    
  }
`;
export const Counter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  font-size: 60px;
  line-height: 1em;
  color: #ffffff;
  font-weight: 700;
  padding: 20px 0;
  padding-left: 20px;
  @media (max-width: 768px) {
    margin-bottom: 15px;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  position: relative;
  display: block;
  font-size: 18px;
  line-height: 1.2em;
  font-weight: 400;
  color: #dddddd;
  padding: 9px 0;
  width: 40%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const Number = styled.p`
  /* position: relative;
float: left; */
  margin-right: 15px;
  position: relative;
  display: inline-block;
  font-size: 60px;
  line-height: 1em;
  color: #ffffff;
  font-weight: 700;
`;
