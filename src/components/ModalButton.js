const ModalButton = (props) => {
  return (
    <button className="modalButton" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default ModalButton;
