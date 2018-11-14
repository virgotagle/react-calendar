import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setModalIsOpen } from "./../../actions/index";
import * as types from "./../../constants/Calendar";

const CalendarDaily = ({ date, day, setModalIsOpen, markedDays }) => {
  let tdClassName = types.DAY_CLASSNAME;
  if (date) {
    const find = markedDays.find(markedDay => markedDay.date === date);
    if (find) tdClassName = find.className;
  }

  const openModal = () => setModalIsOpen(true, date);

  return (
    <td style={{ cursor: "pointer" }} onClick={openModal} className={tdClassName}>
      {day}
    </td>
  );
};

const mapStateToProps = ({ markedDays }) => ({ markedDays });

const mapDispatchToProps = dispatch => bindActionCreators({ setModalIsOpen }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarDaily);
