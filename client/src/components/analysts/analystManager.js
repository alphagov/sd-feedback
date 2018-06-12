import React, { Component } from 'react';

import { Grid, Header } from 'semantic-ui-react';

import AnalystAdd from './analystAdd';
import Analysts from './analysts';

class AnalystManager extends Component {
  render() {
    return (
      <div>
        <Header as="h2" textAlign="center">
          Analyst Manager
        </Header>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <AnalystAdd />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Analysts />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default AnalystManager;
