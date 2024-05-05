const EventsFrame = ({ data }) => {
  return (
    <div className="mb-6 shadow-box flex-1 h-auto">
      <img
        src={`http://localhost:8082/${data.eventImage}`}
        className="w-full p-6 h-[280px] object-cover rounded-md"
      />
      <div class="flex justify-between p-6 items-center">
        <div class="flex w-full flex-col gap-2">
          <div class="text-[1.3rem] pl-1 font-bold font-inter my-1">
            {data.venueName}
          </div>
          <div class="text-[.9rem] pl-1 font-roboto capitalize text-gray-700">
            Category: {data.category}
          </div>
          <div class="text-[.9rem] pl-1 font-roboto capitalize text-gray-700">
            Price: {data.price} / day
          </div>
          <div class="text-[.9rem] pl-1 font-roboto capitalize text-gray-700">
            Capacity: {data.capacity} No
          </div>
          <div class="text-[.9rem] pl-1 font-roboto capitalize text-gray-700">
            Location: {data.country},{data.state},{data.city}{" "}
          </div>
          <button className="bg-cusOrange my-2 text-[.8rem] sm:text-[.9rem] md:text-[1rem] font-inter ease-in-out duration-200 active:scale-[.97] w-full filter text-white shadow-box py-3">
            Check Availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventsFrame;
