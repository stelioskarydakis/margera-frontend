import Icon from "../../commonComponents/Icon/Icon";
import {
  LeftSide,
  Pagination,
  PaginationButton,
  PaginationText,
  ShowPerPage,
  SortSelect,
  TableFooter,
  Total,
} from "./TableFooterWrapper.styles";

type TableFooterWrapperProps = {
  total: number;
  numOfPages: number;
  page: number;
  pagesize: number;
  setPageSize: (pagesize: number) => void;
  setPage: (page: number) => void;
};

const TableFooterWrapper = ({
  total,
  numOfPages,
  page,
  pagesize,
  setPageSize,
  setPage,
}: TableFooterWrapperProps) => {
  const isPrevDisabled = page <= 1;
  const isNextDisabled = page >= numOfPages;

  console.log("page", page);
  console.log("totalPages", numOfPages);

  return (
    <TableFooter>
      <LeftSide>
        <Total>
          Total: <span>{total}</span>
        </Total>
        <ShowPerPage>
          Rows per page:
          <SortSelect
            value={pagesize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            <option value="10">10</option>
            <option value="20">20</option>
          </SortSelect>
        </ShowPerPage>
      </LeftSide>
      <Pagination>
        <PaginationButton
          $isDisabled={isPrevDisabled}
          onClick={() => !isPrevDisabled && setPage(page - 1)}
        >
          <Icon type="chevronLeft" isInvert />
        </PaginationButton>
        <PaginationText>{page}</PaginationText>
        <PaginationButton
          $isDisabled={isNextDisabled}
          onClick={() => !isNextDisabled && setPage(page + 1)}
        >
          <Icon type="chevronRight" isInvert />
        </PaginationButton>
      </Pagination>
    </TableFooter>
  );
};

export default TableFooterWrapper;
