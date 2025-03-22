import { useEffect } from "react";
import { ToastWrapper } from "./Toast.styles";
import { getToastColor } from "../../helpers/getToastColor";
import ReactDOM from "react-dom";

type ToastProps = {
  message: string;
  show: boolean;
  type: string;
  onClose: () => void;
};

const Toast = ({ message, show, type, onClose }: ToastProps) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  const toastContent = (
    <ToastWrapper $show={show} $bgColor={getToastColor(type)}>
      {message}
    </ToastWrapper>
  );

  const toastRoot = document.getElementById("toast-container");
  if (!toastRoot) {
    console.error("Toast container not found!");
    return null;
  }

  return ReactDOM.createPortal(toastContent, toastRoot);
};

export default Toast;
