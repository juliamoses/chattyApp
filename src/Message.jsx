import React, { Component } from 'react';

class Message extends Component {
  render() {
    return (
      <div className="messageSystem">
        <div className="message">
          {this.props.message.type === "incomingMessage" ?

          <div>
            <span className="message-username" style={{color: this.props.message.color}}>
              {this.props.message.username}
            </span>
          <span className="message-content">{this.props.message.content}</span>
          </div> : 

          <span className="message-content">
            <em>
              {this.props.message.content}
            </em>
          </span>}
        </div>
       </div>

    )
  }
}

export default Message;

 //{message.color}