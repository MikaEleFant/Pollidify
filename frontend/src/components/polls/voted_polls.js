import React from 'react';
import PollShowContainer from './poll_show_container.js';

class VotedPolls extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      polls: []
    }
  }

  componentDidMount() {
    // console.log(this.props.currentUser.id)
    this.props.fetchVotedPolls(this.props.currentUser.id);
  }

  componentWillReceiveProps(newState) {
    this.setState({ polls: newState.polls });
  }

  render() {
    if (this.state.polls.length === 0) {
      return (
        <div classname="no-user-polls">
          <h2>You have no voted Polls</h2>
        </div>
      )
    } else {
      return (
        <div className="voted-polls">
          <h2>All of Your Voted Polls</h2>
          <div className="voted-poll">
            {this.state.polls.map(poll => (
              <PollShowContainer key={poll._id} question={poll.question} poll={poll} inherited={true} />
            ))}
          </div>
        </div>
      );
    }
  }
}

export default VotedPolls;
