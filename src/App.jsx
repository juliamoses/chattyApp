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
    }

    userHitsEnter = (stuff) => {
      console.log(stuff);
    }

    componentDidMount() {
        console.log("componentDidMount <App />");
        setTimeout(() => {
            console.log("Simulating incoming message");
            const newMessage = { id: 3, username: "Michelle", content: "Hello there!" };
            const messages = this.state.messages.concat(newMessage)
            this.setState({ messages: messages })
        }, 3000);
    }


    render() {
        return (
            <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
        <MessageList messages={this.state.messages} />
        <ChatBar userHitsEnter={this.userHitsEnter}/>
      </div>

        );
    }
}

export default App;