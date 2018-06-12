import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';

import { Header, Feed, Rating, Image } from 'semantic-ui-react';

import { selectLastTenWithImage } from '../../reducers/selectors';

class ResultsFeed extends Component {
  renderFeedEvents() {
    const { tenResults } = this.props;
    return tenResults.map((result, key) => {
      return (
        <Feed.Event key={key}>
          <Feed.Label>
            <Image src={result.imgUrl} />
          </Feed.Label>
          <Feed.Content>
            <Feed.Summary>
              <Feed.User>
                {result.firstName} was rated &nbsp;
                <Rating
                  icon="star"
                  defaultRating={result.rating}
                  maxRating={5}
                  size="small"
                  disabled
                />
                &nbsp;
              </Feed.User>
              <Feed.Date>
                <Moment fromNow>{result.surveyDate}</Moment>
              </Feed.Date>
            </Feed.Summary>
            <Feed.Extra text>{result.surveyText}</Feed.Extra>
          </Feed.Content>
        </Feed.Event>
      );
    });
  }

  render() {
    return (
      <div>
        <Header as="h5" textAlign="center">
          Feedback Feed
        </Header>
        <Feed>{this.renderFeedEvents()}</Feed>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { tenResults: selectLastTenWithImage(state) };
};

ResultsFeed = connect(mapStateToProps)(ResultsFeed);

export default ResultsFeed;
