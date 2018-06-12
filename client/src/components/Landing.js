import React, { Component } from 'react';
import { Container, Header, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getAnalysts } from '../actions/analyst';

class Landing extends Component {
  componentDidMount() {
    this.props.getAnalysts();
  }

  render() {
    return (
      <Container text textAlign="center">
        <Header
          as="h1"
          content="Service Desk Feedback"
          style={{
            fontSize: '4em',
            marginTop: '3em'
          }}
          textAlign="center"
        />
        <Button
          as={Link}
          to={'/survey-form'}
          primary
          size="huge"
          style={{ marginTop: '3em' }}
          icon
          labelPosition="right"
        >
          Start Feedback
          <Icon name="right arrow" />
        </Button>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  getAnalysts
};

Landing = connect(
  null,
  mapDispatchToProps
)(Landing);

export default Landing;
