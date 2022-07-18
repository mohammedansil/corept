import styled from 'styled-components'

export const Section = styled.div`
background-image: url("https://expert-themes.com/newwp/emarat/wp-content/uploads/2020/10/1.jpg");
background-repeat: no-repeat;
padding:200px 0 100px 0;
position: relative;

@media(max-width: 768px){
    padding: 200px 0 100px 0;
    margin-bottom:3rem;
} 
@media(max-width: 299px){
    padding: 200px 0 100px 0;
    margin-bottom:5rem;
} 
`
export const Container = styled.div`
position: static;
max-width: 1200px;
padding: 0px 15px;
margin: 0 auto;
display: flex;
flex-direction: row;
@media(max-width: 768px){
    flex-direction:column;
    align-items:center;
}
`
export const LeftContainer = styled.div`
position: relative;
display: flex;
flex-direction: row;
width: 600px;
height: 753px;
@media(max-width: 768px){
    flex-direction: column;
    width:100%;
    align-items:center;
    height: 100%;
}
`
export const FirstImage = styled.img`
width: 500px;
height:333px;
position: absolute;
object-fit:cover;
right: 0;
top:-100px;
@media(max-width: 768px){
    position: relative;
    width: 90%;
    object-fit:cover;
}
@media (min-width: 768px)and (max-width:1367px) {
    display: none;
  }

`
export const DotImage = styled.img`
    position: absolute;
    content: '';
    right: 0px;
    top: 0px;
    width: 270px;
    height: 270px;
   

`
export const SecondImage = styled.img`
width: 450px;
height:auto;
z-index:99;
position: absolute;
object-fit:cover;
right:0;
max-height: 635px;
overflow: hidden;
@media(max-width: 768px){
    display: none;
    width: 320px;
}
@media(max-width: 320px){
    display: none;
    width: 310px;
}
`
export const RightContainer = styled.div`
width: 585px;
height:585px;
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
padding: 70px 90px 74px;
background-color: #ffffff;
border: 20px solid #f2f2f2;
border-left: 0;
@media(max-width: 768px){
    padding: 15px;
    width: 95%;
    border-left:20px solid #f2f2f2;
}
`
export const Title = styled.h1`
position: relative;
color: #222222;
font-size: 36px;
font-weight: 700;
line-height: 1.4em;
@media(max-width: 768px){
    font-size: 24px;
    margin-bottom:22px;
}
`
export const Head = styled.h1`
@media(min-width: 1368px){
    display: none;

}
@media (min-width: 768px)and (max-width:1367px) {
    display: inline-block;
    z-index:999;
    margin-bottom: 50px;

    
  }
font-size: 36px;
line-height: 78px;
color: #f2f2f2;
font-weight: 900;
text-transform: uppercase;
text-shadow: 0 0 10px #000;
font-family: "Rubik", sans-serif;
`
export const Head2 = styled.h1`
position: absolute;
bottom: 200px;
left: 0;
display: block;
font-size: 60px;
line-height: 78px;
color: #fff;
z-index:999;
font-weight: 900;
text-transform: uppercase;
text-shadow: 2px 3px 2px rgba(0,0,0,0.53);
font-family: "Rubik", sans-serif;
@media(max-width: 768px){
    display: none;
}
@media (min-width: 768px)and (max-width:1367px) {
    /* display: none; */
  }
`
export const Description = styled.p`
position: relative;
display: block;
font-size: 14px;
line-height: 28px;
color: #777777;
margin-bottom: 45px;
@media(max-width: 768px){
    font-size: 14px;
}
`
export const Button = styled.button`
position: absolute;
cursor:pointer;
top: -1px;
right: -1px;
left: -1px;
bottom: -1px;
content: "";
border-radius: 50px;
border: 2px solid #222222;
transition: all 300ms ease;
outline: none;
width: 148px;
height:52px;
position: relative;
font-size: 14.5px;
line-height: 30px;
color: #ffffff;
padding: 10px 40px;
text-transform: capitalize;
font-weight: 400;
border-radius: 50px;
background: rgb(255,174,0);
background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmYWUwMCIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNmZjhhMDAiIHN0b3Atb3BhY2l0eT0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);
background: -moz-linear-gradient(top, rgba(255,174,0,1) 0%, rgba(255,138,0,1) 100%);
background: -webkit-linear-gradient(top, rgba(255,174,0,1) 0%,rgba(255,138,0,1) 100%);
background: linear-gradient(to bottom, rgba(255,174,0,1) 0%,rgba(255,138,0,1) 100%);
background-color: #ffb200;
border-color: #ffb200;

`