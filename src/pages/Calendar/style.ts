import styled from "@emotion/styled";

interface DateProps{
  isThisMonth: boolean
}

export const CalendarHeader = styled("div")`
  display: grid;
  grid-template-columns: repeat(7, calc(100% / 7));
  height: 3rem;
  width: 100%;
  & :first-of-type {
    border-left: 1px solid #b1add6;
  }
  border-top: 1px solid #b1add6;
  border-right: 1px solid #b1add6;
  border-bottom: 1px solid #b1add6;
`;

export const Days = styled("span")`
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
  background-color: #f6f2ff;
  color: #463e8f;
  font-weight: bold;
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
  padding-left: 0.5rem;
  padding-top: 0.5rem;
  &:nth-of-type(7n) {
    border-right: 1px solid #b1add6;
  }
  font-weight: bold;
  color: ${(props:DateProps) => (props.isThisMonth ? "black" : "#b7b7b7")}
`;
