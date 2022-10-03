import Layout from "../../components/Layout/Layout";
import { DAYS } from "../../constants/date";
import { CalendarHeader, Days, Dates } from "./style";

const Calendar = () => {
  return (
    <Layout>
      <CalendarHeader>
        {DAYS.map((day) => (
          <Days>{day}</Days>
        ))}
      </CalendarHeader>
      <Dates />
    </Layout>
  );
};

export default Calendar;
