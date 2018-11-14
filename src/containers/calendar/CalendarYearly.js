import React from "react";
import { connect } from "react-redux";
import CalendarMonthly from "./../../components/calendar/CalendarMonthly";

const CalendarYearly = ({ yearData }) => {
  const renderMonthly = monthlyData => {
    return (
      <div key={monthlyData.name} className="col-sm">
        <h4>{monthlyData.name}</h4>
        <CalendarMonthly dates={monthlyData.dates} name={monthlyData.name} />
      </div>
    );
  };
  return (
    <div className="container">
      <div className="row">{yearData.map(renderMonthly)}</div>
    </div>
  );
};

const mapStateToProps = ({ yearData }) => {
  return { yearData };
};

export default connect(mapStateToProps)(CalendarYearly);
