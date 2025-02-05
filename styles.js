import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0;
  }
`;
