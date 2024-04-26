import { Link } from "react-router-dom";
const Pages = ({ currentPage, maxPage }) => {
  return (
    <>
      <div>
        {currentPage > 1 && (
          <span>
            <Link to={`?page=${currentPage - 1}`}>{"< "} </Link>
          </span>
        )}
        Page {currentPage} of {maxPage}
        {currentPage < maxPage && (
          <span>
            <Link to={`?page=${currentPage + 1}`}>{" >"} </Link>
          </span>
        )}
      </div>
    </>
  );
};

export default Pages;
