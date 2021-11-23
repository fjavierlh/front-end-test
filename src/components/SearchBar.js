import React, { useState } from 'react';

export const SearchBar = ({ onSearch }) => {
  const [value, setValue] = useState('');

  const onChange = (e) => {
    const value = e.target.value;
    setValue(value);
    onSearch(value.toLowerCase());
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        onChange={onChange}
        value={value}
      />
    </>
  );
};
