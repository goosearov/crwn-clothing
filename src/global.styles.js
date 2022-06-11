import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    font-family: 'Open Sans', sans-serif;
    padding: 20px 40px;
}
a {
    text-decoration: none;
    color: black;
}
* {
    box-sizing: border-box;
}
@media screen and (max-width: 800px) {
    body {
    padding: 10px;
    }
}
`