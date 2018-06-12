import React, { Component } from 'react';
import {
  Grid,
  Header,
  Container,
  Rating,
  Form,
  Button,
  Icon
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { withRouter } from 'react-router-dom';

import { addRatingTemp, addSurvey } from '../actions/survey';
import { selectRatingTemp, selectAnalysts } from '../reducers/selectors';

// import SmileyForm from './smiley';
import AnalystSurvey from './analysts/AnalystSurvey';

const renderSurveyFields = ({
  type,
  input,
  label,
  icon,
  iconPosition,
  size,
  meta: { touched, error }
}) => (
  <Form.Input
    placeholder={label}
    error={touched && error}
    {...input}
    type={type}
    icon={icon}
    iconPosition={iconPosition}
    size={size}
  />
);

class SurveyForm extends Component {
  state = { visible: false };

  handleRate = (e, { rating }) => {
    const { addRatingTemp } = this.props;
    addRatingTemp({ rating });
  };

  submitSurvey(values) {
    const {
      rateTemp,
      addSurvey,
      history,
      addRatingTemp,
      analysts
    } = this.props;

    let analystId = '';

    if (analysts.length > 0) {
      analystId = analysts[0]._id;
    }

    const newSurvey = {
      rating: rateTemp.rating,
      surveyText: values.surveyText,
      analystId,
      surveyDate: Date.now()
    };

    addSurvey(newSurvey);
    // reset temp rating back to 3
    addRatingTemp({ rating: 3 });
    // redirect to result page
    history.push('/results');
  }

  render() {
    const { rateTemp, handleSubmit } = this.props;
    return (
      <div>
        <Grid>
          <Grid.Column>
            <Container textAlign="center">
              <Header
                as="h2"
                textAlign="center"
                style={{ marginTop: '0.5em', fontSize: '4em' }}
              >
                Who helped you today?
              </Header>
              <AnalystSurvey />
            </Container>
            <Container textAlign="center">
              <Header
                as="h2"
                textAlign="center"
                style={{ marginTop: '0.5em', fontSize: '4em' }}
              >
                How did we do?
              </Header>
              <Rating
                style={{ fontSize: '9em' }}
                maxRating={5}
                defaultRating={rateTemp.rating}
                icon="star"
                onRate={this.handleRate}
              />
            </Container>
            <Container style={{ marginTop: '2em' }}>
              <Form
                onSubmit={handleSubmit(values => this.submitSurvey(values))}
              >
                <Form.Field>
                  <Field
                    icon="comment"
                    iconPosition="left"
                    label="Tell us more..."
                    placeholder="Tell us more"
                    name="surveyText"
                    component={renderSurveyFields}
                    size="huge"
                  />
                </Form.Field>
                <Form.Field>
                  <Button
                    positive
                    type="submit"
                    floated="right"
                    color="green"
                    size="huge"
                    icon
                    labelPosition="right"
                  >
                    Finished <Icon name="checkmark" />
                  </Button>
                </Form.Field>
              </Form>
            </Container>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    rateTemp: selectRatingTemp(state),
    analysts: selectAnalysts(state)
  };
};

const mapDispatchToProps = {
  addRatingTemp,
  addSurvey
};

SurveyForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(SurveyForm);
SurveyForm = withRouter(SurveyForm);

export default reduxForm({
  form: 'surveyForm'
})(SurveyForm);
