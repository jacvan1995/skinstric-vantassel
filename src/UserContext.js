import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    name: "",
    location: "",
    photo: null,
    demographics: {
      age: "",
      gender: "",
      skinTone: "",
    },
    concerns: [],
    routine: [],
  });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;