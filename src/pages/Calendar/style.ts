import styled from "@emotion/styled";

interface DateProps {
  isThisMonth: boolean;
}
interface MonthProps {
  monthDate: number;
}
interface DataProps {
  type: string;
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
  grid-auto-rows: calc(calc(100vh - 15rem) / 6);
  width: 100%;
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
  margin: 6px;
`;

export const DietBand = styled("div")`
  width: 100%;
  height: 7%;
  border-radius: 10px;
  margin: 8px 0;
  background: ${(props: DataProps) =>
    props.type === "diet"
      ? "#8359C57D"
      : props.type === "drink"
      ? "#7D9BFB96"
      : "#ADDDD0A1"};
`;
