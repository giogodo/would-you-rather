import React, { Component } from 'react'
import { connect } from 'react-redux'
import Panel from 'muicss/lib/react/panel';
import Button from 'muicss/lib/react/button';
import Divider from 'muicss/lib/react/divider';

const headerStyle = {};
const avatarContStyle = {};
const pollContStyle = {};

class Tweet extends Component {
  render() {
    const { poll, author } = this.props
    const {
      optionOne
    } = poll
    const {
      name,
      avatarURL
    } = author

    return (
      <Panel>
        <div className="mui--text-subhead">
          {name} asks:
        </div>
        <div>
          <div>
            <img
              src={avatarURL}
              alt={`Avatar of ${name}`}
              height="64"
              width="64"
            />
          </div>
          <Divider />
          <div >
            <div className="mui--text-headline">
              Would you rather
            </div>
            <div className="mui--text-subhead">
              ...{optionOne.text.slice(0, 15)}...
            </div>
            <Button color="primary">View Poll</Button>
          </div>
        </div>
      </Panel>
    )
  }
}

function mapStateToProps({ users, questions }, { id }) {
  return {
    poll: questions[id],
    author: users[questions[id].author]
  }
}

export default connect(mapStateToProps)(Tweet)