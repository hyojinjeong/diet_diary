import Layout from "../../components/Layout/Layout";
import { DAYS } from "../../constants/date";
import { CalendarHeader, Days, DatesGrid, Dates } from "./style";
import { getMonthDate, getTodayMonth } from "../../utils/date"

const Calendar = () => {
  let month = getMonthDate(2022, 10);
  console.log(month);
  return (
    <Layout>
      <CalendarHeader>
        {DAYS.map((day) => (
          <Days>{day}</Days>
        ))}
      </CalendarHeader>
      <DatesGrid>
        {month.map((dates)=>(
          <Dates isThisMonth={dates.month === getTodayMonth() ? true : false}>
            {dates.date}
          </Dates>
        ))}
      </DatesGrid>
    </Layout>
  );
};

export default Calendar;
