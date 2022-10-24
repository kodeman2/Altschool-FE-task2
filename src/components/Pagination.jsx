const Pagination = ({ totalPages, handleClick, page }) => {
  const pages = [...Array(totalPages).keys()].map((number) => number + 1);

  return (
    <div className="numbers">
      <button
        
        onClick={() => handleClick(page - 1)}
        disabled={page === 1}
       
      >
        Prev
      </button>
      {pages.map((number) => (
        <button
          key={number}
          onClick={() => handleClick(number)}
          className={`${page === number && "active"}`}
        >
          {number}
        </button>
      ))}
      <button
        onClick={() => handleClick(page + 1)}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
