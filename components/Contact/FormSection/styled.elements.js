import styled from "styled-components";


export const Section = styled.div`

padding: 100px 0px 70px;
display: flex;
flex-direction: row;
justify-content: center;
`
export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
@media (max-width: 768px) {
    width: 90%;
}
@media (min-width: 768px)and (max-width:1367px) {
    width: 90%;
}
`
export const Head = styled.h3`
    position: relative;
    color: #fbb908;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
    text-align: center;
`
export const Title = styled.h2`
    position: relative;
    color: #222222;
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 10px;
    text-align: center;
    @media(max-width: 768px){
        font-size: 26px;
    }
`
export const Description = styled.p`
position: relative;
    color: #888888;
    font-size: 16px;
    line-height: 1.8em;
    margin: 0 auto;
    text-align: center;
margin-bottom: 60px;

`
export const Form = styled.form`

width: 100%;
@media(max-width: 768px){
    margin-top: 60px;
    margin:0 auto;
}
`
export const FirstInput = styled.div`
    margin-bottom: 30px;
    display: flex;
    flex-direction: row;
    @media (max-width: 767px){
        flex-direction: column;
        width: 100%;
    }
    @media (min-width: 768px)and (max-width:1367px) {
        justify-content: space-between;
    }
    @media(min-width: 1368px){
        justify-content:space-between;
    }
`
export const Name = styled.input`
    display: block;
    width: 100%;
    line-height: 28px;
    height: 50px;
    font-size: 14px;
    padding: 10px 22px;
    background: none;
    color: #888888;
    border: 1px solid #dddddd;
    transition: all 500ms ease;
    -webkit-transition: all 500ms ease;
    outline: none;
    @media (max-width: 767px){
        margin-bottom: 30px;
    }
    @media (min-width: 768px)and (max-width:1367px) {
        width: 48%;
    }
    @media(min-width: 1368px){
        width: 48%;
    }

`
export const Email = styled.input`
    display: block;
    width: 100%;
    line-height: 28px;
    height: 50px;outline: none;
    font-size: 14px;
    padding: 10px 22px;
    background: none;
    color: #888888;
    border: 1px solid #dddddd;
    transition: all 500ms ease;
    -webkit-transition: all 500ms ease;
    @media (min-width: 768px)and (max-width:1367px) {
        width: 48%;
    }
    @media(min-width: 1368px){
        width: 48%;
    }
`
export const Message = styled.textarea`
display: block;
    width: 100%;outline: none;
    line-height: 28px;
    height: 50px;
    font-size: 14px;
    padding: 10px 22px;
    background: none;
    color: #888888;
    border: 1px solid #dddddd;
    transition: all 500ms ease;
    -webkit-transition: all 500ms ease;

    height: 180px;
    resize: none;
    font-size: 14px;
    background: none;
    border: 1px solid #dddddd;
    @media(max-width: 768px){
        margin-bottom: 60px;
    }
`
export const Button = styled.button`
    color: #222222;
    font-size: 16px;
    font-weight: 700;
    margin-top: 30px;
    padding: 16px 36px;
    background-color: #fbb908;
    cursor: pointer;
    border:none;
`
