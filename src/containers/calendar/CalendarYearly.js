import React, { Component } from "react";
import { connect } from "react-redux";
import CalendarMonthly from "./../../components/calendar/CalendarMonthly";
import { _processDates, processDates } from "./../../reducers/process_dates";
class CalendarYearly extends Component {
  constructor(props) {
    super(props);
    this.renderMonthly = this.renderMonthly.bind(this);
  }

  renderMonthly(monthlyData) {
    return (
      <div key={monthlyData.name} className="col-sm">
        <h4>{monthlyData.name}</h4>
        <CalendarMonthly dates={monthlyData.dates} name={monthlyData.name} />
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        <div className="row">{this.props.yearlyCalendar.map(this.renderMonthly)}</div>
      </div>
    );
  }
}

const mapStateToProps = ({ yearlyCalendar }) => {
  return { yearlyCalendar };
};

export default connect(mapStateToProps)(CalendarYearly);
