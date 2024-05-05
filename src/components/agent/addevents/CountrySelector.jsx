import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

function CountrySelector({selectValue,setSelectValue}) {
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value)
    setSelectValue({
      ...selectValue,
      country: value.label,
    });
  }

  return <Select name='country' options={options} value={value} onChange={changeHandler} />
}

export default CountrySelector