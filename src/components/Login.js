import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";
import Panel from "muicss/lib/react/panel";
import Divider from "muicss/lib/react/divider";
import Dropdown from "muicss/lib/react/dropdown";
import DropdownItem from "muicss/lib/react/dropdown-item";
import Button from "muicss/lib/react/button";

const mainPanelStyle = {
  display: "table",
  tableLayout: "fixed",
  width: "100%",
  margin: 10,
  maxWidth: 620,
  flexDirection: "column"
};
const headerStyle = {
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 10,
  padding: 10,
  flexDirection: "column"
};
const contentStyle = {
  alignItems: "center",
  marginTop: 10,
  padding: 10,
  display: "flex",
  flexDirection: "column"
};
const buttonStyle = {
  marginTop: 25,
  width: 200
};
const dropdownStyle = {
  paddingTop: 30
};
const dropdownItemStyle = {
  width: 434,
  display: "flex",
  alignItems: "center",
  pointerEvents: "none"
};
const avatarStyle = {
  borderRadius: 5,
  marginTop: 10,
  marginBottom: 10,
  marginRight: 25
};

class Login extends Component {
  state = {
    selectedUser: null,
    redirect: false
  };

  handleOnSelect = selectedUser => {
    this.setState(() => ({
      selectedUser
    }));
  };

  handleSignIn = () => {
    const { dispatch } = this.props;
    const { selectedUser } = this.state;
    dispatch(setAuthedUser(selectedUser));
    this.setState(() => ({
      redirect: true
    }));
  };

  render() {
    const { selectedUser, redirect } = this.state;
    const { users, history } = this.props;
    const reduxLogo =
      "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png";
    if (redirect === true) {
      return (
        // Making the redirection to the previusly pretended route
        <Redirect
          to={
            (history.location.state && history.location.state.from.pathname) ||
            "/"
          }
        />
      );
    }
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
          <img src={reduxLogo} alt={"Redux"} height="244" width="312" />
          <Dropdown
            variant="raised"
            onSelect={this.handleOnSelect}
            style={dropdownStyle}
            label={
              selectedUser ||
              "Select an user from the list... And press sign in."
            }
          >
            {Object.values(users).map(user => (
              <DropdownItem key={user.id} id={user.id} value={user.id}>
                <div style={dropdownItemStyle}>
                  <img
                    src={user.avatarURL}
                    alt={`Avatar of ${user.name}`}
                    height="56"
                    width="56"
                    style={avatarStyle}
                  />
                  <div className="mui--text-subhead">{user.name}</div>
                </div>
              </DropdownItem>
            ))}
          </Dropdown>
          <Button
            color="primary"
            style={buttonStyle}
            disabled={!selectedUser}
            onClick={this.handleSignIn}
          >
            Sign in
          </Button>
        </div>
      </Panel>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users
  };
}

export default withRouter(connect(mapStateToProps)(Login));
