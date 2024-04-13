import weddingImg from "../../../assets/bg (14).jpg";

const EventsFrame = () => {
  return (
    <div className="filter mb-6 shadow-box flex-1 h-auto">
      <img
        src={weddingImg}
        className="w-full p-6 h-[200px] sm:h-[250px] md:h-[300px] xl:h-[350px] 2xl:h-[400px] object-cover rounded-md"
      />
      <div class="flex justify-between p-6 items-center">
        <div class="flex flex-col gap-2">
          <div class="text-[1.3rem] font-bold font-inter my-1">Venue Name</div>
          <div class="text-[.9rem] font-scope-one font-bold text-gray-700">Category: Wedding</div>
          <div class="text-[.9rem] font-scope-one font-bold text-gray-700">Price: 1,20,000 / day</div>
          <div class="text-[.9rem] font-scope-one font-bold text-gray-700">Capacity: 200</div>
          <div class="text-[.9rem] font-scope-one font-bold text-gray-700">Location: City, Country</div>
        </div>
        <button className="bg-cusOrange text-[.8rem] sm:text-[.9rem] md:text-[1rem] font-inter ease-in-out duration-200 active:scale-[.95] rounded-sm filter text-white shadow-box p-3">
          Check Availability
        </button>
      </div>
    </div>
  );
};

export default EventsFrame;
