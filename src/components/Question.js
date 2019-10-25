import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Results from "./Results";
import Vote from "./Vote";
import Panel from "muicss/lib/react/panel";
import Divider from "muicss/lib/react/divider";

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
  marginBottom: 10,
  padding: 10
};
const contentStyle = {
  marginTop: 10,
  padding: 10,
  display: "flex",
  alignItems: "center"
};

class Question extends Component {
  render() {
    const { questions, users, authedUser, match } = this.props;
    const qid = match.params.id;

    if (questions[qid] === undefined) {
      return (
        // Making the redirection to the NotFound component
        <Redirect to={"/notfound"} />
      );
    }

    const authorName = users[questions[qid].author].name;
    const authorAvatar = users[questions[qid].author].avatarURL;
    const isAnsweredByAuthedUser =
      questions[qid].optionOne.votes.includes(authedUser) ||
      questions[qid].optionTwo.votes.includes(authedUser);

    return (
      <Panel style={mainPanelStyle}>
        <div style={headerStyle}>
          <div className="mui--text-headline">
            <b>{authorName} asks:</b>
          </div>
        </div>
        <Divider />
        <div style={contentStyle}>
          <img
            src={authorAvatar}
            alt={"Avatar"}
            height="180"
            width="180"
            style={{
              marginTop: 25,
              marginBottom: 25,
              marginRight: 25,
              borderRadius: 10
            }}
          />
          <div
            style={{
              flex: 1
            }}
          >
            {isAnsweredByAuthedUser ? (
              <Results qid={qid} />
            ) : (
              <Vote qid={qid} />
            )}
          </div>
        </div>
      </Panel>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }, props) {
  return {
    questions,
    users,
    authedUser,
    ...props
  };
}

export default connect(mapStateToProps)(Question);
