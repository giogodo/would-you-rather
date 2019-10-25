import React, { Component } from "react";
import Panel from "muicss/lib/react/panel";

const mainPanelStyle = {
  display: "flex",
  marginBottom: 15,
  marginTop: 15,
  alignItems: "center"
};
const imageStyle = { borderRadius: 8 };
const centerContainer = {
  flex: 5,
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};
const labelStyle = { padding: 8 };
const rightContainer = {
  flex: 2,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: 0,
  padding: 20
};
const scoreStyle = {
  backgroundColor: "#2196f4",
  height: 65,
  width: 65,
  borderRadius: 40,
  marginTop: 15,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "white"
};

class LeaderBoardItem extends Component {
  render() {
    const { user } = this.props;
    return (
      <Panel style={mainPanelStyle}>
        <div>
          <img
            src={user.avatar}
            alt={`Avatar of ${user.name}`}
            height="120"
            width="120"
            style={imageStyle}
          />
        </div>
        <div style={centerContainer}>
          <div className="mui--text-headline" style={labelStyle}>
            <b>{user.name}</b>
          </div>
          <div className="mui--text-subhead" style={labelStyle}>
            Answered questions: {user.questionsAnswered}
          </div>
          <div className="mui--text-subhead" style={labelStyle}>
            Created questions: {user.questionsAsked}
          </div>
        </div>
        <Panel style={rightContainer}>
          <div className="mui--text-subhead">
            <b>Score</b>
          </div>
          <div className="mui--text-display2" style={scoreStyle}>
            <b>{user.score}</b>
          </div>
        </Panel>
      </Panel>
    );
  }
}

export default LeaderBoardItem;
