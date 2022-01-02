import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes, { bool } from 'prop-types';
import { Alert } from 'antd';
import BeatLoader from 'react-spinners/BeatLoader';
import ResultsItem from '../results-item';
import classes from './results-list.module.css';

function ResultsList({ tickets, filter, sort }) {
  const [displayTickets, setDisplayTickets] = useState(5);

  const filteredList = tickets.filter((ticket) => {
    const stopsThere = ticket.segments[0].stops.length;
    const stopsBack = ticket.segments[1].stops.length;
    if (filter.ALL) return true;
    if (filter['0_TRANS'] && (stopsThere === 0 || stopsBack === 0)) return true;
    if (filter['1_TRANS'] && (stopsThere === 1 || stopsBack === 1)) return true;
    if (filter['2_TRANS'] && (stopsThere === 2 || stopsBack === 2)) return true;
    if (filter['3_TRANS'] && (stopsThere === 3 || stopsBack === 3)) return true;
    return false;
  });

  filteredList.sort((prev, next) => {
    const timePrev = prev.segments[0].duration + prev.segments[1].duration;
    const timeNext = next.segments[0].duration + next.segments[1].duration;
    const stopsPrev = prev.segments[0].stops.length + prev.segments[1].stops.length;
    const stopsNext = next.segments[0].stops.length + next.segments[1].stops.length;
    if (sort === 'FAST') return timePrev - timeNext;
    if (sort === 'OPTIMAL') return stopsPrev - stopsNext;
    return prev.price - next.price;
  });

  const ticketsList = filteredList
    .slice(0, displayTickets)
    .map((ticket) => <ResultsItem key={ticket.id} {...ticket} />);

  if (!tickets.length) {
    return (
      <div className={classes.spinnerContainer}>
        <BeatLoader color="#2196f3" size={30} />
      </div>
    );
  }

  if (!ticketsList.length) {
    return (
      <div className={classes.alertContainer}>
        <Alert message="Рейсов, подходящих под заданные фильтры, не найдено" type="info" showIcon />
      </div>
    );
  }

  const buttonMore = (
    <button className={classes.buttonMore} onClick={() => setDisplayTickets((tickets) => tickets + 5)} type="button">
      Показать ещё 5 билетов!
    </button>
  );

  const showButtonMore = ticketsList.length < filteredList.length && filteredList.length ? buttonMore : null;

  return (
    <>
      <ul className={classes.list}>{ticketsList}</ul>
      {showButtonMore}
    </>
  );
}

ResultsList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  tickets: PropTypes.array.isRequired,
  filter: PropTypes.objectOf(bool).isRequired,
  sort: PropTypes.string.isRequired,
};

const mapStateToProps = (store) => ({
  tickets: store.tickets.items,
  filter: store.filter,
  sort: store.sort,
});

export default connect(mapStateToProps)(ResultsList);
