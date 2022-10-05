import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { DAYS } from "../../constants/date";
import { CalendarHeader, Days, DatesGrid, Dates } from "./style";
import { getTodayYear, getTodayMonth, getMonthDate } from "../../utils/date"

interface MonthDate{
  year: number,
  month: number,
  date: number,
  day: number
}

const Calendar = () => {
  let month = getMonthDate(2022, 10);
  const [curYear, setCurYear] = useState<number>(getTodayYear());
  const [curMonth, setCurMonth] = useState<number>(getTodayMonth());
  const [monthDate, setMonthDate] = useState<Array<MonthDate>>(getMonthDate(curYear, curMonth))

  const prevMonth = () => {
    setCurMonth(prev => --prev)
  }

  useEffect(()=>{
    console.log('changed', curMonth);
    setMonthDate(getMonthDate(curYear, curMonth))
  },[curYear, curMonth])

  return (
    <Layout>
      <CalendarHeader>
        {DAYS.map((day) => (
          <Days>{day}</Days>
        ))}
      </CalendarHeader>
      <DatesGrid>
        {monthDate.map((dates)=>(
          <Dates isThisMonth={dates.month === getTodayMonth() ? true : false}>
            {dates.date}
          </Dates>
        ))}
      </DatesGrid>
      <button onClick={prevMonth}>button</button>
    </Layout>
  );
};

export default Calendar;
