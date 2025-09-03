import ReactPaginate from 'react-paginate';
import css from './Pagination.module.css';

interface PaginationProps {
  pageCount: number;
  currentPage: number;
  onPageChange: (selectedItem: { selected: number }) => void;
}

const Pagination = ({ pageCount, currentPage, onPageChange }: PaginationProps) => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="›"
      previousLabel="‹"
      onPageChange={onPageChange}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      forcePage={currentPage}
      containerClassName={css.pagination}
      activeClassName="active"
    />
  );
};

export default Pagination;