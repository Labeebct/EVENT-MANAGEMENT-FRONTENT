import React, { useEffect, useMemo, useState } from "react";
import Select from "react-select";
import { catgoryContext } from "../../../context/CategoryContext";

const CategorySelect = ({ event }) => {
  const catgoryDatas = catgoryContext();

  const [value, setValue] = useState("");

  const options = useMemo(() => {
    return catgoryDatas.map((category) => ({
      value: category.categoryName,
      label: category.categoryName,
    }));
  }, [catgoryDatas]);

  useEffect(() => {
    setValue({
      value: event.category,
      label: event.category,
    });
  }, [event.category]);

  const handleChange = (selectedOption) => {
    setValue(selectedOption);
  };

  return (
    <Select
      className="capitalize"
      name="category"
      options={options}
      value={value}
      onChange={handleChange}
    />
  );
};

export default CategorySelect;
