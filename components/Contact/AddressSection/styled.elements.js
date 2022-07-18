import styled from "styled-components";


export const Section = styled.div`
max-width:1200px;
margin: 0 auto;
padding:100px 0;
display: flex;
flex-direction: row;
justify-content: center;
@media (max-width: 768px){
    width: 100%;
}
`
export const Container = styled.div`
display: flex;
flex-direction: row;
@media (max-width: 768px){
    width: 90%;
    flex-direction: column;
    align-items: center;
}
@media (min-width: 768px)and (max-width:1367px) {
    flex-direction: column;
    align-items: center;
}
`
export const Head = styled.h3`
position: relative;
color: #fbb908;
font-size: 18px;
font-weight: 700;
margin-bottom: 15px;
text-transform: capitalize;

`
export const Title = styled.h1`
position: relative;
color: #222222;
font-size: 36px;
font-weight: 700;
line-height: 1.4em;
@media (max-width: 768px){
    font-size: 24px;
    margin-bottom: 40px;
}
`
export const Description = styled.p`
position: relative;
color: #888888;
font-size: 16px;
line-height: 1.8em;
max-width: 730px;
margin: 0;
margin-bottom:15px;
`
export const LeftContainer = styled.div`
padding-right: 60px;
display: flex;
flex-direction: column;
justify-content: center;
@media (max-width: 768px) {
    padding-right:0;
}
@media (min-width: 768px)and (max-width:1367px) {
    padding-right:0;

}
`
export const ContactDetails = styled.div`
margin-top:25px;
`
export const Contact = styled.div`

`
export const Icon = styled.i`

`
export const SocialMedia = styled.div`
@media(max-width:767px){
    margin-top: 50px;
    margin-bottom: 50px;
}
`
export const Icons = styled.div`

`
export const RightContainer = styled.div`
width: 100%;
margin-top: 50px;
`
export const Map = styled.iframe`

    height: 520px;
    width: 570px;
    margin: 0px;
    left: 0px;
    top: 0px;
    border:none;
    touch-action: pan-x pan-y;
    @media(max-width: 768px){
    height: 100%;
    width: 100%;
    touch-action: pan-x pan-y;
    }
    @media (min-width: 768px)and (max-width:1367px) {
        width: 100%;
    }
`
