import React from 'react';
import { getPageArray } from '../../../utils/page';
import classes from './Pogination.module.css';
const Pogination = ({ totalPages, page, changePage }) => {
    let pagesArray = getPageArray(totalPages);
    return (
        <div className={classes.menu__page}>
            {
                pagesArray.map(item =>

                    <span
                        onClick={() => changePage(item)}

                        key={item}
                        className={(page === item) ? [classes.page, classes.page__current].join(" ") : classes.page}
                    >
                        {item}

                    </span>)
            }
        </div >
    );
};

export default Pogination;