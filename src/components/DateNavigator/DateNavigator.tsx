import Box from "@mui/material/Box";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { CurrentYearMonth } from "./style";

interface Props {
  prevMonth: () => void;
  nextMonth: () => void;
  curMonth: number;
}

const DateNavigator = ({ prevMonth, nextMonth, curMonth }: Props) => {
  return (
    <Box
      sx={{
        minWidth: 200,
        height: "3rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <button>
        <NavigateBeforeIcon fontSize="large" onClick={prevMonth} />
      </button>
      <CurrentYearMonth>{`2022년 ${curMonth}월`}</CurrentYearMonth>
      <button>
        <NavigateNextIcon fontSize="large" onClick={nextMonth} />
      </button>
    </Box>
  );
};

export default DateNavigator;
