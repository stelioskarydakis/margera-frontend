import React from "react";
import ReactDOM from "react-dom";
import { ModalWrapper, ModalContent, CloseButton } from "./Modal.styles";
import Icon from "../Icon/Icon";

type ModalProps = {
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ onClose, children }: ModalProps) => {
  const handleWrapperClick = () => {
    onClose();
  };
  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return ReactDOM.createPortal(
    <ModalWrapper onClick={handleWrapperClick}>
      <ModalContent onClick={handleContentClick}>
        <CloseButton onClick={onClose}>
          <Icon type="cross" />
        </CloseButton>
        {children}
      </ModalContent>
    </ModalWrapper>,
    document.body
  );
};

export default Modal;
