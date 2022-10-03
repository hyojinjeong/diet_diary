import styled from "@emotion/styled";

export const CalendarHeader = styled("div")`
  display: grid;
  grid-template-columns: repeat(7, calc(100% / 7));
  height: 3rem;
  width: 100%;
  & :first-child {
    border-left: 1px solid #b1add6;
  }
  border-top: 1px solid #b1add6;
  border-right: 1px solid #b1add6;
  border-bottom: 1px solid #b1add6;
`;

export const Days = styled("span")`
  display: flex;
  align-items: center;
  padding-left: 1rem;
  background-color: #f6f2ff;
  color: #463e8f;
  font-weight: bold;
  // border-top: 1px solid #b1add6;
  // border-right: 1px solid #b1add6;
  // border-bottom: 1px solid #b1add6;
`;

export const DatesGrid = styled("div")`
  display: grid;
  grid-template-columns: repeat(7, calc(100% / 7));
  grid-auto-rows: calc(calc(80vh - 64px) / 6);
`;

export const Dates = styled("div")`
  border-left: 1px solid #b1add6;
  border-bottom: 1px solid #b1add6;
  background-color: white;
  padding-left: 1rem;
  padding-top: 0.5rem;
  font-size: 1.2rem;
  &:nth-child(7n) {
    border-right: 1px solid #b1add6;
  }
`;
