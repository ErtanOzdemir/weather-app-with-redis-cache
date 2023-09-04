import React, { useRef } from "react";
import "./searchInput.scss";
import { SearchIcon } from "../Icons";

interface SearchInputProps {
  onSelect: (value: any) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  options?: { label: string; value: any }[] | null | undefined;
}

export default function SearchInput({
  onChange,
  options,
  onSelect,
}: SearchInputProps) {
  const searchInput = useRef(null);

  return (
    <>
      <div
        className={`container ${
          document.activeElement === searchInput.current ? "focus" : ""
        }`}
      >
        <input
          ref={searchInput}
          className='container__input'
          onChange={onChange}
          placeholder='Search a City'
        />
        <SearchIcon />
      </div>
      {options && options.length > 0 && (
        <div className='dropdown-menu'>
          {options.map((item, index) => {
            return (
              <div
                onClick={() => onSelect(item.value)}
                className='dropdown-menu__item'
                key={index}
              >
                {item.label}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
