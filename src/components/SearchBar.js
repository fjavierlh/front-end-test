import React, { useEffect, useState } from 'react';
import { Hint } from 'react-autocomplete-hint';
import styled from 'styled-components';
import breakpoints from '../constants/devices-sizes';

const SearchBar = ({ onSearch, products }) => {
  const [value, setValue] = useState('');
  const [autocompleteSuggestions, setAutocompleteSuggestions] = useState([]);

  useEffect(() => {
    const suggestionsRaw =
      products.length !== 0
        ? products
            .map(({ brand, model }) => [
              `${brand} ${model}`,
              `${model} ${brand}`,
              `${brand}`,
              `${model}`,
            ])
            .reduce((acc, curr) => acc.concat(curr))
        : [];
    const suggestions = [...new Set(suggestionsRaw)];
    setAutocompleteSuggestions(suggestions);
  }, [products]);

  const onChange = (e) => {
    const value = e.target.value;
    setValue(value);
    onSearch(value.toLowerCase());
  };

  return (
    <SearchBarStyled>
      <Hint className="hint" options={autocompleteSuggestions} allowTabFill>
        <input
          type="text"
          placeholder="Search model or brand..."
          onChange={onChange}
          value={value}
        />
      </Hint>
    </SearchBarStyled>
  );
};

const SearchBarStyled = styled.div`
  & * input {
    width: 100%;
    padding: 0.5em;
    border: none;
    font-size: 1.5rem;
    border-radius: 5px;
    &::placeholder {
      animation: fadeIn 1s ease-in-out;
      color: #333;
      font-weight: bold;
    }

    &:focus {
      outline: none;

      &::placeholder {
        color: #ccc;
      }
    }
  }
  @media only screen and (${breakpoints.device.xs}) {
    flex-basis: 100%;
    margin: 1em 0 1em 0;
  }
  @media only screen and (${breakpoints.device.sm}) {
    margin: 1em 0 1em 50%;
  }
  @media only screen and (${breakpoints.device.lg}) {
  }
`;

export default SearchBar;
