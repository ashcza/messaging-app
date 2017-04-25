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
    let sender = this.state.sender.trim();
    if (message && sender) {
      this.props.submitMessage(message, sender);
      this.setState({message: ""})
    }
  }

  render() {
    return (
      <form className="input" onSubmit={this.handleSubmit}>
        <div className="fields">
          <label>
            Your Name
            <input className="input-name" name="sender" type="text" value={this.state.sender} onChange={this.update} />
          </label>
          <br/>
          <label className="input-right">
            Message
            <textarea className="input-message" name="message" type="text" value={this.state.message} onChange={this.update} />
          </label>
        </div>
        <input className="enter" type="submit" value="Enter Message" />
      </form>
    )
  }
}
