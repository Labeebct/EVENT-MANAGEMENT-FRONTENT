import EventsFrame from "./EventsFrame"

const EventsContent = () => {
  return (
    <div className="h-auto w-full min-h-[calc(100vh-4.5rem)]">
        <div className="w-full grid grid-cols-1 h-auto p-5 mt-10 sm:mt-0 px-6 gap-x-6  lg:grid-cols-3 sm:grid-cols-2">
        <EventsFrame />
        <EventsFrame />
        <EventsFrame />
        <EventsFrame />
        <EventsFrame />
        </div>
    </div>
  )
}

export default EventsContent