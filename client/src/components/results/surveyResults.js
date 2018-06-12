import React, { Component } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';

import { Grid, Header, Icon } from 'semantic-ui-react';

import ResultsFeed from './ResultsFeed';
// import ResultsWeekly from './resultsWeekly';
// import ResultsMonthly from './resultsMonthly';
// import ResultsYearly from './resultsYearly';

import { getSurveyResults, listenForUpdates } from '../../actions/survey';

import { getAnalysts } from '../../actions/analyst';
// import { selectAnalysts } from '../../reducers/selectors';

let socket;

class SurveyResults extends Component {
  constructor(props) {
    super(props);
    socket = io.connect('http://localhost:5060');
  }

  componentDidMount() {
    const { getSurveyResults, listenForUpdates, getAnalysts } = this.props;
    getSurveyResults();
    getAnalysts();
    socket.on('NewFeedback', data => listenForUpdates(data, socket.id));
  }

  componentWillUnmount() {
    socket.disconnect();
  }

  render() {
    return (
      <div>
        <Header as="h2" textAlign="center">
          <Icon name="pie chart" />
          Feedback Results
        </Header>
        <Grid colums={3}>
          <Grid.Column>
            <ResultsFeed />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mapDispatchToProps = {
  getSurveyResults,
  listenForUpdates,
  getAnalysts
};

SurveyResults = connect(
  null,
  mapDispatchToProps
)(SurveyResults);

export default SurveyResults;
