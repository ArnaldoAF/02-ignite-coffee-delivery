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

 .title-XL {
   font-family: "Baloo 2", sans-serif;
   font-size: 3rem;
   font-weight: 800;
   line-height: 130%;
   color: ${(props) => props.theme['base-title']};

}

    
.title-L {
   font-family: "Baloo 2", sans-serif;
   font-size: 2rem;
   font-weight: 800;
   line-height: 130%;
   color: ${(props) => props.theme['base-subtitle']};
   
}


.title-M {
   font-family: "Baloo 2", sans-serif;
   font-size: 1.5rem;
   font-weight: 800;
   line-height: 130%;
   color: ${(props) => props.theme['base-subtitle']};
   
}


.title-S {
   font-family: "Baloo 2", sans-serif;
   font-size: 1.25rem;
   font-weight: 700;
   line-height: 130%;
   color: ${(props) => props.theme['base-subtitle']};
   
}


.title-XS {
   font-family: "Baloo 2", sans-serif;
   font-size: 1.125rem;
   font-weight: 700;
   line-height: 130%;
   color: ${(props) => props.theme['base-subtitle']};
   
}


.text-L {
   font-family: "Roboto", sans-serif;
   font-size: 1.25rem;
   font-weight: 400;
   line-height: 130%;
   color: ${(props) => props.theme['base-text']};
}


.text-M {
   font-family: "Roboto", sans-serif;
   font-size: 1rem;
   font-weight: 400;
   line-height: 130%;
   color: ${(props) => props.theme['base-text']};
   
}


.text-S {
   font-family: "Roboto", sans-serif;
   font-size: 0.85rem;
   font-weight: 400;
   line-height: 130%;
   color: ${(props) => props.theme['base-text']};
   
}


.text-XS {
   font-family: "Roboto", sans-serif;
   font-size: 0.75rem;
   font-weight: 700;
   line-height: 130%;
   color: ${(props) => props.theme['base-text']};
   
}
 
`
