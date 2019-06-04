import React, { Component } from 'react';

class ChatBar extends Component {
	constructor(props) {
		super(props)

		this.state = {
			username: '',
			message: ''
		}
	}

	onNameChange = (e) => {
		// Update the state
		console.log(e.target.value);
		this.setState({ username: e.target.value })
		// check if key is enter, if so - send the message to server
		
	}

	onMessageChange = (e) => {
		this.setState({ message: e.target.value })
		// check if key is enter, if so - send the message to server

	}

    render() {
        return (
	       	<div>
		        <footer className="chatbar">
		 		<input className="chatbar-username" onC
		 		hange={this.onNameChange} placeholder="Your Name (Optional)" />
		 		<input className="chatbar-message" onChange={this.onMessageChange} placeholder="Type a message and hit ENTER" />
				</footer>
			</div>
        );
    }


}


export default ChatBar;