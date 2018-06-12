import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Header, Card, Image } from 'semantic-ui-react';

import { selectAnalysts } from '../../reducers/selectors';
import { getAnalysts } from '../../actions/analyst';

class Analysts extends Component {
  componentDidMount() {
    this.props.getAnalysts();
  }

  renderAnalysts() {
    const { analysts } = this.props;
    return analysts.map(analyst => {
      return (
        <Card key={analyst._id}>
          <Image src={analyst.imgUrl} />
          <Card.Content>
            <Card.Header>{analyst.firstName}</Card.Header>
          </Card.Content>
        </Card>
      );
    });
  }

  render() {
    return (
      <div>
        <Header as="h3" textAlign="center">
          Analysts
        </Header>
        <Card.Group>{this.renderAnalysts()}</Card.Group>
      </div>
    );
  }
}

const mapDispatchToProps = {
  getAnalysts
};

const mapStateToProps = state => {
  return {
    analysts: selectAnalysts(state)
  };
};

Analysts = connect(
  mapStateToProps,
  mapDispatchToProps
)(Analysts);

export default Analysts;
