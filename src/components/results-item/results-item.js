import React from 'react';
import PropTypes from 'prop-types';
import classes from './results-item.module.css';
import ItemBody from '../item-body';

export default function ResultsItem({ price, carrier, segments }) {
  const carrierLogoURL = `https://pics.avs.io/99/36/${carrier}.png`;

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
    <li className={classes.container} tabIndex="0">
      <header className={classes.header}>
        <span className={classes.price}>{price} P</span>
        <img src={carrierLogoURL} alt="aircraft logo" />
      </header>
      <ItemBody {...segments[0]} />
      <ItemBody {...segments[1]} />
    </li>
  );
}

ResultsItem.propTypes = {
  price: PropTypes.number.isRequired,
  carrier: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  segments: PropTypes.array.isRequired,
};
