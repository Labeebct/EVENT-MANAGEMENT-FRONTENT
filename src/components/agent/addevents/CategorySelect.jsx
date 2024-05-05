import React, { useEffect, useMemo, useState } from "react";
import Select from "react-select";
import { catgoryContext } from "../../../context/CategoryContext";

const CategorySelect = ({ selectValue, setSelectValue }) => {
  const catgoryDatas = catgoryContext();

  const [value, setValue] = useState("");

  const options = useMemo(() => {
    return catgoryDatas.map((category) => ({
      value: category.categoryName,
      label: category.categoryName,
    }));
  }, [catgoryDatas]);

  const handleChange = (selectedOption) => {
    setValue(selectedOption);
    setSelectValue({
      ...selectValue,
      category: selectedOption.value,
    });
  };
  
  return (
    <Select
      className="capitalize"
      options={options}
      value={value}
      onChange={handleChange}
    />
  );
};

export default CategorySelect;
