import { useState } from "react";
import style from "./pagination.module.css"

const Pagination = ({currentPage, totalPages, onPageChange, handlePrev, handleNext}) => {
    const canGoPrev = currentPage > 1;
    const canGoNext = currentPage < totalPages;
    console.log(currentPage, totalPages, 'hola')

    return (
        <div className={style.container}>
          <button className={style.button} onClick={handlePrev} disabled={!canGoPrev}>
            &lt; Prev
          </button>
          <span className={style.info}>Page {currentPage} of {totalPages}</span>
          <button className={style.button} onClick={handleNext} disabled={!canGoNext}>
            Next &gt;
          </button>
        </div>
      );
};

export default Pagination