import React, { Component } from 'react';

import { Header, Card } from 'semantic-ui-react';

class ResultsWeekly extends Component {
  render() {
    return (
      <Card raised>
        <Card.Content>
          <Header as="h5">Weekly Results</Header>
        </Card.Content>
      </Card>
    );
  }
}

export default ResultsWeekly;
