import React, { useState, useMemo, useEffect } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

function CountrySelector({ event }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = useMemo(() => countryList().getData(), []);

  useEffect(() => {
    setSelectedOption({
      value: event.country,
      label: event.country,
    });
  }, [event.country]);

  const changeHandler = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
  
  return (
    <Select
      name="country"
      options={options}
      value={selectedOption}
      onChange={changeHandler}
      getOptionValue={(option) => option.label}
      getOptionLabel={(option) => option.label}
    />
  );
}

export default CountrySelector;
