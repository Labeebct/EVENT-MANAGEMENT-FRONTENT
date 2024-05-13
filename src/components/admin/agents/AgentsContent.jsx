import React, { useEffect, useState } from "react";
import axiosInstance from "../../../instance/axiosInstance";
import UsersFrame from "../users/UsersFrame";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const AgentsContent = () => {
  const [agents, setAgents] = useState([]);
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        dispatch({ type: "loading", payload: true });
        const response = await axiosInstance.get("/admin/agents");
        dispatch({ type: "loading", payload: false });
        const { data, status } = response;

        if (status == 200) {
          setAgents(data.agentsList);
        }
      } catch (error) {
        if (error.response) {
          const { status } = error.response;
          if (status == 404) {
            Navigate("/404");
          } else if (status == 500) {
            Navigate("/500");
          }
        } else {
          Navigate("/500");
          console.log("No response from server");
        }
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="w-full px-4 h-auto">
      {agents.map((agent) => (
        <UsersFrame data={agent} />
      ))}
    </div>
  );
};

export default AgentsContent;
