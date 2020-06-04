import { FETCH_REQUEST, FETCH_REQUEST_SUCCESS, FETCH_REQUEST_FAILURE } from '../actions/index';

const loaderReducer = (state = { loading: false, errors: '' }, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        loading: true,
        errors: [],
      };
    case FETCH_REQUEST_SUCCESS:
      return {
        loading: false,
        errors: [],
      };
    case FETCH_REQUEST_FAILURE:
      return {
        loading: false,
        errors: action.response,
      };
    default:
      return state;
  }
};

export default loaderReducer;
