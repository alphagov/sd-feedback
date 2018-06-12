import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';

import { ratingTempReducer } from './ratingReducer';
import { surveyReducer } from './surveyReducer';
import { analystsReducer } from './analystsReducer';

const reducer = combineReducers({
  rateTemp: ratingTempReducer,
  surveys: surveyReducer,
  analysts: analystsReducer,
  form: reduxForm
});

export default reducer;
