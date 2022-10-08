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
import drink from "../../drink.json";
import body from "../../drink.json";

interface MonthDate {
  key: string;
  year: number;
  month: number;
  date: number;
  day: number;
}

const Calendar = () => {
  const [curYear, setCurYear] = useState<number>(getTodayYear());
  const [curMonth, setCurMonth] = useState<number>(getTodayMonth());
  const [monthDate, setMonthDate] = useState<Array<MonthDate>>(
    getMonthDate(curYear, curMonth)
  );
  const [isDateSelect, setIsDateSelect] = useState<boolean>(false);

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

  useEffect(() => {
    if (isDateSelect) {
      setMonthDate([
        { key: "2022-10-02", year: 2022, month: 10, date: 2, day: 0 },
        { key: "2022-10-03", year: 2022, month: 10, date: 3, day: 1 },
        { key: "2022-10-04", year: 2022, month: 10, date: 4, day: 2 },
        { key: "2022-10-05", year: 2022, month: 10, date: 5, day: 3 },
        { key: "2022-10-06", year: 2022, month: 10, date: 6, day: 4 },
        { key: "2022-10-07", year: 2022, month: 10, date: 7, day: 5 },
        { key: "2022-10-08", year: 2022, month: 10, date: 8, day: 6 },
      ]);
    }
  }, [isDateSelect]);

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
              <DatesNum
                isThisMonth={dates.month === curMonth ? true : false}
                onClick={() => {
                  setIsDateSelect(true);
                }}
              >
                {dates.date}
              </DatesNum>
              {diet.find((e) => e.dates === dates.key) && (
                <DietBand type={"diet"} />
              )}
              {drink.find((e) => e.dates === dates.key) && (
                <DietBand type={"drink"} />
              )}
              {body.find((e) => e.dates === dates.key) && (
                <DietBand type={"body"} />
              )}
            </Dates>
          ))}
        </DatesGrid>
        {isDateSelect && (
          <Box
            sx={{
              height: "30%",
              width: "30%",
              backgroundColor: "pink",
            }}
            onClick={() => {
              setIsDateSelect(false);
            }}
          ></Box>
        )}
      </Box>
    </Layout>
  );
};

export default Calendar;
