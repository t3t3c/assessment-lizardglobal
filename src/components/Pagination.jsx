import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  // calculate rounded up number of the pages
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  // add current class to current anchor to style it
  function anchorClassName(number) {
    if (number === currentPage) {
      return 'page-link current';
    } else {
      return 'page-link';
    }
  }
  // show the numbers
  return (
    <nav>
      <ul className="Pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            {/* onClick we change the current page */}
            <button
              onClick={() => paginate(number)}
              className={anchorClassName(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
