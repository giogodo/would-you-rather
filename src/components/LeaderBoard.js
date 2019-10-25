import React, { Component } from "react";
import { connect } from "react-redux";
import Panel from "muicss/lib/react/panel";
import LeaderBoardItem from "./LeaderBoardItem";

const mainPanelStyle = {
  display: "table",
  tableLayout: "fixed",
  width: "100%",
  margin: 10,
  paddingTop: 0,
  paddingBottom: 0,
  maxWidth: 620,
  flexDirection: "column"
};

class LeaderBoard extends Component {
  render() {
    const { users } = this.props;
    const usersByScores = Object.values(users)
      .map(user => ({
        name: user.name,
        avatar: user.avatarURL,
        questionsAsked: user.questions.length,
        questionsAnswered: Object.keys(user.answers).length,
        score: user.questions.length + Object.keys(user.answers).length
      }))
      .sort((a, b) => b.score - a.score);
    return (
      <Panel style={mainPanelStyle}>
        {usersByScores.map((user, i) => (
          <LeaderBoardItem key={i} user={user} />
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
