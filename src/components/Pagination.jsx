import { useEffect, useState } from "react";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";
import { getPaginateProducts, getCurrentItems } from "../slice/dataSlice";


const Pagination = ({ itemsPerPage, pageData }) => {
  const [offset, setOffset] = useState(0);
  const dispatch = useDispatch();

  const endOffset = offset + itemsPerPage;
  const currentItems = pageData.slice(offset, endOffset);
  const pageCount = Math.ceil(pageData.length / itemsPerPage);





  useEffect(() => {
    dispatch(getCurrentItems(currentItems));
  }, [currentItems]);

  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % pageData.length;
    setOffset(newOffset);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={<FiChevronsRight />}
      onPageChange={handlePageClick}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      previousLabel={<FiChevronsLeft />}
      renderOnZeroPageCount={null}
      containerClassName="flex-align-center sm:flex items-center justify-center  mt-4 w-full px-4 select-none max-w-[300px] sm:max-w-fit overflow-auto mx-auto;"
      pageClassName="p-2"
      pageLinkClassName="grid w-8 h-8 mx-3 text-sm text-inherit place-items-center"
      activeClassName="text-[#fff] rounded-lg shadow-md bg-primary shadow-primary/60"
      previousLinkClassName="inline-flex text-primary mr-4"
      nextLinkClassName="inline-flex text-primary mr-4"
      disabledClassName="opacity-40"
    />
  );
};

export default Pagination;