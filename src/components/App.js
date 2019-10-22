import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import PollList from './PollList'

const appContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div style={appContainerStyle}>
        {this.props.loading === true
          ? null
          : <PollList />}
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  };
}

export default connect(mapStateToProps)(App);
