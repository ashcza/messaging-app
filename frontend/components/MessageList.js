import React from 'react';

export const MessageList = (props) => {
  let renderMessages = (messages) => {
    return messages.map( message => (
      <div>{message.sender}: {message.message}</div>
    ))
  }
  return (
    <div>
      {renderMessages(props.messages)}
    </div>
  )
}
