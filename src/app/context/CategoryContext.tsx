"use client";
import React, { createContext, useContext, useState } from "react";

const AppContext = createContext<any>(undefined);

export function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  let [catValue, setCatValue] = useState("");

  return (
    <AppContext.Provider value={{ catValue, setCatValue }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
