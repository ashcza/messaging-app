import React, { Component } from 'react';

export default class MessageInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      sender: ""
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let message = this.state.message.trim();
    if (message) {
      this.props.submitMessage(this.state.message, this.state.sender);
      this.setState({message: ""})
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Message
          <input name="message" type="text" value={this.state.message} onChange={this.update} />
        </label>
        <br/>
        <label>
          Your Name
          <input name="sender" type="text" value={this.state.sender} onChange={this.update} />
        </label>
        <br/>
        <input type="submit" value="Enter Message" />
      </form>
    )
  }
}
