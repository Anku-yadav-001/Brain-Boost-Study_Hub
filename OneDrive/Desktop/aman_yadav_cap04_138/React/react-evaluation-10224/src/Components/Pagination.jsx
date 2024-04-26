function createArrayOfSize(n) {
  return new Array(n).fill().map((_,index)=>index+1);
}

function Pagination({totalPages,currentPage,handlePageChange}) {
  let pages = createArrayOfSize(totalPages).map((page) => (
    <button data-testid="page-btn"key={page}  onClick={()=>handlePageChange(page)}  disabled={currentPage==page} >{page}</button>
  ));
  return <div>{pages}</div>;
}

export default Pagination;
