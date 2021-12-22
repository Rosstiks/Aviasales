const initialState = {
  filter: {
    ALL: false,
    '0_TRANS': false,
    '1_TRANS': false,
    '2_TRANS': false,
    '3_TRANS': false,
  },
  sort: 'CHEAP',
};

function filterReducer(filter, change) {
  let newFilter = { ...filter };
  let checkAllFilters;

  switch (change) {
    case 'ALL':
      // eslint-disable-next-line guard-for-in
      for (const key in newFilter) {
        newFilter[key] = !filter.ALL;
      }
      return newFilter;

    case '0_TRANS':
    case '1_TRANS':
    case '2_TRANS':
    case '3_TRANS':
      newFilter = { ...filter, [change]: !filter[change] };
      checkAllFilters = Object.values(newFilter).slice(1).includes(false);
      return { ...newFilter, ALL: !checkAllFilters };

    default:
      return filter;
  }
}

// eslint-disable-next-line default-param-last
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return { ...state, filter: filterReducer(state.filter, action.change) };

    case 'CHANGE_SORT':
      return action.change ? { ...state, sort: action.change } : state;

    default:
      return state;
  }
}
