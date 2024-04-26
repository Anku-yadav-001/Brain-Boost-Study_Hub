function Pagination({currentPages,totalPages,onChange}) {
  const prev = (
    <button
      data-testid="prev-page"
      // disabled={true}
      disabled={currentPages==1}
     onClick={()=>onChange(currentPages-1)}
    >
      Prev
    </button>
  );
  const currentPage = <button data-testid="current-page" >{currentPages}</button>;
  const next = (
    <button
      data-testid="next-page"
      // disabled={true}
      disabled={currentPages>=totalPages}
      onClick={()=>onChange(currentPages+1)}
    >
      Next
    </button>
  );
  return (
  <div data-testid="page-container">
      <div>
      {prev}
      {currentPage}
      {next}
      </div>
      <div>
        Total Pages: <b data-testid="total-pages">{totalPages}</b>
      </div>
    </div>
  );
}

export default Pagination;
