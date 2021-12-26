import ApiService from './services/api-service';

const apiService = new ApiService();

export const changeFilter = (change) => ({ type: 'CHANGE_FILTER', change });
export const changeFilterAll = () => ({ type: 'CHANGE_FILTER_ALL' });
export const changeSort = (change) => ({ type: 'CHANGE_SORT', change });
const receiveTickets = (tickets) => ({ type: 'RECEIVE_TICKETS', tickets });
export const fetchTickets = () => (dispatch) => (
  apiService.getSearchId()
    .then(id => apiService.getTicketsPack(id))
    .then(data => dispatch(receiveTickets(data.tickets)))
);
