import React from 'react';

const imageProfile = ({ users }) => {
  return users.map((image, i) => (
    <img
      key={i}
      className="-ml-3 inline-block h-8 w-8 rounded-full text-white shadow-solid"
      src={image}
      alt="profile"
    />
  ));
};

export default imageProfile;
