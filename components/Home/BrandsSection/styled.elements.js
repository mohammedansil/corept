import styled from 'styled-components'

export const Section = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
height: 100%;
user-select:none;
`
export const Container = styled.div`
padding:50px 200px;
display: flex;
flex-direction:row;
width: 100%;
height: 100%;
position: relative;
justify-content: center;
padding: 150px 0;
@media(max-width: 768px){
    flex-direction: column;
    padding:50px 0;
    align-items: center;
}
`
export const Counter = styled.div`
background-color:#fff;
margin:0 15px;
border-radius:5px;
z-index: 99;
@media(max-width:767px){
    margin-bottom:50px;
}
`

export const Title = styled.h1`

`
export const Overlay = styled.img`
position: absolute;
top:0px;
z-index: 1;
filter:blur(5px);
`
export const Image = styled.img`
width: 150px;
object-fit:contain;
margin-right:16px;
height:80px;
display: inline-block;
transition: all 0.3s ease;
/* filter: grayscale(50%); */
/* opacity:0.9; */
`
