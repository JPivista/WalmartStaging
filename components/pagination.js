// Pagination.jsx
import React from 'react';
import styles from '../styles/Home.module.css';

const Pagination = ({ items, pageSize, currentPage, onPageChange,postLength }) => {
    const pagesCount = Math.ceil(items / pageSize);

    console.log('items:', items);
    console.log('pageSize:', pageSize);
    console.log('currentPage:', currentPage);
    console.log('pageCount:', pagesCount);
    console.log('postlength:', postLength);
  
    if (pagesCount === 1) return null;
  
    const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

    console.log('pageitems:',pages)
  
    return (
      <div>
        <ul className={styles.pagination}>
          {pages.map((page) => (
            <li
              key={page}
              className={
                page === currentPage ? styles.pageItemActive : styles.pageItem
              }
            >
              <a
                className={styles.pageLink}
                onClick={() => onPageChange(page)}
              >
                {page}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Pagination;