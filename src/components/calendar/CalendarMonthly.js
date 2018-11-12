import React, { Component } from "react";
import CalendarDaily from "./../../containers/calendar/CalendarDaily";

export default class CalendarMonthly extends Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th className="text-center">Su</th>
            <th className="text-center">M</th>
            <th className="text-center">T</th>
            <th className="text-center">W</th>
            <th className="text-center">Th</th>
            <th className="text-center">F</th>
            <th className="text-center"> S</th>
          </tr>
        </thead>
        <tbody>
          {this.props.dates.map((weekly, i) => (
            <tr key={`${this.props.name}${i}`}>
              {weekly.map((daily, l) => (
                <CalendarDaily key={`${this.props.name}${i}${l}`} id={daily.id} date={daily.date} day={daily.dd} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
