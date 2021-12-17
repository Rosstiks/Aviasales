import React from 'react';
import classes from './results-filter.module.css';

export default function ResultsFilter() {
  return (
    <div className={classes.container}>
      <button className={`${classes.item} ${classes.active}`} type="button">
        Самый дешёвый
      </button>
      <button className={classes.item} type="button">
        Самый быстрый
      </button>
      <button className={classes.item} type="button">
        Оптимальный
      </button>
    </div>
  );
}
