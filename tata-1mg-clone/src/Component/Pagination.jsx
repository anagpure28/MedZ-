import React from 'react'
import "./Pagination.css"




function Pagination({currentPage,totalPages,onClick}) {

  const pageNumbers = [];

  for(let i=1; i<=totalPages; i++){
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-main" style={{width:"50%",margin:"auto",display:"flex",justifyContent:"space-evenly",padding:"5px",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
        <button disabled={currentPage===1}>{"< "}Previous</button>
        {pageNumbers?.map((el,i)=>{
            return <button key={i}>{el}</button>
        })}
        <button disabled={currentPage===totalPages}>Next{" >"}</button>
    </div>
  )
}

export default Pagination



/*

@media only screen and (min-width:426px) and (max-width: 600px){}
*/

