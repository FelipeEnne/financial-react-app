// import axios from 'axios';
import list from '../initData';

/* const URL = 'https://financialmodelingprep.com/api/v3/';


const KEY = process.env.REACT_APP_API_KEY;
const API_GET_MAJOR_INDEXES = 'quotes/index?apikey='; */

const FETCH_REQUEST = 'FETCH_REQUEST';
const FETCH_REQUEST_SUCCESS = 'FETCH_REQUEST_SUCCESS';
const FETCH_REQUEST_FAILURE = 'FETCH_REQUEST_FAILURE';
const FETCH_MAJOR_INDEXES = 'FETCH_MAJOR_INDEXES';


const fetchRequest = () => ({
  type: FETCH_REQUEST,
});

const fetchRequestSuccess = response => ({
  type: FETCH_REQUEST_SUCCESS,
  response,
});

/* const fetchRequestFailure = (response, error = '') => ({
  type: FETCH_REQUEST_FAILURE,
  response,
  error,
}); */


const fetchMajorIndexesAPI = () => dispatch => {
  dispatch(fetchRequest());

  /* axios.get(`${URL}${API_GET_MAJOR_INDEXES}${KEY}`)
    .then(response => {
      console.log(response.data);
      dispatch(fetchRequestSuccess(response.data));
    })
    .catch(error => {
      dispatch(fetchRequestFailure(error));
    }); */

  dispatch(fetchRequestSuccess(list));
};


export {
  fetchMajorIndexesAPI,
  fetchRequestSuccess,
  FETCH_REQUEST,
  FETCH_REQUEST_SUCCESS,
  FETCH_REQUEST_FAILURE,
  FETCH_MAJOR_INDEXES,
};
