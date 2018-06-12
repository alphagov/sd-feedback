import {
  ADD_NEW_ANALYST,
  GET_ANALYSTS,
  ADD_ANALYST_IMAGE,
  FILTER_ANALYST
} from './types';
import axios from 'axios';

export const addNewAnalyst = analyst => async dispatch => {
  const formData = new FormData();
  formData.append('analystName', analyst.analystName);
  formData.append('analystImage', analyst.analystImage);
  const res = await axios.post('/api/sdsurvey/analysts', formData);
  console.log(res.data);
  // add analyst to redux
  dispatch({ type: ADD_NEW_ANALYST, payload: res.data });
  // clear state
  // get analyst image
  dispatch(getAnalystImage(res.data._id, res.data.analystImage));
};

export const getAnalysts = () => async dispatch => {
  const res = await axios.get('/api/sdsurvey/analysts');
  //   add analysts to redux then get their images
  dispatch({ type: GET_ANALYSTS, payload: res.data });
  //   loop through each one and get their id and imageid
  res.data.forEach(analyst => {
    dispatch(getAnalystImage(analyst._id, analyst.analystImage._id));
  });
};

export const getAnalystImage = (analystId, imageId) => async dispatch => {
  const res = await axios.get(`/api/sdsurvey/analysts/image/${imageId}`, {
    responseType: 'arraybuffer'
  });
  const imgFile = new Blob([res.data]);
  const imgUrl = URL.createObjectURL(imgFile);
  // add this to analyst in redux
  const payload = {
    id: analystId,
    imgUrl
  };
  dispatch({ type: ADD_ANALYST_IMAGE, payload });
};

export const filterAnalyst = id => dispatch => {
  dispatch({ type: FILTER_ANALYST, payload: id });
};
