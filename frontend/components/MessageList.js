import React from 'react';

export const MessageList = (props) => {
  let renderMessages = (messages) => {
    return messages.map( (message, idx) => (
      <li key={idx}>{message.sender}: {message.content}</li>
    ))
  }
  if (!props.messages) {
    return <div></div>
  }
  return (
    <ul>
      {renderMessages(props.messages)}
    </ul>
  )
}
