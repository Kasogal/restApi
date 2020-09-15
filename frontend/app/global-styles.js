import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html{
    height: 100%;
    width: 100%;
    margin: 0px;
    background-color: #f8f8f8 !important  
  }
  body {
    height: 100%;
    width: 100%;
    margin: 0px;    
    color: #333 !important;
    font-weight: 400;
    /*background: none !important;*/
    background-color: #f8f8f8 !important
    min-height: calc(100vh - 70px);
  }
  #app{
    min-height: 100%;
  }
`;

export default GlobalStyle;
