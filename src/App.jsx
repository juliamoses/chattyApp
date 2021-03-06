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
      messages: [],
      userCount: 0
    };
    this.userHitsEnter = this.userHitsEnter.bind(this);
  }


  userHitsEnter = (evt) => {
    if (evt.key === 'Enter') {
      const messageValue = {
        content: evt.target.value,
        username: this.state.currentUser,
        type: "postMessage",
        id: generateRandomString()
      }
      this.state.socket.send(JSON.stringify(messageValue));
    }
  }

  changeUser = (evt) => {
    if (evt.key === 'Enter') {
      let userValue = {
        type: "postNotification",
        content: `${this.state.currentUser} has changed their name to 
                       ${evt.target.value}`
      }
      this.setState({
        currentUser: evt.target.value
      });
      this.state.socket.send(JSON.stringify(userValue));
    }
  }

  userActive = (evt) => {
    if (evt.type === "userOnline") {
      this.setState({
        userCount: evt.userCount
      });
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
        username: data.username,
        content: data.content,
        id: data.id,
        type: data.type,
        color: data.color
      }
      if (data.type === "userOnline") {
        this.userActive(data)
      }
      this.setState({
        messages: this.state.messages.concat([newMessage])
      })
    }
  }

  render() {
    return (
      <div>
      <nav className="navbar" >
        <a href="/" className="navbar-brand">Chatty</a>
        <span className="userCount">USERS: {this.state.userCount}</span>
      </nav >
      <MessageList messages={this.state.messages} />
      <ChatBar //currentUser = {this.state.currentUser}
               changeUser = {this.changeUser}
               userHitsEnter={this.userHitsEnter}/>
    </div>

    );
  }
}

export default App;