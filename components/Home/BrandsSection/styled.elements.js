import styled from 'styled-components'

export const Section = styled.div`
display: flex;
flex-direction:row;
justify-content: center;
background-image: url("/images/bg.jpg");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
filter: grayscale(15%);
user-select:none;
`
export const Container = styled.div`
padding:50px 200px;
display: flex;
flex-direction:row;
width: 1200px;
justify-content: center;
@media(max-width: 768px){
    flex-direction: column;
    padding:50px 0;
    align-items: center;
}
`
export const Counter = styled.div`
@media(max-width:767px){
    margin-bottom:50px;
}
`

export const Title = styled.h1`

`
export const Image = styled.img`
width: 180px;
object-fit:contain;
margin-right:16px;
height:80px;
display: inline-block;
transition: all 0.3s ease;
/* filter: grayscale(50%); */
/* opacity:0.9; */
`
