import { useCallback, useEffect, useState } from "react";
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
  getTodayDay,
  formatDate,
  getSelectWeek,
} from "../../utils/date";
import diet from "../../diet.json";
import drink from "../../drink.json";
import body from "../../drink.json";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ResultComponent from "../../components/ResultComponent/ResultComponent";

interface MonthDate {
  key: string;
  year: number;
  month: number;
  date: number;
  day: number;
}

interface Diets {
  breakfast?: DietsContent;
  lunch?: DietsContent;
  dinner?: DietsContent;
}
interface DietsContent {
  title?: string;
  time: string;
  memo: string;
  score: number;
  photo: string;
}

export const Calendar = () => {
  const [curDate, setCurDate] = useState<MonthDate>({
    key: formatDate(getTodayYear(), getTodayMonth(), getTodayDates()),
    year: getTodayYear(),
    month: getTodayMonth(),
    date: getTodayDates(),
    day: getTodayDay(),
  });
  const [monthDate, setMonthDate] = useState<Array<MonthDate>>(
    getMonthDate(curDate.year, curDate.month)
  );
  const [isDateSelect, setIsDateSelect] = useState<boolean>(false);
  const [dietResult, setDietResult] = useState<Diets>({
    breakfast: {
      title: "brunch",
      time: "09:00",
      memo: "It's good.",
      score: 3,
      photo: "Y",
    },
    lunch: {
      title: "brunch",
      time: "09:00",
      memo: "It's good.",
      score: 3,
      photo: "Y",
    },
    dinner: {
      title: "brunch",
      time: "20:00",
      memo: "It's good.",
      score: 3,
      photo: "Y",
    },
  });

  const prevMonth = () => {
    const date = new Date(curDate.year, curDate.month - 1, 1);
    date.setMonth(date.getMonth() - 1);
    dateHandler(date.getFullYear(), date.getMonth() + 1, 1, date.getDay());
    setIsDateSelect(false);
  };

  const nextMonth = () => {
    const date = new Date(curDate.year, curDate.month - 1, 1);
    date.setMonth(date.getMonth() + 1);
    dateHandler(date.getFullYear(), date.getMonth() + 1, 1, date.getDay());
    setIsDateSelect(false);
  };

  useEffect(() => {
    if (isDateSelect) {
      setMonthDate(
        getSelectWeek(monthDate, curDate.month, curDate.date, curDate.day)
      );
      const result = diet.filter((e) => e.dates === curDate.key);
      setDietResult(result[0]?.diets);
    } else {
      setMonthDate(getMonthDate(curDate.year, curDate.month));
    }
  }, [curDate, isDateSelect]);

  const dateHandler = (
    year: number,
    month: number,
    date: number,
    day: number
  ) => {
    setCurDate({
      key: formatDate(year, month, date),
      year: year,
      month: month,
      date: date,
      day: day,
    });
    setIsDateSelect(true);
  };

  return (
    <Layout>
      <DateNavigator
        prevMonth={prevMonth}
        nextMonth={nextMonth}
        curMonth={curDate.month}
        curYear={curDate.year}
      />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CalendarHeader>
          {DAYS.map((day) => (
            <Days key={day}>{day}</Days>
          ))}
        </CalendarHeader>
        <DatesGrid>
          {monthDate.map((dates, idx) => (
            <Dates
              key={dates.key}
              monthDate={monthDate.length}
              isCurrent={dates.key === curDate.key ? true : false}
              onClick={() => {
                dateHandler(dates.year, dates.month, dates.date, dates.day);
              }}
            >
              <DatesNum
                isThisMonth={dates.month === curDate.month ? true : false}
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
          <>
            <ExpandBtn
              onClick={() => {
                setIsDateSelect(false);
              }}
            >
              달력 펼치기
              <ExpandMoreIcon sx={{ marginLeft: "10px" }} />
            </ExpandBtn>
            <ResultComponent diets={dietResult} />
          </>
        )}
      </Box>
    </Layout>
  );
};

export default Calendar;
