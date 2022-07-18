import styled from 'styled-components'

export const Section = styled.div`
display: flex;
flex-direction:row;
justify-content: center;
background-image: url("https://expert-themes.com/newwp/emarat/wp-content/uploads/2019/01/7.jpg");
padding:50px 0;
margin-top:3rem;
`
export const Container = styled.div`
padding:50px 200px;
display: flex;
flex-direction:column;
width: 1200px;
justify-content: center;
align-items: center;
@media(max-width: 768px){
    padding:50px 0;
    width: 90%;
}

`

export const Title = styled.h1`
position: relative;
    color: #ffffff;
    text-align: center;
    font-size: 48px;
    font-weight: 700;
    line-height: 1.4em;
    margin-top: 20px;
    margin-bottom: 15px;
    @media(max-width: 768px){
        font-size: 30px;
    }

`
export const Head = styled.h1`
position: relative;
    color: #fbb908;
    font-size: 17px;
    margin-top: 25px;

`
export const Description = styled.p`
    position: relative;
    color: #ffffff;
    font-size: 15px;
    line-height: 1.9em;
    text-align: center;
`
