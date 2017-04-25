import React, { Component } from 'react';
import { MessageList } from './MessageList';
import MessageInput from './MessageInput';
// import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = { messages: [] };
    this.fetchMessages = this.fetchMessages.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }

  componentDidMount() {
    this.fetchMessages();
  }


  submitMessage(data) {
    $.ajax({
          url: "/messages",
          dataType: "json",
          type: "POST",
          data: {message: {content: data, sender: "ashcon"}},
          success: function(data) {
            this.setState({messages: data});
          }.bind(this),
          error: function(xhr, status, err) {
            console.error("Cannot load data.");
          }.bind(this)
        });
  }

  fetchMessages() {
    $.ajax({
      url: "/messages",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({messages: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error("Cannot load data.");
      }.bind(this)
    });
  }

  render() {
    return (
      <div>
        <MessageList messages={this.state.messages} />
        <MessageInput submitMessage={this.submitMessage}/>
      </div>
    );
  }
}
