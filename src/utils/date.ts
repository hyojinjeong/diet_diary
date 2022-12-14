interface MonthDate {
  key: string;
  year: number;
  month: number;
  date: number;
  day: number;
}

const getTodayYear = () => {
  return new Date().getFullYear();
};

const getTodayMonth = () => {
  return new Date().getMonth() + 1;
};

const getTodayDates = () => {
  return new Date().getDate();
};

const getTodayDay = () => {
  return new Date().getDay();
};

const formatDate = (
  year: number | string,
  month: number | string,
  date: number | string
) => {
  month = month < 10 ? month.toString().padStart(2, "0") : month;
  date = date < 10 ? date.toString().padStart(2, "0") : date;

  return `${year}-${month}-${date}`;
};

const getBeforeDate = (firstDate: Date, date: number) => {
  return new Date(firstDate.setDate(firstDate.getDate() - date));
};

const getNextDate = (firstDate: Date, date: number) => {
  return new Date(firstDate.setDate(firstDate.getDate() + date));
};

const getMonthDate = (year: number, month: number) => {
  const monthArr: Date[] = [];
  const firstDate = new Date(year, month - 1, 1);
  const lastDate = new Date(year, month, 0);

  while (firstDate.getMonth() === lastDate.getMonth()) {
    monthArr.push(new Date(firstDate));
    firstDate.setDate(firstDate.getDate() + 1);
  }
  const firstDay = monthArr[0].getDay();
  const lastDay = monthArr[monthArr.length - 1].getDay();

  if (firstDay !== 0) {
    Array(firstDay)
      .fill(0)
      .forEach((el, idx) => {
        monthArr.unshift(getBeforeDate(new Date(year, month - 1, 1), idx + 1));
      });
  }

  if (lastDay !== 6) {
    Array(6 - lastDay)
      .fill(0)
      .forEach((el, idx) => {
        monthArr.push(getNextDate(new Date(year, month, 0), idx + 1));
      });
  }
  return monthArr.map((el) => {
    return {
      key: formatDate(el.getFullYear(), el.getMonth() + 1, el.getDate()),
      year: el.getFullYear(),
      month: el.getMonth() + 1,
      date: el.getDate(),
      day: el.getDay(),
    };
  });
};

const getSelectWeek = (
  monthDate: Array<MonthDate>,
  curMonth: number,
  curDate: number,
  curDay: number
): Array<MonthDate> => {
  const startIdx =
    monthDate.findIndex((el) => el.date === curDate && el.month === curMonth) -
    curDay;
  const result = monthDate.slice(startIdx, startIdx + 7);
  console.log("monthDate", monthDate);
  console.log(result);
  return result;
};

export {
  getTodayYear,
  getTodayMonth,
  getTodayDates,
  formatDate,
  getBeforeDate,
  getMonthDate,
  getSelectWeek,
  getTodayDay,
};
