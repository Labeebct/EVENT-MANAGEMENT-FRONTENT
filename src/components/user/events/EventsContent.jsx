import EventsFrame from "./EventsFrame"

const EventsContent = () => {
  return (
    <div className="h-auto w-full min-h-[calc(100vh-4.5rem)]">
        <div className="w-full h-auto p-5 px-6 mt-10 sm:mt-0">
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