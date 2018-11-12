import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { openModal } from "./../../actions/index";

class CalendarDaily extends Component {
  constructor(props) {
    super(props);
    this.renderDay = this.renderDay.bind(this);
  }

  renderDay() {
    let tdClassName = "text-center";
    if (this.props.date) {
      const find = this.props.markedDays.find(
        markedDay => markedDay.date === this.props.date
      );
      if (find) tdClassName = `${find.bg} text-center"`;
    }
    return (
      <td
        onClick={() => this.props.openModal(true, this.props.date)}
        className={tdClassName}
      >
        {" "}
        {this.props.day}{" "}
      </td>
    );
  }

  render() {
    return this.renderDay();
  }
}

const mapStateToProps = ({ markedDays }) => {
  return { markedDays };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ openModal }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarDaily);
