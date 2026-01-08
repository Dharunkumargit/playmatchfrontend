import React from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const Pagination = ({
  totalItems,
  itemsPerPage,
  setCurrentPage,
  currentPage,
  totalPages
}) => {
  const displayText = `Showing results for ${currentPage} out of ${totalPages}`;

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const generatePageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;

    
    let startPage = Math.max(currentPage - Math.floor(maxPagesToShow / 2), 1);
    let endPage = startPage + maxPagesToShow - 1;

   
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(endPage - maxPagesToShow + 1, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <div className="flex justify-between items-center h-1/12 px-3 whitespace-nowrap overflow-auto no-scrollbar mt-2">
      <div className="text-sm font-normal text-black">
        <p>{displayText}</p>
      </div>

      <div className="flex items-center justify-center gap-4 pr-3">
        
        <button
          className={`${
            currentPage === 1
              ? "text-darkest-blue opacity-70 cursor-not-allowed"
              : "text-darkest-blue"
          }`}
          onClick={() => paginate(1)}
          disabled={currentPage === 1}
        >
          <GoArrowLeft />
        </button>

       
        <button
          className={`${
            currentPage === 1
              ? "text-darkest-blue opacity-70 cursor-not-allowed"
              : "text-darkest-blue"
          }`}
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <div className="flex items-center gap-3 text-grey">
         <p className="bg-dark-brown text-white px-2 py-1.5 rounded-sm">1</p> <p>2</p> <p>3</p> <p>4</p> <p>5</p> <p>...</p>
        </div>
        {generatePageNumbers().map((page, index) => (
          <button
            key={index}
            className={`px-2.5 py-1 text-sm rounded-md ${
              currentPage === page
                ? "bg-dark-yellow font-medium text-black"
                : "text-dark-yellow"
            }`}
            onClick={() => paginate(page)}
          >
            {page}
          </button>
        ))}

       
        <button
          className={`${
            currentPage === totalPages
              ? "text-grey opacity-70 cursor-not-allowed"
              : "text-black"
          }`}
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>

        
        <button
          className={`${
            currentPage === totalPages
              ? "text-black opacity-70 cursor-not-allowed"
              : "text-black"
          }`}
          onClick={() => paginate(totalPages)}
          disabled={currentPage === totalPages}
        >
          <GoArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;