import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

function Profile({ person }) {
  const profileUser = person.results[0];
  const { large } = profileUser.picture;
  const { first: firstName, last: lastName } = profileUser.name;
  const { name: streetName } = profileUser.location.street;
  const { city, country } = profileUser.location;

  return (
    <div className="container-profile">
      <img src={`${large}`} className="img" alt="" />
      <h1>{`${firstName}, ${lastName}`}</h1>
      <FaMapMarkerAlt />
      <h3>{`${streetName}, ${city}, ${country}`}</h3>
    </div>
  );
}

export default Profile;
