import { Global, css } from "@emotion/react";

const style = css`
  html {
    background-color: white;
  }
  body,
  body::before,
  body::after,
  body *,
  body *::before,
  body *::after {
    box-sizing: border-box;
  }
  body {
    padding: 0;
    margin: 0;
    font-family: "Noto Sans KR", sans-serif;
  }
  button {
    display: flex;
    cursor: pointer;
    outline: none;
    width: auto;
    background: transparent;
    border: none;
    padding: 0;
  }
  input {
    display: flex;
    outline: none;
  }
`;

const GlobalStyles = () => {
  return <Global styles={style} />;
};

export default GlobalStyles;
