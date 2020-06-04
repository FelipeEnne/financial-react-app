import axios from 'axios';

const URL = 'https://financialmodelingprep.com/api/v3/';
const { API_KEY } = process.env;
const API_MAJOR_INDEXES = 'quotes/index?apikey=';

const FETCH_REQUEST = 'FETCH_REQUEST';
const FETCH_REQUEST_SUCCESS = 'FETCH_REQUEST_SUCCESS';
const FETCH_REQUEST_FAILURE = 'FETCH_REQUEST_FAILURE';


const fetchRequest = () => ({
  type: FETCH_REQUEST,
});

const fetchRequestSuccess = response => ({
  type: FETCH_REQUEST_SUCCESS,
  response,
});

const fetchRequestFailure = (response, error = '') => ({
  type: FETCH_REQUEST_FAILURE,
  response,
  error,
});

const fetchMajorIndexes = (name, price) => ({
  type: API_MAJOR_INDEXES,
  response: name,
  price,
});


const fetchMajorIndexesAPI = () => dispatch => {
  dispatch(fetchRequest());

  axios.get(`${URL}${API_MAJOR_INDEXES}${API_KEY}$`)
    .then(response => {
      dispatch(fetchRequestSuccess(response));
      dispatch(fetchMajorIndexes(response.name, response.price));
    })
    .catch(error => {
      dispatch(fetchRequestFailure(error));
    });
};

export {
  fetchMajorIndexesAPI, FETCH_REQUEST, FETCH_REQUEST_SUCCESS, FETCH_REQUEST_FAILURE,
};
