import React, { createContext, useState } from 'react';

export const Context = createContext();

const Provider = ({ children }) => {
  const [isHost, setIsHost] = useState(() => {
    return window.sessionStorage.getItem('isHost');
  });

  const [avatar, setAvatar] = useState(() => {
    return window.sessionStorage.getItem('avatar');
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
