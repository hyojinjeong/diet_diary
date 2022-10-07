import styled from "@emotion/styled";

interface DateProps {
  isThisMonth: boolean;
}
interface MonthProps {
  monthDate: number;
}

export const CalendarHeader = styled("div")`
  display: grid;
  grid-template-columns: repeat(7, calc(100% / 7));
  height: 3rem;
  width: 100%;
  border-bottom: 1px solid #b1add6;
  & :first-of-type {
    border-left: 1px solid #b1add6;
    border-top-left-radius: 1rem;
  }
  & :last-of-type {
    border-right: 1px solid #b1add6;
    border-top-right-radius: 1rem;
  }
`;

export const Days = styled("span")`
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
  background-color: #f6f2ff;
  border-top: 1px solid #b1add6;
  color: #463e8f;
  font-weight: bold;
`;

export const DatesGrid = styled("div")`
  display: grid;
  grid-template-columns: repeat(7, calc(100% / 7));
  width: 100%;
  height: calc(100% - 3rem);
`;

export const Dates = styled("div")`
  position: relative;
  border-left: 1px solid #b1add6;
  border-bottom: 1px solid #b1add6;
  background-color: white;
  &:nth-of-type(7n) {
    border-right: 1px solid #b1add6;
  }
  &:nth-of-type(${(props: MonthProps) => props.monthDate - 6}) {
    border-bottom-left-radius: 1rem;
  }
  &:last-of-type {
    border-bottom-right-radius: 1rem;
  }
`;

export const DatesNum = styled("div")`
  color: ${(props: DateProps) => (props.isThisMonth ? "black" : "#b7b7b7")};
  font-weight: bold;
  margin: 0.5rem;
`;

export const DietBand = styled("div")`
  position: absolute;
  width: 100%;
  height: 5px;
  background: #7f2bcc;
  top: 45%;
  margin-bottom: 5px;
`;
