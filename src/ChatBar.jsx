import React, { Component } from 'react';

class ChatBar extends Component {
  render() {
    return (
      <form className="chatbar">
 				<input 
 					className="chatbar-username" 
 					name="userInput" 
 					onKeyUp={this.props.changeUser} 
 					placeholder="Anonymous" 
 					defaultValue={this.props.currentUser}
 					/>

 				<input
 					className="chatbar-message" 
 					name="messageInput" 
 					onKeyUp={this.props.userHitsEnter} 
 					placeholder="Chat!" 
 					/>
			</form>
    );
  }
}


export default ChatBar;