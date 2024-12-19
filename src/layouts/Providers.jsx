"use client";

import { createContext, useState } from "react";

export const ProfileContext = createContext(null);

export function Providers({ children }) {
  const [profile, setProfile] = useState(null);
  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}
