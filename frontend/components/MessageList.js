import React from 'react';

export const MessageList = (props) => {
  let renderMessages = (messages) => {
    return messages.map( (message, idx) => (
      <li className="line" key={idx}>
        <div className="name">{message.sender}:</div>
        <div className="message">{message.content}</div>
      </li>
    ))
  }
  if (!props.messages) {
    return <div></div>
  }
  return (
    <ul className="message-ul">
      {renderMessages(props.messages)}
    </ul>
  )
}
