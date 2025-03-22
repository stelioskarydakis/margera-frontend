import { Button } from "../../../styles/CommonStyles.styles";
import {
  AlertButtons,
  AlertText,
  AlertTitle,
  Wrapper,
} from "./AlertDialog.styles";

type AlertDialogProps = {
  title: string;
  text: string;
  handleClose: () => void;
  handleOnAction: () => void;
};

const AlertDialog = ({
  title,
  text,
  handleClose,
  handleOnAction,
}: AlertDialogProps) => {
  return (
    <Wrapper>
      <AlertTitle>{title}</AlertTitle>
      <AlertText>{text}</AlertText>
      <AlertButtons>
        <Button $bgColor="var(--primary-color)" onClick={handleClose}>
          Cancel
        </Button>
        <Button $bgColor="var(--danger-color)" onClick={handleOnAction}>
          Confirm
        </Button>
      </AlertButtons>
    </Wrapper>
  );
};

export default AlertDialog;
