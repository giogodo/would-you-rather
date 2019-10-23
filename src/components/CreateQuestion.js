import React, { Component } from 'react';
import { connect } from 'react-redux';
import Panel from 'muicss/lib/react/panel';
import Divider from 'muicss/lib/react/divider';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';

const mainPanelStyle = {
  display: 'table',
  tableLayout: 'fixed',
  width: "100%",
  margin: 10,
  maxWidth: 620,
  flexDirection: 'column'
};
const headerStyle = {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  marginBottom: 10,
  padding: 10
};
const contentStyle = {
  marginTop: 10,
  padding: 10,
  display: 'flex',
  flexDirection: 'column'
};
const labelStyle = {
  marginTop: 10,
  marginBottom: 15
};
const inputStyle = {
  marginTop: 10,
  marginBottom: 15
};
const orStyle = {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  marginTop: 25
};
const buttonStyle = {
  marginTop: 25
};

class CreateQuestion extends Component {
  state = {
    optionA: '',
    optionB: ''
  }

  render() {
    return (
      <Panel style={mainPanelStyle}>
        <div style={headerStyle}>
          <div className="mui--text-display1">
            <b>Create New Question</b>
          </div>
        </div>
        <Divider />
        <div style={contentStyle}>
          <div className="mui--text-subhead" style={labelStyle}>
            Complete the question:
          </div>
          <div className="mui--text-headline" style={labelStyle}>
            <b>Would you rather ...</b>
          </div>
          <Input label="Enter Option One Text Here" floatingLabel={true} style={inputStyle} />
          <div style={orStyle}>
            <div className="mui--text-headline" >
              <b>OR</b>
            </div>
          </div>
          <Input label="Enter Option Two Text Here" floatingLabel={true} style={inputStyle} />
          <Button color="primary" style={buttonStyle}>Submit</Button>
        </div>
      </Panel>
    );
  }
}


export default CreateQuestion;