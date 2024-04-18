import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const EyePassword = ({ handleChange, handleBlur, value, name }) => {
  const [visible, setvisible] = useState(false);

  return (
    <div className="h-[2.5rem] relative border outline-none  text-[.9rem] border-[#39393948] drop-shadow-sm">
      <input
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        type={visible ? "password" : "text"}
        name={name}
        maxLength={16}
        className="h-full w-full border-none outline-none px-3 text-[.9rem] border-[#39393948] drop-shadow-sm"
      />
      <span className="absolute right-2 top-2">
        {
            visible ? 
          <VisibilityOffIcon
            onClick={() => setvisible(false)}
            sx={{ opacity: ".7", fontSize: "1.15rem", cursor: "pointer" }}
          /> :
          <VisibilityIcon
            onClick={() => setvisible(true)}
            sx={{ opacity: ".7", fontSize: "1.15rem", cursor: "pointer" }}
          />
        }
      </span>
    </div>
  );
};

export default EyePassword;
