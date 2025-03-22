import { useEffect, useState } from "react";
import { LinkButton } from "../../../styles/CommonStyles.styles";
import Icon from "../../commonComponents/Icon/Icon";
import FiltersWrapper from "../../sectionComponents/FiltersWrapper/FiltersWrapper";
import TableFooterWrapper from "../../sectionComponents/TableFooterWrapper/TableFooterWrapper";
import TableHeaderWrapper from "../../sectionComponents/TableHeaderWrapper/TableHeaderWrapper";
import TableRowWrapper from "../../sectionComponents/TableRowWrapper/TableRowWrapper";
import {
  NoData,
  StatusText,
  TableBody,
  TableTitle,
  Wrapper,
} from "./SubcriberTable.styles";
import Modal from "../../commonComponents/Modal/Modal";
import AddSubscriberForm from "../AddSubcriberForm/AddSubcriberForm";
import Skeleton from "../../commonComponents/Skeleton/Skeleton";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { fetchSubscribers } from "../../../redux/subscribersSlice";

const SubcriberTable = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [isModalOpen, setModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [sortField, setSortField] = useState("email");
  const [orderdirection, setOrderdirection] = useState("asc");
  const [pagesize, setPageSize] = useState(10);
  const [statusElement, setStatusElement] = useState<string | null>(null);

  const { subscribers, total, numOfPages, loading } = useSelector(
    (state: RootState) => state.subscribers
  );

  useEffect(() => {
    dispatch(fetchSubscribers({ page, pagesize, sortField, orderdirection }));
  }, [dispatch, page, pagesize, sortField, orderdirection]);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  useEffect(() => {
    setTimeout(() => {
      setStatusElement(null);
    }, 3000);
  }, [statusElement]);

  return (
    <Wrapper>
      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <AddSubscriberForm
            handlefinal={handleCloseModal}
            sortField={sortField || "email"}
            orderdirection={orderdirection || "asc"}
            page={1}
            pagesize={pagesize || 10}
            setStatusElement={setStatusElement}
          />
        </Modal>
      )}
      <TableTitle>
        Subscribers
        <LinkButton onClick={handleOpenModal}>
          <Icon type="addUser" />
          Add Subscriber
        </LinkButton>
      </TableTitle>
      {statusElement && <StatusText>{statusElement}</StatusText>}
      <FiltersWrapper
        setSortField={setSortField}
        setOrderdirection={setOrderdirection}
      />
      <TableHeaderWrapper />
      <TableBody>
        {loading ? (
          Array.from({ length: pagesize }).map((_, index) => (
            <Skeleton key={index.toLocaleString()} />
          ))
        ) : subscribers.length === 0 ? (
          <NoData>No data found</NoData>
        ) : (
          subscribers.map((subscriber) => (
            <TableRowWrapper
              key={subscriber.EmailAddress}
              subscriber={subscriber}
              setStatusElement={setStatusElement}
              sortField={sortField || "email"}
              orderdirection={orderdirection || "asc"}
              page={1}
              pagesize={pagesize || 10}
            />
          ))
        )}
      </TableBody>
      <TableFooterWrapper
        setPage={setPage}
        setPageSize={setPageSize}
        page={page}
        pagesize={pagesize}
        total={total}
        numOfPages={numOfPages}
      />
    </Wrapper>
  );
};

export default SubcriberTable;
