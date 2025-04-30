import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      <div className="modal-wrapper">
        {children}
      </div>
    </div>,
    document.getElementById('portal-root')
  );
};

export default Modal;
