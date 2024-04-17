import React from 'react'
import MessageFrame from './MessageFrame'

const MessageContent = () => {
  return (
    <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 px-5  gap-x-4 gap-y-4'>
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