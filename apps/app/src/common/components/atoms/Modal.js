import Modal from "react-modal";
import "../styles/Modal.scss"

export default function ReactModal({isOpen, children}) {
  return (
    <Modal isOpen={isOpen} ariaHideApp={false}>
      {children}
    </Modal>
  );
}
