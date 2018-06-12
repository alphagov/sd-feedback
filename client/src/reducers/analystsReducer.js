import {
  GET_ANALYSTS,
  ADD_NEW_ANALYST,
  ADD_ANALYST_IMAGE,
  FILTER_ANALYST
} from '../actions/types';

const INITIAL_STATE_A = [];

export const analystsReducer = (state = INITIAL_STATE_A, action) => {
  switch (action.type) {
    case GET_ANALYSTS:
      return action.payload;
    case ADD_NEW_ANALYST:
      return [...state, action.payload];
    case ADD_ANALYST_IMAGE:
      const updatedAnalysts = state.map(analyst => {
        if (analyst._id === action.payload.id) {
          analyst.imgUrl = action.payload.imgUrl;
        }
        return analyst;
      });
      return updatedAnalysts;
    case FILTER_ANALYST:
      return state.filter(analyst => analyst._id === action.payload);
    default:
      return state;
  }
};
