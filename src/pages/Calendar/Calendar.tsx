import Layout from "../../components/Layout/Layout";
import { DAYS } from "../../constants/date";
import { CalendarHeader, Days, DatesGrid, Dates } from "./style";

const Calendar = () => {
  return (
    <Layout>
      <CalendarHeader>
        {DAYS.map((day) => (
          <Days>{day}</Days>
        ))}
      </CalendarHeader>
      <DatesGrid>
        {Array(42)
          .fill(0)
          .map((_, i) => (
            <Dates>{i}</Dates>
          ))}
      </DatesGrid>
    </Layout>
  );
};

export default Calendar;
