import React, {Component} from 'react';
import './App.css';
import {Launcher} from './react-chat-window/lib/index.js';
import testMessages from './testMessages';



export function sendMessageCall(message) {
//api call, gets the updated message list in the callback
// return messageList
}

class Chat extends Component {

  constructor() {
    super();
    this.state = {
      messageList: testMessages
    };
  }
 
  _onMessageWasSent(message) {

    //this.state.messageList = sendMessageCall(message);
    // this.setState({
    //   messageList: //socket io input messages will go here
    // })

    this.setState({
      messageList: [...this.state.messageList, message]
    })
    
  }
 
  _sendMessage(text) {
    if (text.length > 0) {
      this.setState({
        messageList: [...this.state.messageList, {
          author: 'them',
          type: 'text',
          data: { text }
        }]
      })
    }
  }
 
  render() {
   
    return (<div>
      <Launcher
        agentProfile={{
          teamName: 'Chat',
          imageUrl: ''
        }}
        onMessageWasSent={this._onMessageWasSent.bind(this)}
        messageList={this.state.messageList}
        showEmoji
      />
    </div>)
  }
}

export default Chat;