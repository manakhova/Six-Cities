import React from 'react';
import PropTypes from 'prop-types';
import {SortType} from '../../const';

const Sorting = (props) => {
  const {sortType, onSortTypeClick} = props;

  const handleSelectClick = () => {
    const sortList = document.querySelector(`.places__options--custom`);
    sortList.style.display = sortList.style.display === `none` ? `block` : `none`;
  };

  const closeSelect = () => {
    const sortList = document.querySelector(`.places__options--custom`);
    sortList.style.display = `none`;
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={handleSelectClick}>
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom" style={{display: `none`}}>
        {Object.values(SortType).map((sort, i) => (
          <li key={sort + i}
            className={`places__option
            ${sort === sortType ? `places__option--active` : ``}`}
            tabIndex="0"
            onClick={onSortTypeClick(sort, closeSelect)}
          >
            {sort}
          </li>
        ))}
      </ul>
    </form>
  );
};

// где-то тут повесить обработчик клика по сортировке чтобы менялся актуальный в стейте

Sorting.propTypes = {
  sortType: PropTypes.string.isRequired,
  onSortTypeClick: PropTypes.func.isRequired,
};

export default Sorting;
