import styled from 'styled-components'

export const Section = styled.div`
padding: 100px 0px 130px;
`
export const Container = styled.div`
position: static;
max-width: 1200px;
padding: 0px 15px;
margin: 0 auto;
display: flex;
flex-direction: row;
justify-content:center;
align-items: center;
@media(max-width: 768px){
    flex-direction: column;
    align-items: center;
    justify-content:center;
}


`
export const LeftContainer = styled.div`
width: 70%;
@media(max-width: 768px){
    width:90%;
}
`
export const Image = styled.img`


`
export const Faqs = styled.div`
 user-select: none;
 width:90vw;
 height:auto;
`

export const QuestionWrapper = styled.div`
margin-bottom:1rem;`

export const QuestionSection = styled.div`


`


export const RightContainer = styled.div`
width:570px;
display: flex;
flex-direction: column;
align-items: center;
@media(max-width: 768px){
    width: 90%;
}
`
export const Question = styled.h3`
    border-color: #ffb200;
    background-color: #ffb200;
    position: relative;
    font-size: 16px;
    cursor: pointer;
    line-height: 30px;
    color: #222222;
    font-weight: 700;
    border-radius: 50px;
    padding: 10px 45px 10px 40px;
    transition: all 500ms ease;
    -ms-transition: all 500ms ease;
    -o-transition: all 500ms ease;
    -moz-transition: all 500ms ease;
    -webkit-transition: all 500ms ease;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width:580px) {
        font-size:14px;
    }
`
export const Title = styled.h1`
    position: relative;
    color: #222222;
    font-size: 36px;
    font-weight: 700;
    line-height: 1.4em;
    margin-bottom: 0px;
    line-height: 1.8em;
    margin-bottom: 25px;
`
export const Answer = styled.p`
    position: relative;
    font-size: 14px;
    padding: 20px 20px 10px 20px;
    margin-bottom: 0px;
    line-height: 1.8em;
    font-size: 16px;
    color: #666666;
`
export const Head = styled.p`
    position: relative;
    color: #fbb908;
    font-size: 17px;
    font-weight: 700;
    margin-bottom: 15px;
    text-transform: capitalize;
`
