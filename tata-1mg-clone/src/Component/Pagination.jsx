import React from "react";
import "./Pagination.css";
function Pagination({page,setPage}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        columnGap: "20px",
      }}
    >
      <button
        id="btn"
        onClick={() => setPage(page - 1)}
        disabled={page <= 1}>
        Prev
      </button>
      <button  id="btn1">
        {page}
      </button>
      <button
       id="btn"
        onClick={() => setPage(page + 1)}
        disabled={page === 5}>
        Next
      </button>
    </div>
  );
}

export default Pagination;

/*

@media only screen and (min-width:426px) and (max-width: 600px){}
*/
