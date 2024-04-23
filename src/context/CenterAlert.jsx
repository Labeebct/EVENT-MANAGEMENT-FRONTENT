import React, { useContext, useState, createContext } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export const AlertContext = createContext();

const CenterAlert = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");

  const showAlert = (type, msg) => {
    setVisible(true);
    setType(type);
    setMessage(msg);

    setTimeout(() => setVisible(false), 2000);
  };

  return (
    <AlertContext.Provider value={showAlert}>
      {children}
      {visible && (
        <div className="h-screen backdrop-blur-[.06rem] absolute inset-0 w-full flex items-center justify-center">
          <div>
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity={type}>{message}</Alert>
          </Stack>
          </div>
        </div>
      )}
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  return useContext(AlertContext);
};

export default CenterAlert;
 