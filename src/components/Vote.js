import React, { Component } from "react";
import { connect } from "react-redux";
import Panel from "muicss/lib/react/panel";
import Radio from "muicss/lib/react/radio";
import Button from "muicss/lib/react/button";

const panelStyle = {
  position: "relative",
  marginBottom: 25,
  padding: 28,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around"
};
const titleStyle = {
  marginBottom: 30
};
const formStyle = {
  alignSelf: "stretch"
};
const radioStyle = {
  marginBottom: 30
};
const buttonStyle = {
  width: "100%"
};

class Result extends Component {
  state = {
    answer: null
  };

  handleChange = e => {
    const value = e.target.value;
    this.setState(() => ({
      answer: value
    }));
  };

  handleSubmit = e => {
    const { answer } = this.state;
    e.preventDefault();
    console.log(answer);
  };

  render() {
    const {question, authedUser} = this.props
    const { answer } = this.state;
    return (
      <div>
        <Panel style={panelStyle}>
          <div className="mui--text-display1" style={titleStyle}>
            <b>Would You Rather...</b>
          </div>
          <form style={formStyle}>
            <Radio
              name="answer"
              style={radioStyle}
              label={question.optionOne.text}
              value="optionOne"
              onChange={this.handleChange}
            />
            <Radio
              name="answer"
              style={radioStyle}
              label={question.optionTwo.text}
              value="optionTwo"
              onChange={this.handleChange}
            />
            <div>
              <Button
                color="primary"
                style={buttonStyle}
                disabled={!answer}
                onClick={this.handleSubmit}
              >
                Submit
              </Button>
            </div>
          </form>
        </Panel>
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser }, { qid }) {
  const question = questions[qid];
  return {
    authedUser,
    question
  };
}

export default connect(mapStateToProps)(Result);
