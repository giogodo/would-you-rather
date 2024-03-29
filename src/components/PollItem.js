import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Panel from "muicss/lib/react/panel";
import Button from "muicss/lib/react/button";
import Divider from "muicss/lib/react/divider";

const mainPanelStyle = {
  margin: 10,
  display: "flex",
  flexDirection: "column"
};
const headerStyle = {
  marginBottom: 10
};
const contentStyle = {
  marginTop: 10,
  padding: 10,
  display: "flex"
};
const avatarContStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
};
const avatarStyle = {
  borderRadius: 5
};
const pollContStyle = {
  flex: 1.7,
  display: "flex",
  flexDirection: "column"
};
const buttonStyle = {
  width: "100%"
};

class Tweet extends Component {
  render() {
    const { question, author } = this.props;
    const { optionOne, id } = question;
    const { name, avatarURL } = author;
    return (
      <Panel style={mainPanelStyle}>
        <div style={headerStyle}>
          <div className="mui--text-headline">{name} asks:</div>
        </div>
        <Divider />
        <div style={contentStyle}>
          <div style={avatarContStyle}>
            <img
              src={avatarURL}
              alt={`Avatar of ${name}`}
              height="92"
              width="92"
              style={avatarStyle}
            />
          </div>
          <div style={pollContStyle}>
            <div className="mui--text-headline">Would you rather</div>
            <div className="mui--text-subhead">
              ...{optionOne.text.slice(0, 15)}...
            </div>
            <Link to={`/questions/${id}`}>
              <Button color="primary" style={buttonStyle}>
                View Poll
              </Button>
            </Link>
          </div>
        </div>
      </Panel>
    );
  }
}

function mapStateToProps({ users, questions }, { id }) {
  return {
    question: questions[id],
    author: users[questions[id].author]
  };
}

export default connect(mapStateToProps)(Tweet);
