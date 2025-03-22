/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState } from "react";
import { ActionButton } from "../../../styles/CommonStyles.styles";
import Icon from "../../commonComponents/Icon/Icon";
import { TableCell, TableRow } from "./TableRowWrapper.styles";
import Modal from "../../commonComponents/Modal/Modal";
import UserData from "../UserData/UserData";
import AlertDialog from "../../commonComponents/AlertDialog/AlertDialog";
import { Subscriber } from "../../../types/Subscriber";
import { useDispatch } from "react-redux";
import { deleteSubscriber } from "../../../redux/subscribersSlice";
import { AppDispatch } from "../../../redux/store";

type TableRowWrapperProps = {
  subscriber: Subscriber;
  setStatusElement: (status: string | null) => void;
  sortField?: string;
  orderdirection?: string;
  page?: number;
  pagesize?: number;
};

const TableRowWrapper = ({
  subscriber,
  setStatusElement,
}: TableRowWrapperProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { EmailAddress, Name } = subscriber;
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<string | null>(null);

  const handleOptions = () => {
    setModalContent("user");
    setModalOpen(true);
  };
  const handleDelete = () => {
    setModalContent("delete");
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleOnAction = async () => {
    try {
      const actionResult = await dispatch(deleteSubscriber(EmailAddress));

      if (deleteSubscriber.fulfilled.match(actionResult)) {
        const successMessage = "Subscriber deleted successfully!";
        setStatusElement(successMessage);
      } else {
        const errorMessage = "Failed to delete subscriber.";
        setStatusElement(errorMessage);
      }
    } catch (error) {
      const errorMessage = "Failed to delete subscriber.";
      setStatusElement(errorMessage);
    } finally {
      handleCloseModal();
    }
  };

  return (
    <TableRow>
      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          {modalContent === "delete" ? (
            <AlertDialog
              title="Are you sure?"
              text="This action is irreversible. Do you want to proceed?"
              handleOnAction={handleOnAction}
              handleClose={handleCloseModal}
            />
          ) : (
            <UserData subscriber={subscriber} />
          )}
        </Modal>
      )}

      <TableCell>{Name}</TableCell>
      <TableCell>{EmailAddress}</TableCell>
      <TableCell>
        <ActionButton $bgColor="var(--primary-color)" onClick={handleOptions}>
          <Icon type="menu" isInvert />
        </ActionButton>
        <ActionButton $bgColor="var(--danger-color)" onClick={handleDelete}>
          <Icon type="delete" isInvert />
        </ActionButton>
      </TableCell>
    </TableRow>
  );
};

export default TableRowWrapper;
