import React, { useState } from "react";
import DatePicker from "./DatePicker";
import axiosInstance from "../../../instance/axiosInstance";
import BasicAlert from "../../shared/BasicAlert";
import CategorySelect from "./CategorySelect";
import CountrySelector from "./CountrySelector";
import StateSelect from "./StateSelect";
import { useAlert } from "../../../context/CenterAlert";
import { useNavigate } from "react-router-dom";

const AddEventFrame = () => {
  const Navigate = useNavigate();
  const showAlert = useAlert();

  const [message, setMessage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [selectedDates, setSelectedDates] = useState([]);

  const [selectValue, setSelectValue] = useState({
    country: "",
    state: "",
    category: "",
  });

  const handleDateChange = (date) => {
    if (
      !selectedDates.some(
        (existingDate) => existingDate.getTime() === date.getTime()
      )
    ) {
      setSelectedDates([...selectedDates, date]);
    }
  };

  const handleImage = (e) => {
    const { files } = e.target;
    const file = files[0];
    setImageUrl(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {
        venueName,
        event,
        price,
        advanceAmount,
        district,
        city,
        capacity,
        startTime,
        endTime,
        discription,
      } = e.target;

      const imageFile = event.files[0];

      if (venueName.value.trim() === "")
        return setMessage("Please enter venue name.");
      else if (price.value.trim() === "")
        return setMessage("Please enter the price.");
      else if (advanceAmount.value.trim() === "")
        return setMessage("Please enter the advance amount.");
      else if (district.value.trim() === "")
        return setMessage("Please enter the district.");
      else if (city.value.trim() === "")
        return setMessage("Please enter the city.");
      else if (capacity.value.trim() === "")
        return setMessage("Please provide the capacity.");
      else if (discription.value.trim() === "")
        return setMessage("Please provide discription.");
      else if (!startTime)
        return setMessage("Please select the start time.");
      else if (!endTime)
        return setMessage("Please select the end time.");
      else if (!selectValue.category)
        return setMessage("Please select the category.");
      else if (!selectValue.country)
        return setMessage("Please select a country.");
      else if (!selectValue.state) return setMessage("Please select a state.");
      else if (selectedDates.length === 0)
        return setMessage("Please provide available dates.");
      else if (!imageFile) return setMessage("Please provide the venue image.");
      else {
        const formData = new FormData();

        formData.append("venueName", venueName.value);
        formData.append("price", price.value);
        formData.append("advanceAmount", advanceAmount.value);
        formData.append("district", district.value);
        formData.append("city", city.value);
        formData.append("capacity", capacity.value);
        formData.append("startTime", startTime.value);
        formData.append("endTime", endTime.value);
        formData.append("discription", discription.value);
        formData.append("category", selectValue.category);
        formData.append("country", selectValue.country);
        formData.append("state", selectValue.state);
        formData.append("selectedDates", selectedDates);
        formData.append("venueImage", imageFile);

        try {
          const response = await axiosInstance.post(
            "/agent/add-events",
            formData
          );
          const { data, status } = response;

          if (status == 200) {
            showAlert("success", data.msg);
            setTimeout(() => Navigate("/agent/my-events"), 2000);
          }
        } catch (error) {
          if (error.response) {
            const { data, status } = error.response;

            if (status == 422) return setMessage(data.msg);
            else if (status == 500) return Navigate("/500");
          } else {
            console.log("no response from the server", error);
            Navigate("/500");
          }
        }
      }
    } catch (error) {
      console.log("Error in handle submit of event add", error);
    }
  };

  if (message) setTimeout(() => setMessage(""), 2000);

  return (
    <form
      onSubmit={handleSubmit}
      className="h-auto shadow-box py-6 px-12 w-[95%] bg-gray-50"
    >
      <div className="w-full h-auto flex flex-col py-4 items-start justify-center">
        <img className="w-36 h-36" src={imageUrl} alt="" />
        <div className="w-auto mt-3 ml-5 flex h-[3rem] items-center">
          <div className="my-4 w-full p-2 px-4 bg-cusOrange text-white font-poppins font-medium text-[.7rem] rounded-sm">
            CHOOSE FILE
          </div>
          <input
            className="absolute opacity-0 w-24"
            onChange={handleImage}
            type="file"
            encType="multipart/form-data"
            name="event"
          />
        </div>
      </div>
      <div className="flex mt-5 justify-between">
        <span className="flex w-[49.5%] flex-col gap-2">
          <label htmlFor="" className="text-[.75rem] font-inter opacity-90">
            Venue Name
          </label>
          <input
            spellCheck={false}
            className="h-[2.4rem] w-full shadow-md border outline-none px-4 text-[.9rem]"
            type="text"
            name="venueName"
          />
        </span>
        <span className="flex w-[49.5%] flex-col gap-2">
          <label htmlFor="" className="text-[.75rem] font-inter opacity-90">
            Category
          </label>
          <CategorySelect
            selectValue={selectValue}
            setSelectValue={setSelectValue}
          />
        </span>
      </div>
      <div className="flex mt-5 justify-between">
        <span className="flex w-[52.5%] flex-col gap-2">
          <label htmlFor="" className="text-[.75rem] font-inter opacity-90">
            Price per / Day
          </label>
          <input
            spellCheck={false}
            className="h-[2.4rem] [appearance:textfield]
            [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none  w-full shadow-md border outline-none px-4 text-[.9rem]"
            type="number"
            name="price"
          />
        </span>
        <span className="flex w-[46.5%] flex-col gap-2">
          <label htmlFor="" className="text-[.75rem] font-inter opacity-90">
            Advance Amount
          </label>
          <input
            spellCheck={false}
            className="h-[2.4rem] w-full shadow-md border outline-none px-4 text-[.9rem] [appearance:textfield]
             [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            type="number"
            name="advanceAmount"
          />
        </span>
      </div>
      <div className="flex mt-5 justify-between">
        <span className="flex w-[23.5%] flex-col gap-2">
          <label htmlFor="" className="text-[.75rem] font-inter opacity-90">
            Country
          </label>
          <CountrySelector
            selectValue={selectValue}
            setSelectValue={setSelectValue}
          />
        </span>
        <span className="flex w-[23.5%] flex-col gap-2">
          <label htmlFor="" className="text-[.75rem] font-inter opacity-90">
            State
          </label>
          <StateSelect
            selectValue={selectValue}
            setSelectValue={setSelectValue}
          />
        </span>
        <span className="flex w-[26.5%] flex-col gap-2">
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
            name="city"
          />
        </span>
      </div>

      <div className="flex mt-5 justify-between">
        <span className="flex w-[36.5%] flex-col gap-2">
          <label htmlFor="" className="text-[.75rem] font-inter opacity-90">
            Capacity
          </label>
          <input
            spellCheck={false}
            className="h-[2.4rem] w-full shadow-md border outline-none px-4 text-[.9rem]"
            type="number"
            name="capacity"
          />
        </span>
        <span className="flex w-[30.5%] flex-col gap-2">
          <label htmlFor="" className="text-[.75rem] font-inter opacity-90">
            Start Time
          </label>
          <input
            spellCheck={false}
            className="h-[2.4rem] w-full shadow-md border outline-none px-4 text-[.9rem]"
            type="time"
            name="startTime"
          />
        </span>
        <span className="flex w-[30.5%] flex-col gap-2">
          <label htmlFor="" className="text-[.75rem] font-inter opacity-90">
            End Time
          </label>
          <input
            spellCheck={false}
            className="h-[2.4rem] w-full shadow-md border outline-none px-4 text-[.9rem]"
            type="time"
            name="endTime"
          />
        </span>
      </div>

      <DatePicker
        selectedDates={selectedDates}
        handleDateChange={handleDateChange}
      />
      <span className="flex w-full h-auto flex-col gap-2">
        <label htmlFor="" className="text-[.75rem] font-inter opacity-90">
          Discription
        </label>
        <textarea
          name="discription"
          className="min-h-40 p-4 resize-none w-full shadow-md border outline-none text-[.9rem]"
        ></textarea>
      </span>
      <div className="my-6">
        {message && <BasicAlert type="error" msg={message} />}
      </div>
      <button className="bg-cusOrange font-inter mb-10 ease-in-out duration-200 active:scale-[.95] text-white shadow-box m-auto text-center p-2 w-full">
        Add Event
      </button>
    </form>
  );
};

export default AddEventFrame;
