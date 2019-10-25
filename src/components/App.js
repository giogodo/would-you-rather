import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import LoadingBar from "react-redux-loading";
import NavBar from "./NavBar";
import PrivateRoute from "./PrivateRoute";
import PollList from "./PollList";
import Login from "./Login";
import CreateQuestion from "./CreateQuestion";
import NotFound from "./NotFound";
import Question from "./Question";
import LeaderBoard from "./LeaderBoard";

const mainContainerStyle = {
  marginTop: 10,
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};
const loadingBarStyle = {
  backgroundColor: "#F44336",
  height: "5px"
};

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <LoadingBar style={loadingBarStyle} />
        {this.props.loading === true ? null : (
          <Fragment>
            <NavBar />
            <div style={mainContainerStyle}>
              <Switch>
                <PrivateRoute path="/" exact component={PollList} />
                <PrivateRoute path="/add" component={CreateQuestion} />
                <PrivateRoute path="/leaderboard" component={LeaderBoard}/>
                <PrivateRoute path="/questions/:id" component={Question}/>
                <Route path="/login" component={Login} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </Fragment>
        )}
      </Router>
    );
  }
}

function mapStateToProps({ authedUser, loadingBar }) {
  const loading = loadingBar.default !== 0;
  return {
    loading
  };
}

export default connect(mapStateToProps)(App);
