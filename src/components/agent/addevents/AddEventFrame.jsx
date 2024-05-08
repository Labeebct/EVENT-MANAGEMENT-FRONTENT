import React, { useEffect, useState } from "react";
import DatePicker from "./DatePicker";
import axiosInstance from "../../../instance/axiosInstance";
import BasicAlert from "../../shared/BasicAlert";
import CategorySelect from "./CategorySelect";
import CountrySelector from "./CountrySelector";
import StateSelect from "./StateSelect";
import { useAlert } from "../../../context/CenterAlert";
import { useLocation, useNavigate } from "react-router-dom";

const AddEventFrame = ({ type }) => {
  const Navigate = useNavigate();
  const showAlert = useAlert();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

  const [event, setEvent] = useState({});
  const [message, setMessage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [selectedDates, setSelectedDates] = useState([]);

  const api =
    type == "add" ? "/agent/add-events" : `/agent/edit-events?id=${id}`;

  useEffect(() => {
    const fetchEventForEdit = async () => {
      try {
        const response = await axiosInstance.get(`/agent/edit-event?id=${id}`);
        const { data, status } = response;

        if (status == 200) {
          setEvent(data.event);
        }
      } catch (error) {
        if (error.response) {
          const { data, status } = error.response;
          if (status == 404) {
            Navigate("/404");
          } else if (status == 500) {
            Navigate("/500");
          }
        } else {
          console.log("No response from the server");
          Navigate("/500");
        }
      }
    };

    if (type == "edit") {
      fetchEventForEdit();
    }
  }, [location, id]);

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
        events,
        price,
        advanceAmount,
        district,
        city,
        capacity,
        startTime,
        endTime,
        category,
        country,
        state,
        discription,
      } = e.target;

      const imageFile = events.files[0];

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
      else if (!startTime) return setMessage("Please select the start time.");
      else if (!endTime) return setMessage("Please select the end time.");
      else if (!category) return setMessage("Please select the category.");
      else if (!country) return setMessage("Please select a country.");
      else if (!state) return setMessage("Please select a state.");
      else if (!event.availableDates && selectedDates.length === 0)
        return setMessage("Please provide available dates.");
      else if (!event.eventImage && !imageFile)
        return setMessage("Please provide the venue image.");
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
        formData.append("category", category.value);
        formData.append("country", country.value);
        formData.append("state", state.value);
        formData.append("selectedDates", selectedDates);
        formData.append("venueImage", imageFile);

        try {
          const response = await axiosInstance.post(api, formData);
          const { data, status } = response;

          if (status == 200) {
            window.scroll(0, 0);
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

  const handleValueChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  if (message) setTimeout(() => setMessage(""), 2000);

  return (
    <form
      onSubmit={handleSubmit}
      className="h-auto shadow-box py-6 px-12 w-[95%] bg-gray-50"
    >
      <div className="w-full h-auto flex flex-col py-4 items-start justify-center">
        <img
          className="w-36 h-36"
          src={imageUrl || `http://localhost:8082/${event.eventImage}`}
          alt=""
        />
        <div className="w-auto mt-3 ml-5 flex h-[3rem] items-center">
          <div className="my-4 w-full p-2 px-4 bg-cusOrange text-white font-poppins font-medium text-[.7rem] rounded-sm">
            CHOOSE FILE
          </div>
          <input
            className="absolute opacity-0 w-24"
            onChange={handleImage}
            type="file"
            encType="multipart/form-data"
            name="events"
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
            className="h-[2.4rem] w-full shadow-md border outline-none capitalize px-4 text-[.9rem]"
            type="text"
            onChange={handleValueChange}
            value={event.venueName || ""}
            name="venueName"
          />
        </span>
        <span className="flex w-[49.5%] flex-col gap-2">
          <label htmlFor="" className="text-[.75rem] font-inter opacity-90">
            Category
          </label>
          <CategorySelect event={event} />
        </span>
      </div>
      <div className="flex mt-5 justify-between">
        <span className="flex w-[52.5%] flex-col gap-2">
          <label htmlFor="" className="text-[.75rem] font-inter opacity-90">
            Price per / Day
          </label>
          <input
            spellCheck={false}
            onChange={handleValueChange}
            value={event.price || ""}
            className="h-[2.4rem] [appearance:textfield]
              [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none  w-full shadow-md border outline-none capitalize px-4 text-[.9rem]"
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
            onChange={handleValueChange}
            value={event.advanceAmount || ""}
            className="h-[2.4rem] w-full shadow-md border outline-none capitalize px-4 text-[.9rem] [appearance:textfield]
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
          <CountrySelector event={event} />
        </span>
        <span className="flex w-[23.5%] flex-col gap-2">
          <label htmlFor="" className="text-[.75rem] font-inter opacity-90">
            State
          </label>
          <StateSelect event={event} />
        </span>
        <span className="flex w-[26.5%] flex-col gap-2">
          <label htmlFor="" className="text-[.75rem] font-inter opacity-90">
            District
          </label>
          <input
            spellCheck={false}
            onChange={handleValueChange}
            value={event.district || ""}
            className="h-[2.4rem] w-full shadow-md border outline-none capitalize px-4 text-[.9rem]"
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
            onChange={handleValueChange}
            value={event.city || ""}
            className="h-[2.4rem] w-full shadow-md border outline-none capitalize px-4 text-[.9rem]"
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
            onChange={handleValueChange}
            value={event.capacity || ""}
            className="h-[2.4rem] w-full shadow-md border outline-none capitalize px-4 text-[.9rem]"
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
            onChange={handleValueChange}
            value={event.startTime || ""}
            className="h-[2.4rem] w-full shadow-md border outline-none capitalize px-4 text-[.9rem]"
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
            onChange={handleValueChange}
            value={event.endTime || ""}
            className="h-[2.4rem] w-full shadow-md border outline-none capitalize px-4 text-[.9rem]"
            type="time"
            name="endTime"
          />
        </span>
      </div>

      <DatePicker
        selectedDates={selectedDates}
        setSelectedDates={setSelectedDates}
        availableDates={event.availableDates}
        handleDateChange={handleDateChange}
        id={id}
      />
      <span className="flex w-full h-auto flex-col gap-2">
        <label htmlFor="" className="text-[.75rem] font-inter opacity-90">
          Discription
        </label>
        <textarea
          name="discription"
          onChange={handleValueChange}
          value={event.discription || ""}
          className="min-h-40 p-4 resize-none w-full shadow-md border outline-none capitalize text-[.9rem]"
        ></textarea>
      </span>
      <div className="my-6">
        {message && <BasicAlert type="error" msg={message} />}
      </div>
      <button className="bg-cusOrange font-inter mb-10 ease-in-out duration-200 active:scale-[.95] text-white shadow-box m-auto text-center p-2 w-full">
        {type == "add" ? "Add Event" : "Edit Event"}
      </button>
    </form>
  );
};

export default AddEventFrame;
