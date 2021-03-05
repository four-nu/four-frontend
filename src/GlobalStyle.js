import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;
    }
    html, body {
        overflow-x: hidden;
        overflow-y: hidden;
    }
`

export default GlobalStyle;