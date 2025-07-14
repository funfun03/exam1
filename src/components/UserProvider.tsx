import React, { createContext, useContext, type ReactNode } from "react";

import { useState } from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  age?: number;
}

interface UserContextType {
  users: User[];
  addUser: (user: User) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (userData: User) => {
    const newUser: User = {
      ...userData,
    };
    setUsers((prev) => [...prev, newUser]);
  };

  const value: UserContextType = {
    users,
    addUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
