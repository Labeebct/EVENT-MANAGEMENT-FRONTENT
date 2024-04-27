import React from 'react'
import MessageFrame from './MessageFrame'

const MessageContent = () => {
  return (
    <div className='w-full gap-2 p-3 h-full grid grid-cols-1 sm:grid-cols-2'>
      <MessageFrame />
      <MessageFrame />
      <MessageFrame />
      <MessageFrame />
      <MessageFrame />
      <MessageFrame />
      <MessageFrame />
    </div>
  )
}

export default MessageContent