import React from "react";

function ProfileAddress() {
  return (
    <form className="h-full py-2 px-12 w-full">
      <div className="flex mt-5 justify-between">
        <span className="flex w-[49.5%] flex-col gap-2">
          <label htmlFor="" className="text-[.75rem] font-inter opacity-90">
            First Name
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
            Last Name
          </label>
          <input
            spellCheck={false}
            className="h-[2.4rem] w-full shadow-md border outline-none px-4 text-[.9rem]"
            type="text"
            name="lastname"
          />
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
        <span className="flex w-[41.5%] flex-col gap-2">
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
        <span className="flex w-[35.5%] flex-col gap-2">
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
        <span className="flex w-[21%] flex-col gap-2">
          <label htmlFor="" className="text-[.75rem] font-inter opacity-90">
            Pincode
          </label>
          <input
            spellCheck={false}
            className="h-[2.4rem] w-full shadow-md border outline-none px-4 text-[.9rem] [appearance:textfield]
             [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            type="number"
            name="pin"
          />
        </span>
      </div>
      <div className="flex mt-5 justify-between">
        <span className="flex w-[33.5%] flex-col gap-2">
          <label htmlFor="" className="text-[.75rem] font-inter opacity-90">
            City
          </label>
          <input
            spellCheck={false}
            className="h-[2.4rem] w-full shadow-md border outline-none px-4 text-[.9rem]"
            type="text"
            name="city"
          />
        </span>
        <span className="flex w-[35.5%] flex-col gap-2">
          <label htmlFor="" className="text-[.75rem] font-inter opacity-90">
            Landmark
          </label>
          <input
            spellCheck={false}
            className="h-[2.4rem] w-full shadow-md border outline-none px-4 text-[.9rem]"
            type="text"
            name="landmark"
          />
        </span>
        <span className="flex w-[26%] flex-col gap-2">
          <label htmlFor="" className="text-[.75rem] font-inter opacity-90">
            House No
          </label>
          <input
            spellCheck={false}
            className="h-[2.4rem] w-full shadow-md border outline-none px-4 text-[.9rem]"
            type="number"
            name="houseno"
          />
        </span>
      </div>
      <button className="bg-cusOrange font-inter my-10 ease-in-out duration-200 active:scale-[.95] text-white shadow-box m-auto text-center p-2 w-full">
        SUBMIT
      </button>
    </form>
  );
}

export default ProfileAddress;
