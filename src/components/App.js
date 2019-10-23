import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import LoadingBar from 'react-redux-loading';
import PollList from './PollList';
import CreateQuestion from './CreateQuestion';

const mainContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};
const loadingBarStyle = {
  backgroundColor: '#2196F3',
  height: '5px'
}

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div>
        <LoadingBar style={loadingBarStyle}/>
        <div style={mainContainerStyle}>
          {this.props.loading === true
            ? null
            : <CreateQuestion />}
        </div>
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
