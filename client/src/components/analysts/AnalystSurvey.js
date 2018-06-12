import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Image } from 'semantic-ui-react';

import { selectAnalysts } from '../../reducers/selectors';
import { filterAnalyst } from '../../actions/analyst';

class AnalystSurvey extends Component {
  pickAnalyst = event => {
    // console.log(event.target.alt);
    // filter out the other analysts?
    // rather than creating a temp one?
    this.props.filterAnalyst(event.target.alt);
  };

  renderAnalysts() {
    const { analysts } = this.props;
    return analysts.map(analyst => {
      return (
        <Image
          key={analyst._id}
          src={analyst.imgUrl}
          size="small"
          circular
          alt={analyst._id}
          as="a"
          label={analyst.firstName}
          href="#"
          value={analyst._id}
          onClick={this.pickAnalyst}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <Image.Group>{this.renderAnalysts()}</Image.Group>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    analysts: selectAnalysts(state)
  };
};

const mapDispatchToProps = { filterAnalyst };

AnalystSurvey = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnalystSurvey);

export default AnalystSurvey;
