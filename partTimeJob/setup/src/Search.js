import React from 'react';
import { FaRegMap } from 'react-icons/fa';

const Search = () => {
  return (
    <div className="search-input">
      <input
        type="text"
        className="input"
        placeholder="&#x1F50E;&#xFE0E; Search for a part-time job"
      />
      <button className="btn">
        <FaRegMap />
        <span>Use map</span>
      </button>
    </div>
  );
};

export default Search;
