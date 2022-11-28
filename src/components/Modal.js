import { useRef } from "react";

// Kode hentet fra https://github.com/trananhtuat/react-modal

const Modal = (props) => {
  const modalRef = useRef();
  return (
    <div ref={modalRef} className={`modal ${props.show ? "active" : ""}`}>
      <div className="modal__content">{props.children}</div>
    </div>
  );
};

export default Modal;

export const ModalHeader = (props) => {
  return <div className="modal__header">{props.children}</div>;
};

export const ModalBody = (props) => {
  return <div className="modal__body">{props.children}</div>;
};

export const ModalFooter = (props) => {
  return <div className="modal__footer">{props.children}</div>;
};
