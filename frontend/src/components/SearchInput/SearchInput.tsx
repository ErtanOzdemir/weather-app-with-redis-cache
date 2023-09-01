import React from "react";
import "./searchInput.scss";
import { SearchIcon } from "../Icons";

interface SearchInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchInput({ onChange }: SearchInputProps) {
  return (
    <div className='container'>
      <input
        className='container__input'
        onChange={onChange}
        placeholder='Search a City'
      />
      <SearchIcon />
    </div>
  );
}
