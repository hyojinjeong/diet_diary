import styled from "@emotion/styled";

export const CalendarHeader = styled("div")`
  display: grid;
  grid-template-columns: repeat(7, calc(100% / 7));
  height: 2rem;
  width: 100%;
  & :first-child {
    border-left: 1px solid black;
  }
`;

export const Days = styled("span")`
  padding: 0.5rem 0 0.5rem 0.5rem;
  border-top: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px-solid black;
`;
