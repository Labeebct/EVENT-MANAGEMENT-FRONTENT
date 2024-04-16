import React from 'react'
import EventsFrame from './EventsFrame'

const EventsContent = () => {
  return (
    <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      <EventsFrame />
    </div>
  )
}

export default EventsContent