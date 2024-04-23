import React, { useEffect, useState } from "react";
import axiosInstance from "../../../instance/axiosInstance";
import UsersFrame from "./UsersFrame";
import { useNavigate } from "react-router-dom";

const UsersContent = () => {
  const [users, setUsers] = useState([]);
  const Navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosInstance.get("/admin/users");
        const { data, status } = response;

        if (status == 200) {
          setUsers(data.usersList);
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
        {users.map((user) => (
        <UsersFrame data={user} />
      ))}
    </div>
  );
};

export default UsersContent;
