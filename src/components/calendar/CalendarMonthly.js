import React from "react";
import CalendarDaily from "./../../containers/calendar/CalendarDaily";

const CalendarMonthly = ({ dates, name }) => {
  const header = ["Su", "M", "T", "W", "Th", "F", "S"];
  return (
    <table className="table">
      <thead>
        <tr>
          {header.map(d => (
            <th key={d} className="text-center">
              {d}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dates.map((weekly, i) => (
          <tr key={`${name}${i}`}>
            {weekly.map((daily, l) => (
              <CalendarDaily key={`${name}${i}${l}`} id={daily.id} date={daily.date} day={daily.dd} />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CalendarMonthly;
