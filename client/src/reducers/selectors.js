import { createSelector } from 'reselect';
import _ from 'lodash';

export const selectRatingTemp = state => state.rateTemp;

export const selectSurveyResults = state => state.surveys;

export const selectAnalysts = state => state.analysts;

export const selectLastTenResults = createSelector(
  selectSurveyResults,
  results => {
    return _.reverse(_.takeRight(results, 10));
  }
);

export const selectLastTenWithImage = createSelector(
  selectLastTenResults,
  selectAnalysts,
  (tenResults, analysts) => {
    const filterList = tenResults.filter(result =>
      _.includes(_.map(analysts, '_id'), result.analystId._id)
    );
    return _.map(filterList, obj => {
      return _.assign(obj, _.find(analysts, { _id: obj.analystId._id }));
    });
  }
);
