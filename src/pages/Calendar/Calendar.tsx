import { useEffect, useState, useCallback } from "react";
import Layout from "../../components/Layout/Layout";
import { Box } from "@mui/material";
import DateNavigator from "../../components/DateNavigator/DateNavigator";
import { DAYS } from "../../constants/date";
import {
  CalendarHeader,
  Days,
  DatesGrid,
  Dates,
  DatesNum,
  DietBand,
} from "./style";
import { getTodayYear, getTodayMonth, getMonthDate } from "../../utils/date";
import diet from "../../diet.json";

interface MonthDate {
  key: string;
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
    const date = new Date(curYear, curMonth - 1, 1);
    date.setMonth(date.getMonth() - 1);
    setCurMonth(date.getMonth() + 1);
    setCurYear(date.getFullYear());
  };

  const nextMonth = () => {
    const date = new Date(curYear, curMonth - 1, 1);
    date.setMonth(date.getMonth() + 1);
    setCurMonth(date.getMonth() + 1);
    setCurYear(date.getFullYear());
  };

  useEffect(() => {
    setMonthDate(getMonthDate(curYear, curMonth));
  }, [curYear, curMonth]);
  console.log();
  return (
    <Layout>
      <DateNavigator
        prevMonth={prevMonth}
        nextMonth={nextMonth}
        curMonth={curMonth}
        curYear={curYear}
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
            <Dates monthDate={monthDate.length}>
              <DatesNum isThisMonth={dates.month === curMonth ? true : false}>
                {dates.date}
              </DatesNum>
              {diet.find((e) => e.dates === dates.key) && <DietBand />}
            </Dates>
          ))}
        </DatesGrid>
      </Box>
    </Layout>
  );
};

export default Calendar;
