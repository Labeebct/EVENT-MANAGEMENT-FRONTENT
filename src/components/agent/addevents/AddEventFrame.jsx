import React from "react";

const AddEventFrame = () => {
  return (
    <form className="h-[90%] shadow-box py-6 px-12 w-[70%] bg-gray-50">
      <div className="flex mt-5 justify-between">
        <span className="flex w-[49.5%] flex-col gap-2">
          <label htmlFor="" className="text-[.75rem] font-inter opacity-90">
            Venue Name
          </label>
          <input
            spellCheck={false}
            className="h-[2.4rem] w-full shadow-md border outline-none px-4 text-[.9rem]"
            type="text"
            name="firstname"
          />
        </span>
        <span className="flex w-[49.5%] flex-col gap-2">
          <label htmlFor="" className="text-[.75rem] font-inter opacity-90">
            Category
          </label>
          <select
            className="h-[2.4rem] w-full shadow-md border outline-none px-4 text-[.9rem]"
            name=""
            id=""
          >
            <option value="">Wedding</option>
            <option value="">Category </option>
            <option value="">Party</option>
          </select>
        </span>
      </div>
      <div className="flex mt-5 justify-between">
        <span className="flex w-[52.5%] flex-col gap-2">
          <label htmlFor="" className="text-[.75rem] font-inter opacity-90">
            Email
          </label>
          <input
            spellCheck={false}
            className="h-[2.4rem] w-full shadow-md border outline-none px-4 text-[.9rem]"
            type="text"
            name="email"
          />
        </span>
        <span className="flex w-[46.5%] flex-col gap-2">
          <label htmlFor="" className="text-[.75rem] font-inter opacity-90">
            Mobile Number
          </label>
          <input
            spellCheck={false}
            className="h-[2.4rem] w-full shadow-md border outline-none px-4 text-[.9rem] [appearance:textfield]
             [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            type="number"
            name="mobilenum"
          />
        </span>
      </div>
      <div className="flex mt-5 justify-between">
        <span className="flex w-[23.5%] flex-col gap-2">
          <label htmlFor="" className="text-[.75rem] font-inter opacity-90">
            Country
          </label>
          <input
            spellCheck={false}
            className="h-[2.4rem] w-full shadow-md border outline-none px-4 text-[.9rem]"
            type="text"
            name="state"
          />
        </span>
        <span className="flex w-[23.5%] flex-col gap-2">
          <label htmlFor="" className="text-[.75rem] font-inter opacity-90">
            State
          </label>
          <input
            spellCheck={false}
            className="h-[2.4rem] w-full shadow-md border outline-none px-4 text-[.9rem]"
            type="text"
            name="state"
          />
        </span>
        <span className="flex w-[30.5%] flex-col gap-2">
          <label htmlFor="" className="text-[.75rem] font-inter opacity-90">
            District
          </label>
          <input
            spellCheck={false}
            className="h-[2.4rem] w-full shadow-md border outline-none px-4 text-[.9rem]"
            type="text"
            name="district"
          />
        </span>
        <span className="flex w-[20.5%] flex-col gap-2">
          <label htmlFor="" className="text-[.75rem] font-inter opacity-90">
            City
          </label>
          <input
            spellCheck={false}
            className="h-[2.4rem] w-full shadow-md border outline-none px-4 text-[.9rem]"
            type="text"
            name="district"
          />
        </span>
      </div>
      <button className="bg-cusGreen font-inter my-10 ease-in-out duration-200 active:scale-[.95] text-white shadow-box m-auto text-center p-2 w-full">
        Add Event
      </button>
    </form>
  );
};

export default AddEventFrame;
