import React, { Component } from 'react';

import { Header, Card } from 'semantic-ui-react';

class ResultsMonthly extends Component {
  render() {
    return (
      <Card raised>
        <Card.Content>
          <Header as="h5">Monthly Results</Header>
        </Card.Content>
      </Card>
    );
  }
}

export default ResultsMonthly;
