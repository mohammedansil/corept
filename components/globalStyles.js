//globalStyles

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html,
body {
    font-family: 'Poppins', sans-serif;
    padding: 0;
    margin: 0;
    background-color:#fff;
    overflow-x: hidden;

}

html {
    scroll-behavior: smooth;
    height:100%;
}

body{
    min-height:100vh;
    user-select:none;
}
a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    user-select: none;
}

* {
    box-sizing: border-box;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
    padding: 0;
    margin: 0;   
    font-family: 'Poppins', sans-serif;

    /*---------------------------- for inspection of frontend  *start-------------------------------- */
    /* background-color:rgba(27, 245, 49, 0.12);*/
     /* outline: 1px solid red;  */

     /*---------------------------- for inspection of frontend  *end-------------------------------- */
}

input,
textarea,
button,
select,
a {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}

img{
    height:100%;
    border-radius:10px;
    width:100%;
}
button{
    cursor:pointer;
    outline:none;
    user-select: none;
}

section{
    margin: 0 auto;
}

@media(max-width: 785px){
    img{
        width:90%;
    }
}
`;

export default GlobalStyle;
