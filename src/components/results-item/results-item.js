import React from 'react';
import testLogo from '../../img/S7 Logo(TEST).png';
import classes from './results-item.module.css';

export default function ResultsItem() {
  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
    <li className={classes.container} tabIndex="0">
      <header className={classes.header}>
        <span className={classes.price}>13 400 P</span>
        <img src={testLogo} alt="aircraft logo" />
      </header>
      <div className={classes.descriptionRow}>
        <div className={classes.descriptionColumn}>
          <span className={classes.titleInfo}>MOW – HKT</span>
          <span className={classes.info}>10:45 – 08:00</span>
        </div>
        <div className={classes.descriptionColumn}>
          <span className={classes.titleInfo}>В пути</span>
          <span className={classes.info}>21ч 15м</span>
        </div>
        <div className={classes.descriptionColumn}>
          <span className={classes.titleInfo}>2 пересадки</span>
          <span className={classes.info}>HKG, JNB</span>
        </div>
      </div>
      <div className={classes.descriptionRow}>
        <div className={classes.descriptionColumn}>
          <span className={classes.titleInfo}>MOW – HKT</span>
          <span className={classes.info}>11:20 – 00:50</span>
        </div>
        <div className={classes.descriptionColumn}>
          <span className={classes.titleInfo}>В пути</span>
          <span className={classes.info}>13ч 30м</span>
        </div>
        <div className={classes.descriptionColumn}>
          <span className={classes.titleInfo}>2 пересадки</span>
          <span className={classes.info}>HKG</span>
        </div>
      </div>
    </li>
  );
}
