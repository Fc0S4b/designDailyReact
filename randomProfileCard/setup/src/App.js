import React, { useState, useEffect } from 'react';
import Profile from './Profile';
import Content from './Content';

const url = 'https://randomuser.me/api/';

function App() {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState([]);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const dataUser = await response.json();
      setPerson(dataUser);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <section className="section-loading">
        <h1>Loading...</h1>
      </section>
    );
  }

  return (
    <div className="container">
      <svg
        class="circles"
        width="347"
        height="379"
        viewBox="0 0 347 379"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_0_1)">
          <circle
            cx="268.5"
            cy="125.5"
            r="78.5"
            fill="#5E94FF"
            fill-opacity="0.6"
          />
        </g>
        <g filter="url(#filter1_f_0_1)">
          <circle
            cx="103.5"
            cy="338.5"
            r="112.5"
            fill="#5EFFC5"
            fill-opacity="0.6"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_0_1"
            x="76"
            y="-67"
            width="385"
            height="385"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="57"
              result="effect1_foregroundBlur_0_1"
            />
          </filter>
          <filter
            id="filter1_f_0_1"
            x="-163"
            y="72"
            width="533"
            height="533"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="77"
              result="effect1_foregroundBlur_0_1"
            />
          </filter>
        </defs>
      </svg>
      <Profile person={person} />
      <Content fetchUsers={fetchUsers} />
    </div>
  );
}

export default App;
