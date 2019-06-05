import React, { Component } from 'react';



class ChatBar extends Component {
	// handleInput = e => {
	// 	const {
	// 		userHitsEnter
	// 	} = this.props;



	// 	if (e.key === 'Enter') {
	// 		userHitsEnter({
	// 			content: e.target.value,
	// 			type: e.target.name === 'messageInput' ? 'messageSent' 
	// 				: e.target.name === 'userInput' ? 'userNameChanged' 
	// 				: '',
	// 		})
	// 	}
	// }

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