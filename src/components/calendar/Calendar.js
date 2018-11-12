import React from "react";
import CalendarYearly from "./../../containers/calendar/CalendarYearly";
import CalendarYearlyNav from "./../../containers/calendar/CalendarYearlyNav";
import ModalComponent from "./../../containers/calendar/Modal";
const Calendar = () => {
  return (
    <div>
      <CalendarYearlyNav />
      <CalendarYearly />
      <ModalComponent />
    </div>
  );
};

export default Calendar;
