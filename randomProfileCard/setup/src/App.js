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
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }

  return (
    <div className="container">
      <Profile person={person} />
      <Content fetchUsers = {fetchUsers} />
    </div>
  );
}

export default App;
