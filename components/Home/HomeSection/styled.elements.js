import styled from "styled-components";


export const SectionOne = styled.div`
background-image: url("/images/Banner-1.jpg");
width:100%;
height:100vh;
margin-top:0;
background-size:cover;
background-repeat: no-repeat;
background-position: center;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
cursor:grab;
@media(max-width: 768px){
    flex-direction: column;
}
`

export const SectionTwo = styled.div`
background-image: url("/images/Banner-2.jpg");
width:100%;
height:108vh;
background-size:cover;
background-repeat: no-repeat;
background-position: center;
display: flex;
flex-direction: row;
cursor:grab;
justify-content: center;
align-items: center;
@media(max-width: 768px){
    flex-direction: column;
}
`

export const SectionThree = styled.div`
background-image: url("/images/Banner-3.jpg");
width:100%;
height:108vh;
cursor:grab;
background-size:cover;
background-repeat: no-repeat;
background-position: center;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
@media(max-width: 768px){
    flex-direction: column;
}
`
export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
export const Head = styled.div`
/* opacity: 1;
width: 64px;
height: 18px;
transform: translate(-32px, -38px);
top: 100%;
left: 50%; */
color: #fff;
@media(max-width: 768px){
    
}
`
export const Title = styled.h1`
font-size:54px;
color:#fff;
width:80%;
text-align: center;
@media(max-width: 768px){
    font-size: 35px;
    width: 95%;
    font-weight:600;
}

`
export const Description = styled.p`
font-size:18px;
text-align: center;
margin-top: 15px;
width:48%;
line-height:130%;
color:#fff;
@media(max-width: 768px){
width:75%;
font-size:16px;
}
`
export const Buttons = styled.div`
display: flex;
flex-direction: row;
justify-content: center;

@media screen and (max-width:340px){
    flex-direction:column;
}
`
export const Button = styled.button`
    background: #ffb200;
    cursor:pointer;
    border-color: #ffb200;
    width: 140px;
    height: 42px;
    border-radius: 50px;
    border: none;
    color: #fff;
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 30px;
    font-weight:500;
    font-size:18px;
`
export const ButtonTwo = styled.button`
    background: transparent;
    border:2px solid #ffb200;
    width: 140px;
    cursor: pointer;
    height: 42px;
    border-radius: 50px;
    color: #ffb200;
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 30px;
    font-weight:500;
    font-size:18px;
`
