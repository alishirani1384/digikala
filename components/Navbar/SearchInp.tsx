import React from "react";
import { BiSearch } from "react-icons/bi";

function SearchInp() {
  return (
    <div className="relative flex flex-1 lg:max-w-2xl">
      <input
        type="text"
        placeholder="جستجو"
        className="input input-md font-bold w-full pr-9 bg-gray-200"
          />
          <BiSearch size={25} className="absolute cursor-pointer text-gray-500 top-1/2 right-2 -translate-y-1/2"/>
    </div>
  );
}

export default SearchInp;
