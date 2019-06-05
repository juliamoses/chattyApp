import React, { Component } from 'react';
import MessageList from './MessageList.jsx'
import ChatBar from './ChatBar.jsx'



const generateRandomString = () => {
  const newURL = Math.random().toString(36).substring(7);
  return newURL;
}


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: "Bob",
      messages: [{
        id: generateRandomString(),
        type: "incomingMessage",
        content: "I won't be impressed with technology until I can download food.",
        username: "Anonymous1"
      },
      {
        id: generateRandomString(),
        type: "incomingNotification",
        content: "Anonymous1 changed their name to nomnom",
      },
      {
        id: generateRandomString(),
        type: "incomingMessage",
        content: "I wouldn't want to download Kraft Dinner. I'd be scared of cheese packet loss.",
        username: "Anonymous2"
      },
      {
        id: generateRandomString(),
        type: "incomingMessage",
        content: "...",
        username: "nomnom"
      },
      {
        id: generateRandomString(),
        type: "incomingMessage",
        content: "I'd love to download a fried egg, but I'm afraid encryption would scramble it",
        username: "Anonymous2"
      },
      {
        id: generateRandomString(),
        type: "incomingMessage",
        content: "This isn't funny. You're not funny",
        username: "nomnom"
      },
      {
        id: generateRandomString(),
        type: "incomingNotification",
        content: "Anonymous2 changed their name to NotFunny",
      },
      ]

    };
      this.userHitsEnter = this.userHitsEnter.bind(this);
  }


  userHitsEnter = (evt) => {
    if (evt.key === 'Enter') {
      console.log(evt);
      const messageValue = {content: evt.target.value, 
                            username:this.state.currentUser, 
                            type:"incomingMessage",
                            id:generateRandomString()}
      const newMessages = this.state.messages.concat(messageValue);
      this.setState({messages:newMessages});
    }
  }

  componentDidMount() {
    const socket = new WebSocket("ws://localhost:3001");
  }


  render() {
    return (
      <div>
      <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
      </nav>
      <MessageList messages={this.state.messages} />
      <ChatBar theUser = {this.state.currentUser} 
            userHitsEnter={this.userHitsEnter}/>
    </div>

    );
  }
}

export default App;




