import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setYearlyCalendar, sethMarkDay } from "./../../actions/index";
import moment from "moment";
class CalendarYearlyNav extends Component {
  constructor(props) {
    super(props);
    this.state = { year: parseInt(moment().format("YYYY")) };
    this.nextYear = this.nextYear.bind(this);
    this.prevYear = this.prevYear.bind(this);
    this.currentYear = this.currentYear.bind(this);
    this.props.setYearlyCalendar(this.state.year);
    this.props.sethMarkDay(moment().format("DD/MM/YYYY"), "bg-primary");
  }

  nextYear() {
    this.setState({ year: this.state.year + 1 }, () => {
      this.props.setYearlyCalendar(this.state.year);
    });
  }
  prevYear() {
    this.setState({ year: this.state.year - 1 }, () => {
      this.props.setYearlyCalendar(this.state.year);
    });
  }

  currentYear() {
    this.setState({ year: parseInt(moment().format("YYYY")) }, () => {
      this.props.setYearlyCalendar(this.state.year);
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.year} Calendar</h1>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-secondary" onClick={this.prevYear}>
            &larr; Prev Year
          </button>
          <button type="button" className="btn btn-secondary" onClick={this.currentYear}>
            Current Year
          </button>
          <button type="button" className="btn btn-secondary" onClick={this.nextYear}>
            Next Year &rarr;
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setYearlyCalendar, sethMarkDay }, dispatch);
};

export default connect(
  null,
  mapDispatchToProps
)(CalendarYearlyNav);
