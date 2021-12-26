import { combineReducers } from 'redux';

const initialFilter = {
  ALL: false,
  '0_TRANS': false,
  '1_TRANS': false,
  '2_TRANS': false,
  '3_TRANS': false,
};

// eslint-disable-next-line default-param-last
function filter(filter = initialFilter, action) {
  let newFilter = { ...filter };
  let checkAllFilters;

  switch (action.type) {
    case 'CHANGE_FILTER':
      newFilter = { ...filter, [action.change]: !filter[action.change] };
      checkAllFilters = Object.values(newFilter).slice(1).includes(false);
      return { ...newFilter, ALL: !checkAllFilters };

    case 'CHANGE_FILTER_ALL':
      // eslint-disable-next-line guard-for-in
      for (const key in newFilter) {
        newFilter[key] = !filter.ALL;
      }
      return newFilter;

    default:
      return filter;
  }
}

// eslint-disable-next-line default-param-last
function sort(sort = 'CHEAP', action) {
  switch (action.type) {
    case 'CHANGE_SORT':
      return action.change;

    default:
      return sort;
  }
}

// eslint-disable-next-line default-param-last
function tickets(tickets = [], action) {
  switch (action.type) {
    case 'RECEIVE_TICKETS':
      return [...tickets, ...action.tickets];

    default:
      return tickets;
  }
}

const reducer = combineReducers({
  filter,
  sort,
  tickets,
});

export default reducer;
