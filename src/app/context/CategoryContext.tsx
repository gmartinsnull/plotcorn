"use client";
import React, { createContext, useContext, useState } from "react";

const AppContext = createContext<any>(undefined);

export function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  let [categoryValue, setCategoryValue] = useState("");

  return (
    <AppContext.Provider value={{ categoryValue, setCategoryValue }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
