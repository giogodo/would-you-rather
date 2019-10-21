import React, { Component } from 'react';
import { connect } from 'react-redux';
import Panel from 'muicss/lib/react/panel';
import Tabs from 'muicss/lib/react/tabs';
import Tab from 'muicss/lib/react/tab';

class PollList extends Component {
  render() {
    return (
      <Panel>
        <Tabs defaultSelectedIndex={0}>
          <Tab value="pane-1" label="Unanswered Questions">
            <ul>
              {this.props.unansweredQuestions.map((id) => (
                <li key={id}>
                  <div>Question ID: {id}</div>
                </li>
              ))}
            </ul>
          </Tab>
          <Tab value="pane-2" label="Answered Questions">
            <ul>
              {this.props.answeredQuestions.map((id) => (
                <li key={id}>
                  <div>Question ID: {id}</div>
                </li>
              ))}
            </ul>
          </Tab>
        </Tabs>
      </Panel>
    )
  }
}

function mapStateToProps({ authedUser, questions, users }) {
  const answeredQuestions = Object.keys(users[authedUser].answers)
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp)

  const unansweredQuestions = Object.keys(questions)
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    .filter((questions) =>
      !answeredQuestions.includes(questions))

  return {
    unansweredQuestions: unansweredQuestions,
    answeredQuestions: answeredQuestions
  }
}

export default connect(mapStateToProps)(PollList)