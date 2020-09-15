/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { Modal, Button } from 'reactstrap';
import PropTypes from 'prop-types';

class ModalAlertError extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      isOpen: false,
    };
    this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      isOpen: false,
    });
  }

  render() {
    return (
      <Modal
        className="modal-dialog-centered modal-danger"
        contentClassName="bg-gradient-danger"
        isOpen={this.state.isOpen}
        toggle={() => this.toggleModal('notificationModal')}
      >
        <div className="modal-header">
          <h6 className="modal-title" id="modal-title-notification">
            {this.state.title}
          </h6>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => this.toggleModal('notificationModal')}
          >
            <span aria-hidden>×</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="py-3 text-center">
            <i className="ni ni-bell-55 ni-3x" />
            <h4 className="heading mt-4">{this.state.subTitle}</h4>
            <p>{this.state.msg}</p>
          </div>
        </div>
        <div className="modal-footer">
          <Button
            className="text-white ml-auto"
            color="link"
            data-dismiss="modal"
            type="button"
            onClick={() => this.toggleModal('notificationModal')}
          >
            {this.state.closeButton}
          </Button>
        </div>
      </Modal>
    );
  }
}

ModalAlertError.propTypes = {
  closeButton: PropTypes.object.isRequired,
  title: PropTypes.object.isRequired,
  subTitle: PropTypes.object.isRequired,
  msg: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  isOpen: PropTypes.bool.isRequired,
};

export default ModalAlertError;
