import { GET_SURVEY_RESULTS, ADD_NEW_SURVEY } from '../actions/types';

const INITIAL_STATE_A = [];

export const surveyReducer = (state = INITIAL_STATE_A, action) => {
  switch (action.type) {
    case GET_SURVEY_RESULTS:
      return action.payload;
    case ADD_NEW_SURVEY:
      return [...state, action.payload];
    default:
      return state;
  }
};
