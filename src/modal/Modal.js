
import './Modal.scss';

const Modal = ({ children, isOpen, onClose }) => {
  return (
    <div className="css3-modal" hidden={!isOpen}>
      <div className="css3-modal__wpr">
        <i className="css3-close" onClick={() => onClose(false)} />
        <div className="css3-modal__content">
          {children}
        </div >
      </div >
    </div>
  );
}

export default Modal;