import {
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "./TableHeaderWrapper.styles";

const TableHeaderWrapper = () => {
  return (
    <TableHeader>
      <TableRow>
        <TableHeaderCell>Name</TableHeaderCell>
        <TableHeaderCell>Email</TableHeaderCell>
        <TableHeaderCell>Actions</TableHeaderCell>
      </TableRow>
    </TableHeader>
  );
};

export default TableHeaderWrapper;
