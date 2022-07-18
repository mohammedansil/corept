import styled from 'styled-components'

export const Section = styled.div`
padding: 100px 0px;
text-align: center;
width:100vw;
height:100%;
`
export const Container = styled.div`
padding:4rem 4rem;
margin: 0 auto;
display: flex;
flex-direction: row;
justify-content: space-evenly;
@media(max-width: 768px){
    flex-direction: column;
    padding:0;
    
}
`
export const Service = styled.div`
margin: 20px;
width:100%;
display: flex;
flex-direction:column;
align-items: center;
@media (max-width: 768px) {
    margin: 0;
      margin-bottom:40px;
}
`
export const Icon = styled.i`
background-color: #ffb200;
position: absolute;
left: 0px;
top: 0px;
width: 70px;
height: 71px;
color: #222222;
font-size: 34px;
line-height: 68px;
text-align: center;
font-size: 34px;
margin-left: 0px;
`
export const Image = styled.img`
width: 100%;
object-fit: cover;
@media(max-width: 768px){
    width: 90%;
    margin-top:50px;
}
@media(min-width: 768px)and (max-width:1367px){
    width: 90%;
}
`
export const ServiceDiv = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
position: relative;
padding: 11px 0px;
width:100%;
height:71px;
margin:0 auto;
background-color: rgba(0,0,0,0.90);
color:#fff;
@media(max-width: 767px){
    width:90%;
}
@media (min-width: 768px)and (max-width:1367px) {
    width: 90%;
}
@media(min-width: 1368px){
    width: 100%;
}
`
export const Button = styled.button`

`

export const Overlay = styled.div`
display: none;
`

export const Title = styled.h1`
    position: relative;
    color: #ffffff;
    font-size: 18px;
    font-weight: 500;
    padding: 11px 0px;
    padding-left: 5rem;
    

`
export const Description = styled.h1`

`
export const SectionTitle = styled.h1`
position: relative;
color: #222222;
font-size: 36px;
font-weight: 700;
line-height: 1.4em;
`
export const SectionHead = styled.h1`
position: relative;
color: #fbb908;
font-size: 18px;
font-weight: 700;
margin-bottom: 15px;
text-transform: capitalize;
`
