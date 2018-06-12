import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Grid, Button, Header, Image, Form } from 'semantic-ui-react';

import { addNewAnalyst } from '../../actions/analyst';

class AnalystAdd extends Component {
  state = {
    selectedFile: null,
    selectedFileUrl: null,
    analystName: ''
  };

  nameChangedHandler = event => {
    this.setState({ analystName: event.target.value });
  };

  fileChangedHandler = event => {
    let reader = new FileReader();
    reader.onload = e => {
      this.setState({ selectedFileUrl: e.target.result });
    };
    reader.readAsDataURL(event.target.files[0]);
    this.setState({ selectedFile: event.target.files[0] });
  };

  submitAnalyst = event => {
    const { addNewAnalyst } = this.props;
    const newAnal = {
      analystImage: this.state.selectedFile,
      analystName: this.state.analystName
    };
    addNewAnalyst(newAnal);

    event.preventDefault();
  };

  render() {
    return (
      <div>
        <Header as="h3" textAlign="center">
          Add an Analyst
        </Header>
        <Grid columns={2}>
          <Grid.Column>
            {this.state.selectedFile && (
              <Image
                src={this.state.selectedFileUrl}
                alt="No image selected"
                fluid
                centered
                rounded
              />
            )}
          </Grid.Column>
          <Grid.Column>
            <Form onSubmit={this.submitAnalyst}>
              <Form.Group>
                <Form.Field>
                  <Form.Input
                    icon="user"
                    iconPosition="left"
                    label="Analyst name"
                    placeholder="Analyst name"
                    name="AnalystName"
                    type="text"
                    value={this.state.analystName}
                    onChange={this.nameChangedHandler}
                  />
                </Form.Field>
                <Form.Field>
                  <Form.Input
                    icon="star"
                    iconPosition="left"
                    label="Analyst image...."
                    placeholder="Analyst image"
                    name="AnalystImage"
                    type="file"
                    onChange={this.fileChangedHandler}
                  />
                </Form.Field>
                <Button type="submit">Submit</Button>
              </Form.Group>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addNewAnalyst
};

AnalystAdd = connect(
  null,
  mapDispatchToProps
)(AnalystAdd);

export default AnalystAdd;
