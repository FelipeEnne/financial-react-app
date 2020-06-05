import { FETCH_MAJOR_INDEXES } from '../actions/index';

const majorIndexesReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_MAJOR_INDEXES:
      return {
        results: [...action.response.results],
      };
    default:
      return state;
  }
};

export default majorIndexesReducer;
