import { useEffect, useMemo, useState } from "react";
import Select from "react-select";

const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Ladakh",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const StateSelect = ({ event }) => {
  const [value, setValue] = useState("");

  const options = useMemo(() => {
    return indianStates.map((state) => ({ value: state, label: state }));
  }, []);

  useEffect(() => {
    setValue({
      value: event.state,
      label: event.state,
    });
  }, [event.state]);

  const changeHandler = (selectedOption) => {
    setValue(selectedOption);
  };

  return (
    <Select
      name="state"
      options={options}
      value={value}
      onChange={changeHandler}
    />
  );
};

export default StateSelect;
