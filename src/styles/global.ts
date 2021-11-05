import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }

    @media (max-width: 480px) {
      font-size: 82.5%;
    }
  }

  body {
    background: linear-gradient(to bottom, #09BA88 10%,#00a2a2 100%);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, select, button {
    font-family: "Montserrat", sans-serif;
  }


  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
