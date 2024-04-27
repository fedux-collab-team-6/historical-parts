import { Link } from "react-router-dom";
const Pages = ({ currentPage, maxPage }) => {
  return (
    <>
      <div className="flex justify-center items-center">
        {currentPage > 1 && (
          <span className=" hover:bg-spindle-900 border-[1px] border-spindle-900 px-2 py-1  border-r-0 hover:text-light-200 cursor-pointer">
            <Link to={`?page=${currentPage - 1}`}>{"< "} </Link>
          </span>
        )}
        <div className=" border-[1px] border-spindle-900 px-6 py-1">
          {currentPage} of {maxPage}
        </div>
        {currentPage < maxPage && (
          <span className=" hover:bg-spindle-900 border-[1px] border-spindle-900 border-l-0 px-2 py-1 hover:text-light-200 cursor-pointer">
            <Link to={`?page=${currentPage + 1}`}>{" >"} </Link>
          </span>
        )}
      </div>
    </>
  );
};

export default Pages;
