import React from 'react';
import { FaGripLines } from 'react-icons/fa';
function Content({fetchUsers}) {
  return (
    <div className="btn-container">
      <button className="more-option">
        <FaGripLines />
      </button>
      <button className="view-content">View content</button>
      <button className="random" onClick={fetchUsers}>Random user</button>
    </div>
  );
}

export default Content;
