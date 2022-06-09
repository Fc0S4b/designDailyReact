import React, {useState, useEffect} from 'react';
const url = "https://randomuser.me/api/"

function Profile() {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState(person);

  const fetchUsers = async () => {
    const response = await fetch(url);
    const dataUser = await response.json()
    setPerson(dataUser);
    setLoading(false);
  }
  return (
    <div>Profile</div>
  )
}

export default Profile
