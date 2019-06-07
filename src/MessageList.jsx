import React, { Component } from 'react';
import Message from './Message.jsx'

class MessageList extends Component {
  render() {
    const message = this.props.messages.map(message => {
      return (<Message message={message} />)
    });

    return (
      <div className="messages">
      {message}
      </div>
    );
  }
}

export default MessageList;