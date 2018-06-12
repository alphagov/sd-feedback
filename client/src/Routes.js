import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import Header from './components/Header';
import Landing from './components/Landing';
import SurveyForm from './components/surveyForm';
import SurveyResults from './components/results/surveyResults';

import AnalystManager from './components/analysts/analystManager';

const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Container style={{ marginTop: '6em' }}>
          <Route exact path="/" component={Landing} />
          <Route path="/survey-form" component={SurveyForm} />
          <Route path="/results" component={SurveyResults} />
          <Route path="/analysts/manage" component={AnalystManager} />
        </Container>
      </div>
    </BrowserRouter>
  );
};

export default Routes;
