import { ADD_RATING_SURVEY, GET_SURVEY_RESULTS } from './types';
import axios from 'axios';

export const addRatingTemp = rating => dispatch => {
  dispatch({ type: ADD_RATING_SURVEY, payload: rating });
};

export const getSurveyResults = () => async dispatch => {
  const res = await axios.get('/api/sdsurvey/results');
  dispatch({ type: GET_SURVEY_RESULTS, payload: res.data });
};

export const addSurvey = survey => async dispatch => {
  const res = await axios.post('/api/sdsurvey', { survey });
  if (res.status !== 200) {
    console.log(res.data);
  }
};

export const listenForUpdates = (data, id) => async dispatch => {
  // need to change this around a bit ADD_NEW_SURVEY
  dispatch(getSurveyResults());
};
