import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setModalIsOpen, setMarkedDay, removeMarkedDay } from "./../../actions/index";
import moment from "moment";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import * as className from "./../../constants/Calendar";
const ModalComponent = ({ modal, setModalIsOpen, setMarkedDay, removeMarkedDay }) => {
  const toggle = () => setModalIsOpen(false, "");
  const markedDay = cName => {
    setMarkedDay(modal.date, cName);
    setModalIsOpen(false, modal.date);
  };
  const removedMark = () => {
    removeMarkedDay(modal.date);
    setModalIsOpen(false, modal.date);
  };
  return (
    <Modal isOpen={modal.isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>{`Mark ${moment(modal.date, "DD/MM/YYYY").format("MMMM Do YYYY")} As`}</ModalHeader>
      <ModalBody>
        <div className="list-group">
          <a
            href="#"
            className={`${className.HOLIDAY_CLASSNAME} list-group-item list-group-item-action`}
            onClick={() => markedDay(className.HOLIDAY_CLASSNAME)}
          >
            Holiday
          </a>
          <a
            href="#"
            className={`${className.BIRTHDAY_CLASSNAME} list-group-item list-group-item-action`}
            onClick={() => markedDay(className.BIRTHDAY_CLASSNAME)}
          >
            Birthday
          </a>
          <a
            href="#"
            className={`${className.BUSY_CLASSNAME} list-group-item list-group-item-action`}
            onClick={() => markedDay(className.BUSY_CLASSNAME)}
          >
            Busy
          </a>
          <a
            href="#"
            className={`${className.ANNIVERSARY_CLASSNAME} list-group-item list-group-item-action`}
            onClick={() => markedDay(className.ANNIVERSARY_CLASSNAME)}
          >
            Anniversary
          </a>
          <a className={`${className.DAY_CLASSNAME} list-group-item list-group-item-action`} onClick={removedMark}>
            Remove
          </a>
        </div>
      </ModalBody>
    </Modal>
  );
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setModalIsOpen, setMarkedDay, removeMarkedDay }, dispatch);
};

const mapStateToProps = ({ modal }) => {
  return { modal };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalComponent);
