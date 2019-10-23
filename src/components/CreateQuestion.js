import React, { Component } from 'react';
import { connect } from 'react-redux';
import Panel from 'muicss/lib/react/panel';
import Divider from 'muicss/lib/react/divider';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';

const mainPanelStyle = {
  margin: 10,
  width: 620,
  display: 'flex',
  flexDirection: 'column'
};
const headerStyle = {
  marginBottom: 10
};
const contentStyle = {
  marginTop: 10,
  padding: 10,
  display: 'flex',
  flexDirection: 'column'
};

class CreateQuestion extends Component {
  render() {
    return (
      <Panel style={mainPanelStyle}>
        <div style={headerStyle}>
          <div className="mui--text-headline">
            Create New Question
          </div>
        </div>
        <Divider />
        <div style={contentStyle}>
          <div className="mui--text-subhead">
            Complete the question:
          </div>
          <div className="mui--text-headline">
            Would you rather ...
          </div>
          <Input label="Input 1" floatingLabel={true} style={{
            marginTop: 15,
            marginBottom: 25
          }} />
          <div className="mui--text-subhead">
            OR
          </div>
          <Input label="Input 1" floatingLabel={true} style={{
            marginTop: 15,
            marginBottom: 25
          }} />
          <Button color="primary">Submit</Button>
        </div>
      </Panel>
    );
  }
}


export default CreateQuestion;