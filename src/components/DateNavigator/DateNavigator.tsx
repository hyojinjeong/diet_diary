import Box from "@mui/material/Box";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { CurrentYearMonth } from "./style";

const DateNavigator = () => {
  return (
    <Box
      sx={{
        maxWidth: 200,
        height: "3rem",
        backgroundColor: "primary.dark",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
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
