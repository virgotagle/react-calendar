import Moment from "moment";
import { extendMoment } from "moment-range";
import uniqid from "uniqid";

export const processDates = year => {
  const datesByMonth = yearlyDatesByMonth(year);
  const datesByWeek = datesByMonth.map(formatMonthlyByWeekly);
  return datesByWeek;
};

const formatMonthlyByWeekly = monthly => {
  const name = monthly.name;
  const firstDay = monthly.dates[0].d;
  const lastIndex = monthly.dates.length - 1;
  const lastDay = monthly.dates[lastIndex].d;
  for (let i = firstDay - 1; i > -1; i--) monthly.dates.unshift({ d: i, dd: "", date: "", id: uniqid() });
  for (let i = lastDay + 1; i < 7; i++) monthly.dates.push({ d: i, dd: "", date: "", id: uniqid() });
  const weekly = [];
  while (monthly.dates.length > 0) weekly.push(monthly.dates.splice(0, 7));
  return { dates: weekly, name };
};

const yearlyDatesByMonth = year => {
  const moment = extendMoment(Moment);
  const start = moment(`01/01/${year}`, "DD/MM/YYYY");
  const end = moment(`01/12/${year}`, "DD/MM/YYYY").endOf("month");
  const dateRange = moment.range(start, end);
  const monthly = [];
  Array.from(dateRange.by("day")).forEach(mom => {
    const monthName = mom.format("MMMM");
    const findMonth = monthly.find(month => month.name === monthName);
    if (findMonth) {
      findMonth.dates.push({
        date: mom.format("DD/MM/YYYY"),
        dd: mom.format("DD"),
        d: parseInt(mom.format("d")),
        id: uniqid()
      });
    } else {
      monthly.push({
        name: monthName,
        dates: [
          {
            date: mom.format("DD/MM/YYYY"),
            dd: mom.format("DD"),
            d: parseInt(mom.format("d"))
          }
        ]
      });
    }
  });
  return monthly;
};
