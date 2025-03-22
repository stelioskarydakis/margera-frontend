import {
  Filters,
  SortSelect,
  SortWrapper,
  SortWrapperLabel,
} from "./FiltersWrapper.styles";

type FiltersWrapperProps = {
  setOrderdirection: (order: string) => void;
  setSortField: (field: string) => void;
};

const FiltersWrapper = ({
  setOrderdirection,
  setSortField,
}: FiltersWrapperProps) => {
  return (
    <Filters>
      <SortWrapper>
        <SortWrapperLabel>Sort by:</SortWrapperLabel>
        <SortSelect onChange={(e) => setSortField(e.target.value)}>
          <option value="email">Email</option>
          <option value="name">Name</option>
          <option value="date">Date</option>
        </SortSelect>
      </SortWrapper>
      <SortWrapper>
        <SortWrapperLabel>Order:</SortWrapperLabel>
        <SortSelect onChange={(e) => setOrderdirection(e.target.value)}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </SortSelect>
      </SortWrapper>
    </Filters>
  );
};

export default FiltersWrapper;
