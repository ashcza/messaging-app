import React, { Component } from 'react';

export default class MessageInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(e) {
    this.setState({message: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let message = this.state.message.trim();
    if (message) {
      this.props.submitMessage(this.state.message);
      this.setState({message: ""})
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" value={this.state.message} onChange={this.update} />
        </label>
        <input type="submit" value="Enter Message" />
      </form>
    )
  }
}
