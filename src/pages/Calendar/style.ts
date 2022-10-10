import styled from "@emotion/styled";

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
  align-itmes: center;
  align-content: space-around;
`;

export const Dates = styled.div<{
  monthDate: number;
  isCurrent: boolean;
}>`
  position: relative;
  border-left: 1px solid #b1add6;
  border-bottom: 1px solid #b1add6;
  background-color: ${({ isCurrent }) => (isCurrent ? "#F6F6F6" : "white")};
  cursor: pointer;
  &:nth-of-type(7n) {
    border-right: 1px solid #b1add6;
  }
  &:nth-of-type(${({ monthDate }) => monthDate - 6}) {
    border-bottom-left-radius: 1rem;
  }
  &:last-of-type {
    border-bottom-right-radius: 1rem;
  }
`;

export const DatesNum = styled.div<{ isThisMonth: boolean }>`
  color: ${({ isThisMonth }) => (isThisMonth ? "black" : "#b7b7b7")};
  font-weight: bold;
  margin: 6px;
`;

export const DietBand = styled.div<{ type: string }>`
  width: 100%;
  height: 7%;
  border-radius: 10px;
  margin: 8px 0;
  background: ${({ type }) =>
    type === "diet"
      ? "#8359C57D"
      : type === "drink"
      ? "#7D9BFB96"
      : "#ADDDD0A1"};
`;

export const ExpandBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  font-weight: bold;
  cursor: pointer;
`;
