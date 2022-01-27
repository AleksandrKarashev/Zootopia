import React from "react";
import { Pagination } from 'react-bootstrap';
import "./pagination.css";

const PaginationComponent = ({ pageN, setPageN }) => {

   let pages = [1, 2, 3, 4, 5, 6, 7, 8, 9];
   return (
      <div className="paginationContainer">
         <Pagination id="pagination">
            {
               pages.map((page, index) =>
                  <Pagination.Item
                     key={index}
                     active={page === pageN}
                     onClick={() => setPageN(page)}

                  >{page}
                  </Pagination.Item>
               )
            }
         </Pagination>
      </div>
   );
}

export default PaginationComponent;