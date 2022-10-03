import Layout from "../../components/Layout/Layout";
import { DAYS } from "../../constants/date";
import { CalendarHeader, Days } from "./style";

const Calendar = () => {
  return (
    <Layout>
      <CalendarHeader>
        {DAYS.map((day) => (
          <Days>{day}</Days>
        ))}
      </CalendarHeader>
    </Layout>
  );
};

export default Calendar;
