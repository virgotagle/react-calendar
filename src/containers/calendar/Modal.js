import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { openModal, sethMarkDay, removeMarkDay } from "./../../actions/index";
import moment from "moment";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: this.props.modal.show ? this.props.openModal.show : false
    };
    this.toggle = this.toggle.bind(this);
    this.markHoliday = this.markHoliday.bind(this);
    this.markBirthday = this.markBirthday.bind(this);
    this.markBusy = this.markBusy.bind(this);
    this.markAnniversary = this.markAnniversary.bind(this);
    this.removeMark = this.removeMark.bind(this);
  }

  toggle() {
    this.props.openModal(false, "");
  }

  markHoliday() {
    this.props.sethMarkDay(this.props.modal.date, "bg-success");
    this.props.openModal(false, "");
  }

  markBirthday() {
    this.props.sethMarkDay(this.props.modal.date, "bg-info");
    this.props.openModal(false, "");
  }

  markBusy() {
    this.props.sethMarkDay(this.props.modal.date, "bg-danger");
    this.props.openModal(false, "");
  }

  markAnniversary() {
    this.props.sethMarkDay(this.props.modal.date, "bg-warning");
    this.props.openModal(false, "");
  }

  removeMark() {
    this.props.removeMarkDay(this.props.modal.date);
    this.props.openModal(false, "");
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.props.modal.show ? this.props.modal.show : false} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            {`Mark ${moment(this.props.modal.date, "DD/MM/YYYY").format("MMMM Do YYYY")} As`}
          </ModalHeader>
          <ModalBody>
            <div className="list-group">
              <a href="#" className="list-group-item list-group-item-action text-success" onClick={this.markHoliday}>
                Holiday
              </a>
              <a href="#" className="list-group-item list-group-item-action text-info" onClick={this.markBirthday}>
                Birthday
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action text-warning"
                onClick={this.markAnniversary}
              >
                Anviersary
              </a>
              <a href="#" className="list-group-item list-group-item-action text-danger" onClick={this.markBusy}>
                Busy
              </a>
              <a href="#" className="list-group-item list-group-item-action" onClick={this.removeMark}>
                Remove
              </a>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ openModal, sethMarkDay, removeMarkDay }, dispatch);
};

const mapStateToProps = ({ modal }) => {
  return { modal };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalComponent);
