import React from 'react';

export const MessageList = (props) => {
  let renderMessages = (messages) => {
    return messages.map( message => (
      <div key={message.id}>{message.sender}: {message.content}</div>
    ))
  }

  if (!props.messages) {
    return <div></div>
  }
  return (
    <div>
      {renderMessages(props.messages)}
    </div>
  )
}
