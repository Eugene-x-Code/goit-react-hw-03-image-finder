import React, { Component, createRef } from 'react';
import Modal from 'react-awesome-modal';
import PropTypes from 'prop-types';
import css from './FullSizeModal.module.scss';

class FullSizeModal extends Component {
  state = {};

  backDropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.code !== 'Escape') return;
    this.props.close();
  };

  render() {
    return (
      <Modal
        visible={this.props.visible}
        effect="fadeInDown"
        onClickAway={this.props.close}
      >
        <div>
          <img className={css.modalImage} src={this.props.fullImage} alt="#" />
        </div>
      </Modal>
    );
  }
}

FullSizeModal.propTypes = {
  close: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  fullImage: PropTypes.string.isRequired,
};

export default FullSizeModal;
