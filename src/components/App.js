import React, { Component } from "react";
import Calendar from "./../components/calendar/Calendar";
export default class App extends Component {
  render() {
    return (
      <div className="col-xs-1" align="center">
        <Calendar />
      </div>
    );
  }
}
