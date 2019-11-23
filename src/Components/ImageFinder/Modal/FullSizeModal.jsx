import React from 'react';
import Modal from 'react-awesome-modal';
import PropTypes from 'prop-types';
import css from './FullSizeModal.module.scss';

const FullSizeModal = ({ close, visible, fullImage }) => (
  <Modal visible={visible} effect="fadeInDown" onClickAway={close}>
    <div>
      <img className={css.modalImage} src={fullImage} alt="#" />
    </div>
  </Modal>
);

FullSizeModal.propTypes = {
  close: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  fullImage: PropTypes.string.isRequired,
};

export default FullSizeModal;
