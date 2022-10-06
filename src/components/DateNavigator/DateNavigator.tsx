import Box from "@mui/material/Box";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { CurrentYearMonth } from "./style";

const DateNavigator = () => {
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
        <NavigateBeforeIcon fontSize="large" />
      </button>
      <CurrentYearMonth>2022.10</CurrentYearMonth>
      <button>
        <NavigateNextIcon fontSize="large" />
      </button>
    </Box>
  );
};

export default DateNavigator;
