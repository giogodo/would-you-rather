import React, { Component } from 'react';
//import { connect } from 'react-redux';
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
  alignItems: 'center',
  marginBottom: 10,
  padding: 10,
  flexDirection: 'column'
};
const contentStyle = {
  alignItems: 'center',
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
  marginTop: 25,
  alignSelf: 'stretch'
};

class Login extends Component {
  state = {
    optionA: '',
    optionB: ''
  }

  render() {
    return (
      <Panel style={mainPanelStyle}>
        <div style={headerStyle}>
          <div className="mui--text-headline">
            <b>Welcome to the Would You Rather App!</b>
          </div>
          <div className="mui--text-subhead">
            <b>Please sign in to continue</b>
          </div>
        </div>
        <Divider />
        <div style={contentStyle}>
        <img
              src={"https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png"}
              alt={'Redux'}
              height="244"
              width="312"
              style={{}}
            />
          <Button color="primary" style={buttonStyle}>Sign in</Button>
        </div>
      </Panel>
    );
  }
}


export default Login;