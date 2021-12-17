import React from 'react';
import ResultsItem from '../results-item';
import classes from './results-list.module.css';

export default function ResultsList() {
  return (
    <ul className={classes.list}>
      <ResultsItem />
      <ResultsItem />
      <ResultsItem />
      <button className={classes.buttonMore} type="button">
        Показать ещё 5 билетов!
      </button>
    </ul>
  );
}
