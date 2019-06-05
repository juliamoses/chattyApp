import React, { Component } from 'react';

class ChatBar extends Component {
  render() {
    return (
    	<form className="chatbar">
 				<input 
 					className="chatbar-username" 
 					name="userInput" 
 					onKeyUp={this.props.userHitsEnter} 
 					placeholder="Your Name (Optional)" 
 					/>

 				<input
 					className="chatbar-message" 
 					name="messageInput" 
 					onKeyUp={this.props.userHitsEnter} 
 					placeholder="Type a message and hit ENTER" 
 					/>
			</form>
    );
  }
}


export default ChatBar;