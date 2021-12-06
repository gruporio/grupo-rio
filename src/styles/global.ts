import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html,
    body {
        font-family: 'Montserrat',sans-serif;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

`

export default GlobalStyle;