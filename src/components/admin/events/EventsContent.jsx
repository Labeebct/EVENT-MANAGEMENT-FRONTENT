import React from 'react'
import EventsFrame from './EventsFrame'

const EventsContent = () => {
  return (
    <div className='w-full p-4 h-auto grid grid-cols-1 lg:grid-cols-2 gap-3'>
      <EventsFrame />
      <EventsFrame />
      <EventsFrame />
      <EventsFrame />
    </div>
  )
}

export default EventsContent