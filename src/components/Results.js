import React, { Component } from "react";
import { connect } from "react-redux";
import Panel from "muicss/lib/react/panel";
import Divider from "muicss/lib/react/divider";

const titleStyle = {
  marginTop: 20,
  marginBottom: 20
};
const panelStyle = {
  position: "relative",
  marginBottom: 25,
  padding: 28,
  height: 120,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around"
};
const votedPanelStyle = {
  backgroundColor: "#ffeb002e",
  boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08)"
};
const yourVoteStyle = {
  position: "absolute",
  backgroundColor: "orange",
  height: 50,
  width: 50,
  borderRadius: 25,
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  color: "white",
  right: -23,
  top: -20,
  transform: "rotate(30deg)",
  boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08)"
};
const questionContainer = {
  flex: 1,
  display: "flex",
  alignItems: "center"
};
const stadisticsContainer = {
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around"
};

class Result extends Component {
  render() {
    const { authedUserVote, optionOneData, optionTwoData } = this.props;
    return (
      <div>
        <div className="mui--text-display1" style={titleStyle}>
          <b>Results:</b>
        </div>
        <Panel
          style={
            authedUserVote === "One"
              ? { ...panelStyle, ...votedPanelStyle }
              : panelStyle
          }
        >
          {authedUserVote === "One" && (
            <div style={yourVoteStyle}>
              <b>
                Your
                <br />
                Vote
              </b>
            </div>
          )}
          <div style={questionContainer}>
            <div className="mui--text-subhead">{optionOneData.text}</div>
          </div>
          <Divider />
          <div style={stadisticsContainer}>
            <div className="mui--text-subhead">
              {(optionOneData.votes /
                (optionOneData.votes + optionTwoData.votes)) *
                100} %
            </div>
            <div className="mui--text-subhead">
              {optionOneData.votes} out of{" "}
              {optionOneData.votes + optionTwoData.votes} votes
            </div>
          </div>
        </Panel>
        <Panel
          style={
            authedUserVote === "Two"
              ? { ...panelStyle, ...votedPanelStyle }
              : panelStyle
          }
        >
          {authedUserVote === "Two" && (
            <div style={yourVoteStyle}>
              <b>
                Your
                <br />
                Vote
              </b>
            </div>
          )}
          <div style={questionContainer}>
            <div className="mui--text-subhead">{optionTwoData.text}</div>
          </div>
          <Divider />
          <div style={stadisticsContainer}>
            <div className="mui--text-subhead">
              {(optionTwoData.votes /
                (optionOneData.votes + optionTwoData.votes)) *
                100} %
            </div>
            <div className="mui--text-subhead">
              {optionTwoData.votes} out of{" "}
              {optionOneData.votes + optionTwoData.votes} votes
            </div>
          </div>
        </Panel>
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser }, { qid }) {
  const authedUserVote =
    (questions[qid].optionOne.votes.includes(authedUser) && "One") ||
    (questions[qid].optionTwo.votes.includes(authedUser) && "Two");
  const optionOneData = {
    text: questions[qid].optionOne.text,
    votes: questions[qid].optionOne.votes.length
  };
  const optionTwoData = {
    text: questions[qid].optionTwo.text,
    votes: questions[qid].optionTwo.votes.length
  };
  return {
    authedUserVote,
    optionOneData,
    optionTwoData
  };
}

export default connect(mapStateToProps)(Result);
