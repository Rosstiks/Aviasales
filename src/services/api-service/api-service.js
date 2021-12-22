export default class ApiService {
  getSearchId = async () => {
    const response = await fetch('https://front-test.beta.aviasales.ru/search');
    const data = await response.json();
    return data.searchId;
  };

  getTicketsPack = async (searchId) => {
    const response = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`);
    const data = await response.json();
    return data;
  };
}
