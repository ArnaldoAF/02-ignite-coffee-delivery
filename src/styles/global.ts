import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
 }

 body {
    background: ${(props) => props.theme.background}
 }

 :focus {
    outline: 0;
    box-shadow: 0 0 0;
 }

 border-style, input-security, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;;
    font-size: 1rem;
 }

 button {
   border: 0;

   &:hover {
      filter: brightness(95%);
      transition: 0.15s;
   }

   :focus {
      outline: 0;
      box-shadow: 0 0 0;
   }
 }
`
