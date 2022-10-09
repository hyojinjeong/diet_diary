import { useEffect, useState } from "react";
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
  ExpandBtn,
} from "./style";
import {
  getTodayYear,
  getTodayMonth,
  getMonthDate,
  getTodayDates,
  formatDate,
} from "../../utils/date";
import diet from "../../diet.json";
import drink from "../../drink.json";
import body from "../../drink.json";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface MonthDate {
  key: string;
  year: number;
  month: number;
  date: number;
  day: number;
}

export const Calendar = () => {
  const [curYear, setCurYear] = useState<number>(getTodayYear());
  const [curMonth, setCurMonth] = useState<number>(getTodayMonth());
  const [current, setCurrent] = useState<string>(
    formatDate(getTodayYear(), getTodayMonth(), getTodayDates())
  );
  const [monthDate, setMonthDate] = useState<Array<MonthDate>>(
    getMonthDate(curYear, curMonth)
  );
  const [isDateSelect, setIsDateSelect] = useState<boolean>(false);

  const prevMonth = () => {
    const date = new Date(curYear, curMonth - 1, 1);
    date.setMonth(date.getMonth() - 1);
    setCurMonth(date.getMonth() + 1);
    setCurYear(date.getFullYear());
    setIsDateSelect(false);
  };

  const nextMonth = () => {
    const date = new Date(curYear, curMonth - 1, 1);
    date.setMonth(date.getMonth() + 1);
    setCurMonth(date.getMonth() + 1);
    setCurYear(date.getFullYear());
    setIsDateSelect(false);
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
    } else {
      setMonthDate(getMonthDate(curYear, curMonth));
    }
  }, [curYear, curMonth, isDateSelect]);

  const dateHandler = (key: string) => {
    console.log("datehandler");
    setIsDateSelect(true);
    setCurrent(key);
  };

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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CalendarHeader>
          {DAYS.map((day) => (
            <Days>{day}</Days>
          ))}
        </CalendarHeader>
        <DatesGrid>
          {monthDate.map((dates) => (
            <Dates
              monthDate={monthDate.length}
              isCurrent={dates.key === current ? true : false}
              onClick={() => {
                dateHandler(dates.key);
              }}
            >
              <DatesNum isThisMonth={dates.month === curMonth ? true : false}>
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
          <ExpandBtn
            onClick={() => {
              setIsDateSelect(false);
            }}
          >
            달력 펼치기
            <ExpandMoreIcon sx={{ marginLeft: "10px" }} />
          </ExpandBtn>
        )}
      </Box>
    </Layout>
  );
};

export default Calendar;
