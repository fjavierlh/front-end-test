import React, { useState } from 'react';
import { Hint } from 'react-autocomplete-hint';
import styled from 'styled-components';
import breakpoints from '../constants/devices-sizes';
import useSetAutocompleteKeywords from '../hooks/useSetAutocompleKeywords.hook';

const SearchBar = ({ onSearch, products }) => {
  const { autocompleteSuggestions } = useSetAutocompleteKeywords(products);
  const [value, setValue] = useState('');

  const onChange = (e) => {
    const value = e.target.value;
    setValue(value);
    onSearch(value.toLowerCase());
  };

  return (
    <SearchBarStyled>
      <Hint options={autocompleteSuggestions} allowTabFill>
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
    border: 1px solid #ccc;
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
