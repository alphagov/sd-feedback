import React, { Component } from 'react';
import { Icon, Header, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { selectRatingTemp } from '../reducers/selectors';

class SmileyForm extends Component {
  render() {
    const { rateTemp } = this.props;
    return (
      <Container>
        {rateTemp.rating < 3 && (
          <Header as="h3" textAlign="center">
            <Icon
              name="frown"
              style={{ fontSize: '5em', marginTop: '1em' }}
              color="blue"
            />
          </Header>
        )}
        {rateTemp.rating === 3 && (
          <Header as="h3" textAlign="center">
            <Icon
              name="meh"
              style={{ fontSize: '5em', marginTop: '1em' }}
              color="green"
            />
          </Header>
        )}
        {rateTemp.rating > 3 && (
          <Header as="h3" textAlign="center">
            <Icon
              name="smile"
              style={{ fontSize: '5em', marginTop: '1em' }}
              color="yellow"
            />
          </Header>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return { rateTemp: selectRatingTemp(state) };
};

SmileyForm = connect(mapStateToProps)(SmileyForm);

export default SmileyForm;
