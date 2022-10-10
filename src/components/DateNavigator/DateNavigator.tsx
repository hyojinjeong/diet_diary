import { Box, ButtonGroup } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CurrentYearMonth } from "./style";

interface Props {
  prevMonth: () => void;
  nextMonth: () => void;
  curMonth: number;
  curYear: number;
}

const DateNavigator = ({ prevMonth, nextMonth, curYear, curMonth }: Props) => {
  return (
    <Box
      sx={{
        height: { xs: "2rem", sm: "2rem", md: "3rem" },
        alignItems: "center",
        display: "flex",
        width: "100%",
        paddingTop: { xs: "2rem", sm: "2rem", md: "3rem" },
        paddingBottom: { xs: "2rem", sm: "2rem", md: "3rem" },
      }}
    >
      <CurrentYearMonth>{`${curYear}년 ${curMonth}월`}</CurrentYearMonth>
      <ButtonGroup>
        <button>
          <ExpandLessIcon
            fontSize="large"
            onClick={prevMonth}
            sx={{ color: "#686868" }}
          />
        </button>
        <button>
          <ExpandMoreIcon
            fontSize="large"
            onClick={nextMonth}
            sx={{ color: "#686868" }}
          />
        </button>
      </ButtonGroup>
    </Box>
  );
};

export default DateNavigator;
