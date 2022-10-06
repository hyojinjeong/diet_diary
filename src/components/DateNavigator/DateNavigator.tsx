import { Box, ButtonGroup } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
        height: "3rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        paddingTop: "3rem",
        paddingBottom: "3rem",
      }}
    >
      <CurrentYearMonth>{`2022년 ${curMonth}월`}</CurrentYearMonth>
      <ButtonGroup>
        <button>
          <ExpandLessIcon fontSize="large" onClick={prevMonth} />
        </button>
        <button>
          <ExpandMoreIcon fontSize="large" onClick={nextMonth} />
        </button>
      </ButtonGroup>
    </Box>
  );
};

export default DateNavigator;
