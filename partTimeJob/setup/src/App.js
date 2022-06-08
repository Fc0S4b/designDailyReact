import React from 'react';
import Search from './Search';
import Jobs from './Jobs';
import jobItems from './data';

function App() {
  return (
    <div className="container">
      <Search />
      <Jobs jobs={jobItems} />
    </div>
  );
}

export default App;
