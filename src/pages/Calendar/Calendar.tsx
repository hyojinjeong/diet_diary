import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { Box } from "@mui/material";
import DateNavigator from "../../components/DateNavigator/DateNavigator";
import { DAYS } from "../../constants/date";
import { CalendarHeader, Days, DatesGrid, Dates } from "./style";
import { getTodayYear, getTodayMonth, getMonthDate } from "../../utils/date";

interface MonthDate {
  year: number;
  month: number;
  date: number;
  day: number;
}

const Calendar = () => {
  let month = getMonthDate(2022, 8);
  const [curYear, setCurYear] = useState<number>(getTodayYear());
  const [curMonth, setCurMonth] = useState<number>(getTodayMonth());
  const [monthDate, setMonthDate] = useState<Array<MonthDate>>(
    getMonthDate(curYear, curMonth)
  );

  const prevMonth = () => {
    setCurMonth((prev) => --prev);
  };

  const nextMonth = () => {
    setCurMonth((prev) => ++prev);
  };

  useEffect(() => {
    setMonthDate(getMonthDate(curYear, curMonth));
  }, [curYear, curMonth]);

  return (
    <Layout>
      <DateNavigator
        prevMonth={prevMonth}
        nextMonth={nextMonth}
        curMonth={curMonth}
      />
      <Box
        sx={{
          height: "calc(100% - 9rem)",
          width: "100%",
        }}
      >
        <CalendarHeader>
          {DAYS.map((day) => (
            <Days>{day}</Days>
          ))}
        </CalendarHeader>
        <DatesGrid>
          {monthDate.map((dates) => (
            <Dates isThisMonth={dates.month === curMonth ? true : false}>
              {dates.date}
            </Dates>
          ))}
        </DatesGrid>
      </Box>
    </Layout>
  );
};

export default Calendar;
