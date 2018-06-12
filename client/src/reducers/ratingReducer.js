import { ADD_RATING_SURVEY } from '../actions/types';

const INITIAL_STATE_O = { rating: 3 };

export const ratingTempReducer = (state = INITIAL_STATE_O, action) => {
  switch (action.type) {
    case ADD_RATING_SURVEY:
      return action.payload;
    default:
      return state;
  }
};
