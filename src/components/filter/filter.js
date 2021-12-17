import React from 'react';
import FilterItem from '../filter-item';
import classes from './filter.module.css';

export default function Filter() {
  return (
    <div className={classes.filterContainer}>
      <span className={classes.filterTitle}>Количество пересадок</span>
      <ul className={classes.filterList}>
        <FilterItem title="Все" />
        <FilterItem title="Без пересадок" />
        <FilterItem title="1 пересадка" />
        <FilterItem title="2 пересадки" />
        <FilterItem title="3 пересадки" />
      </ul>
    </div>
  );
}
