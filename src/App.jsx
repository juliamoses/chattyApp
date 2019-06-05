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
      messages: []
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
      // const newMessages = this.state.messages.concat(messageValue);
      // this.setState({messages:newMessages});
      this.state.socket.send(JSON.stringify(messageValue));
    }
  }

  componentDidMount() {
    const socket = new WebSocket("ws://localhost:3001");
    this.setState({
      socket
    })

    socket.onmessage = (e) => {
      const data = JSON.parse(e.data)
      const newMessage = {
        username:data.username,
        content:data.content,
        id: data.id
      }
      this.setState({
        messages: this.state.messages.concat([newMessage])
      })
    }
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




