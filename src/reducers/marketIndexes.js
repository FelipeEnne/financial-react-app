import { FETCH_MAJOR_INDEXES } from '../actions/index';

const majorIndexesReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_MAJOR_INDEXES:
      return {
        name: action.response.name,
        price: action.response.price,
        changesPercentage: action.response.changesPercentage,
        change: action.response.change,
      };
    default:
      return state;
  }
};

export default majorIndexesReducer;
