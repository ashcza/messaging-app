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
    this.setSubscription = this.setSubscription.bind(this);
    this.appendNewMessage = this.appendNewMessage.bind(this);
  }

  componentDidMount() {
    this.fetchMessages();
    this.setSubscription();
  }


  submitMessage(text, author) {
    $.ajax({
          url: "/messages",
          dataType: "json",
          type: "POST",
          data: {message: {content: text, sender: author}},
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

  setSubscription() {
    App.cable = ActionCable.createConsumer()
    App.message = App.cable.subscriptions.create("MessageChannel", {
      connected: function() {},
      disconnected: function() {},
      received: function(data) {
        console.log("working")
        this.appendNewMessage(data);
      },
      appendNewMessage: this.appendNewMessage
    });
  }

  appendNewMessage(data) {
    var new_messages = this.state.messages.concat([{id: data.id, content: data.content}]);
    this.setState({messages: this.state.messages.concat(
      [{id: data.id,
        content: data.content,
        sender: data.sender,
        time: data.time
      }])
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
