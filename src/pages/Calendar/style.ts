import styled from "@emotion/styled";

export const CalendarHeader = styled("div")`
  display: grid;
  grid-template-columns: repeat(7, calc(100% / 7));
  height: 4rem;
  width: 100%;
  // & :first-child {
  //   border-left: 1px solid black;
  // }
`;

export const Days = styled("span")`
  display: flex;
  align-items: center;
  padding: 0.5rem 0 0.5rem 0.5rem;
  background-color: #fdfcff;
  color: #b1add6;
`;

export const Dates = styled("div")`
  width: 100%;
  height: 80%;
  background-color: white;
`;
