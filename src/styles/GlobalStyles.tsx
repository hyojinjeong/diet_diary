import { Global, css } from "@emotion/react";

const style = css`
  body {
    padding: 0;
    margin: 0;
    font-family: "Noto Sans KR", sans-serif;
  }
  button {
    display: flex;
    cursor: pointer;
    outline: none;
    border-radius: 3px;
  }
  input {
    display: flex;
    outline: none;
    padding-left: 10px;
  }
`;

const GlobalStyles = () => {
  return <Global styles={style} />;
};

export default GlobalStyles;
