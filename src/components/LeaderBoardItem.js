import React, { Component } from "react";
import Panel from "muicss/lib/react/panel";

class LeaderBoardItem extends Component {
  render() {
    const { user } = this.props;
    return (
      <Panel
        style={{
          display: "flex",
          marginBottom: 15,
          marginTop: 15,
          alignItems: "center"
        }}
      >
        <div style={{}}>
          <img
            src={user.avatar}
            alt={`Avatar of ${user.name}`}
            height="120"
            width="120"
            style={{borderRadius: 8}}
          />
        </div>
        <div
          style={{
            flex: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <div className="mui--text-headline" style={{padding: 8}}>
            <b>{user.name}</b>
          </div>
          <div className="mui--text-subhead" style={{padding: 8}}>
            Answered questions: {user.questionsAnswered}
          </div>
          <div className="mui--text-subhead" style={{padding: 8}}>
            Created questions: {user.questionsAsked}
          </div>
        </div>
        <Panel
          style={{
            flex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 0,
            padding: 20
          }}
        >
          <div className="mui--text-subhead">
            <b>Score</b>
          </div>
          <div
            className="mui--text-display2"
            style={{
              backgroundColor: "#2196f4",
              height: 65,
              width: 65,
              borderRadius: 40,
              marginTop: 15,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: 'white'
            }}
          >
            <b>{user.score}</b>
          </div>
        </Panel>
      </Panel>
    );
  }
}

export default LeaderBoardItem;
