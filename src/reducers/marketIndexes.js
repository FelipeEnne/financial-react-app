import { FETCH_MAJOR_INDEXES } from '../actions/index';

const majorIndexesReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_MAJOR_INDEXES:
      return [...action.response];
    default:
      return state;
  }
};

export default majorIndexesReducer;
