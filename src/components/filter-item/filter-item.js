import React from 'react';
import PropTypes from 'prop-types';
import classes from './filter-item.module.css';

export default function FilterItem({ title }) {
  return (
    <li className={classes.container}>
      <label className={classes.filterItem}>
        <div className={classes.contentContainer}>
          <input className={classes.checkInput} type="checkbox" />
          <span className={classes.checkBox} />
          {title}
        </div>
      </label>
    </li>
  );
}

FilterItem.propTypes = {
  title: PropTypes.string.isRequired,
};
