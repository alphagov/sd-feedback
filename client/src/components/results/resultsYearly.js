import React, { Component } from 'react';

import { Header, Card } from 'semantic-ui-react';

class ResultsYearly extends Component {
  render() {
    return (
      <Card raised>
        <Card.Content>
          <Header as="h5">Yearly Results</Header>
        </Card.Content>
      </Card>
    );
  }
}

export default ResultsYearly;
