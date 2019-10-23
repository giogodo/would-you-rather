import React, { Component } from 'react';
import { connect } from 'react-redux';
import Panel from 'muicss/lib/react/panel';
import Tabs from 'muicss/lib/react/tabs';
import Tab from 'muicss/lib/react/tab';
import PollItem from './PollItem';

const mainPanelStyle = {
  margin: 10,
  maxWidth: 620
};
const tabStyle = {
  paddingTop: 20
};

class PollList extends Component {
  render() {
    return (
      <Panel style={mainPanelStyle}>
        <Tabs defaultSelectedIndex={0} justified={true}>
          <Tab value="pane-1" label="Unanswered Questions">
            <div style={tabStyle}>
              {this.props.unansweredQuestions.map((id) => (
                <PollItem key={id} id={id} />
              ))}
            </div>
          </Tab>
          <Tab value="pane-2" label="Answered Questions">
            <div style={tabStyle}>
              {this.props.answeredQuestions.map((id) => (
                <PollItem key={id} id={id} />
              ))}
            </div>
          </Tab>
        </Tabs>
      </Panel>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }) {
  const answeredQuestions = Object.keys(users[authedUser].answers)
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

  const unansweredQuestions = Object.keys(questions)
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    .filter((questions) =>
      !answeredQuestions.includes(questions));

  return {
    unansweredQuestions: unansweredQuestions,
    answeredQuestions: answeredQuestions
  };
}

export default connect(mapStateToProps)(PollList);