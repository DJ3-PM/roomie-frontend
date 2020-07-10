import React, { createContext, useState } from 'react';

export const Context = createContext();

const Provider = ({ children }) => {
  const [isHost, setIsHost] = useState(() => {
    return window.sessionStorage.getItem('isHost');
  });

  const [avatar, setAvatar] = useState(() => {
    return window.sessionStorage.getItem('avatar');
  });

  const [userId, setUserId] = useState(() => {
    return window.sessionStorage.getItem('userId');
  });

  const [profileId, setProfileId] = useState(() => {
    return window.sessionStorage.getItem('profileId');
  });

  const [firstname, setFirstname] = useState(() => {
    return window.sessionStorage.getItem('firstname');
  });

  const [lastname, setLastname] = useState(() => {
    return window.sessionStorage.getItem('lastname');
  });

  const value = {
    isHost,
    activateIsHost: (token) => {
      window.sessionStorage.setItem('isHost', token);
      setIsHost(true);
    },
    removeIsHost: () => {
      window.sessionStorage.removeItem('isHost');
      setIsHost(false);
    },
    avatar,
    activateAvatar: (avatarUrl) => {
      window.sessionStorage.setItem('avatar', avatarUrl);
      setAvatar(avatarUrl);
    },
    removeAvatar: () => {
      window.sessionStorage.removeItem('avatar');
      setAvatar(null);
    },
    userId,
    activateUserId: (userId) => {
      window.sessionStorage.setItem('userId', userId);
      setUserId(userId);
    },
    removeUserId: () => {
      window.sessionStorage.removeItem('userId');
      setUserId(null);
    },
    profileId,
    activateProfileId: (profileId) => {
      window.sessionStorage.setItem('profileId', profileId);
      setProfileId(profileId);
    },
    removeProfileId: () => {
      window.sessionStorage.removeItem('profileId');
      setProfileId(null);
    },
    firstname,
    activateFirstname: (firstname) => {
      window.sessionStorage.setItem('firstname', firstname);
      setFirstname(firstname);
    },
    removeFirstname: () => {
      window.sessionStorage.removeItem('firstname');
      setFirstname(null);
    },
    lastname,
    activateLastname: (lastname) => {
      window.sessionStorage.setItem('lastname', lastname);
      setLastname(lastname);
    },
    removeLastname: () => {
      window.sessionStorage.removeItem('lastname');
      setLastname(null);
    },
  };

  return (
    <Context.Provider value={value}>
      {
        children
      }
    </Context.Provider>
  );
};

export default {
  Provider,
  Consumer: Context.Consumer,
};
