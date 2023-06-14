import { createGlobalStyle } from 'styled-components'

export const colors = {
  roseColor: '#E66767',
  creamColor: '#FFEBD9',
  whiteColor: '#FFF8F2',
  cardColor: '#FFFFFF'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '767px'
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
  }


  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;


    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }

`
export default GlobalStyle
