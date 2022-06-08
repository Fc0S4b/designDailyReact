import React from 'react';
import { FaRegMap } from 'react-icons/fa';

const Search = () => {
  return (
    <div className="search-input">
      <input
        type="text"
        className="input"
        placeholder="Search for a part-time job"
      />
      <button className="btn">
        <FaRegMap />
        use map
      </button>
    </div>
  );
};

export default Search;
