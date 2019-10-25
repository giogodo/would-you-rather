import React, { Component } from "react";
import { connect } from "react-redux";
import Panel from "muicss/lib/react/panel";

const mainPanelStyle = {
  display: "table",
  tableLayout: "fixed",
  width: "100%",
  margin: 10,
  paddingTop: 30,
  maxWidth: 620,
  flexDirection: "column"
};

class LeaderBoard extends Component {
  render() {
    const { users } = this.props;
    return (
      <Panel style={mainPanelStyle}>
        {Object.values(users).map(user => (
          <Panel key={user.id}>{user.name}</Panel>
        ))}
      </Panel>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users
  };
}

export default connect(mapStateToProps)(LeaderBoard);
