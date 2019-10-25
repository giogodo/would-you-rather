import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

// Adaptation from Tyler McGinnis publication: https://tylermcginnis.com/react-router-protected-routes-authentication/
class PrivateRoute extends Component { 
  render() {
    const { component: Component, authedUser, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props =>
          authedUser ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }
}

function mapStateToProps({ authedUser }, props) {
  return {
    authedUser,
    ...props
  };
}

export default connect(mapStateToProps)(PrivateRoute);
