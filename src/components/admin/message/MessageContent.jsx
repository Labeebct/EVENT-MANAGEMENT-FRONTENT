import React, { useEffect, useState } from "react";
import MessageFrame from "./MessageFrame";
import axiosInsatance from "../../../instance/axiosInstance";
import { useNavigate } from "react-router-dom";

const MessageContent = () => {
  const Navigate = useNavigate();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axiosInsatance.get("/admin/messages");
        const { data } = response;
        setMessages(data.messages);
      } catch (error) {
        if (error.response) {
          const { data, status } = error.response;
          if (status == 500) {
            console.log(data.error);
            Navigate("/500");
          }
        } else {
          Navigate("/500");
        }
      }
    };

    fetchMessages();
  }, [messages]);

  if (messages.length == 0) {
    return (
      <div className="h-full w-full flex justify-center items-center">
        <h3 className="text-[1.5rem] mb-24 font-semibold font-inter">
          No messages Left
        </h3>
      </div>
    );
  }

  return (
    <div className="w-full p-3 px-4 h-auto flex flex-col gap-3">
      {messages.map((data) => (
        <MessageFrame data={data} />
      ))}
    </div>
  );
};

export default MessageContent;
