import styled from "styled-components";


export const Section = styled.div`
background-image: url("/images/Banner-3.jpg");
width:100%;
height:40vh;
background-size:cover;
background-repeat: no-repeat;
display: flex;
flex-direction: row;
padding:2rem;
@media (max-width: 520px) {
    padding-left:1.2rem;
  }

`
export const Container = styled.div`
display:flex;
justify-content:center;
align-items:flex-start;
flex-direction: column;
padding-left:2.5rem;

@media (max-width: 520px) {
    padding-left:0;
  }

`
export const Head = styled.div`
display:flex;

`
export const Title = styled.h1`
font-size:35px;
text-align: center;
color:#fff;
margin-bottom: 15px;
text-transform:capitalize;
font-weight:500px !important;
letter-spacing:1px;

`
// export const Description = styled.p`
// font-size:18px;
// text-align: center;
// margin-top: 15px;
// color:#fff;
// `
// export const Buttons = styled.div`
// display: flex;
// flex-direction: row;
// justify-content: center;
// `
// export const Button = styled.button`
//     background: #ffb200;
//     border-color: #ffb200;
//     width: 170px;
//     height: 52px;
//     border-radius: 50px;
//     border: none;
//     color: #fff;
//     margin-left: 15px;
//     margin-right: 15px;
//     margin-top: 30px;
// `
