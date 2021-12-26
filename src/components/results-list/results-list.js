import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ResultsItem from '../results-item';
import classes from './results-list.module.css';

function ResultsList({ tickets }) {
  const ticketsList = tickets.map((ticket) => <ResultsItem key={ticket.id} {...ticket} />);

  return (
    <>
      <ul className={classes.list}>{ticketsList}</ul>
      <button className={classes.buttonMore} type="button">
        Показать ещё 5 билетов!
      </button>
    </>
  );
}

ResultsList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  tickets: PropTypes.array.isRequired,
};

const mapStateToProps = (store) => ({
  tickets: store.tickets,
});

export default connect(mapStateToProps)(ResultsList);
