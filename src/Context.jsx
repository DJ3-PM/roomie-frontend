import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const Context = createContext();

const Provider = ({ children }) => {
  // const [isHost, setIsHost] = useState(() => {
  //   return window.sessionStorage.getItem('isHost') === 'true';
  // });

  const [isHost, setIsHost] = useState(() => {
    console.log('SESSION STORAGE', window.sessionStorage.getItem('isHost'));
    if (window.sessionStorage.getItem('isHost') === null) {
      return null;
    }
    return window.sessionStorage.getItem('isHost') === 'true';
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
      setIsHost(window.sessionStorage.getItem('isHost') === 'true');
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
    errorMessage: (message = 'Something went wrong') => {
      toast.error(message, { position: toast.POSITION.BOTTOM_RIGHT });
    },
    successMessage: (message = 'Success!') => {
      toast.success(message, { position: toast.POSITION.BOTTOM_RIGHT });
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
