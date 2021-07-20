import React, { useState } from 'react';
import classes from './paginator.module.css';




let Paginator = (props) => {

    let portionSize = 10;

    let pagesCount = props.totalCount / props.pageSise;

    let pages = [];

    for (let i = 1; i <= Math.ceil(pagesCount); i++) {
        pages.push(i);
    };

    let protionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNum = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNum = portionNumber * portionSize

    return (
        <div className={classes.pageNumber}>
            {portionNumber > 1 &&
                <button onClick={() => { setPortionNumber(portionNumber - 1) }}>назад</button>}
            {
                pages
                    .filter(p => p >= leftPortionPageNum && p <= rightPortionPageNum)
                    .map(p => {
                        return <span className={props.carrentPage === p && classes.pageNumberBold} onClick={() => { props.setCurrentPage(p) }}> {p} </span>
                    })
            }

            {protionCount > portionNumber &&
                <button onClick={() => { setPortionNumber(portionNumber + 1) }}>вперед</button>}
        </div>
    )
};

export default Paginator;