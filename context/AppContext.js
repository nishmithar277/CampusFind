
"use client";

import { createContext, useContext, useState } from "react";
import { items as sampleItems } from "../data/items";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [reports, setReports] = useState(sampleItems);
  const [user, setUser] = useState(null);

  function login(name, email) {
    setUser({ name, email });
  }

  function logout() {
    setUser(null);
  }

  function addReport(report) {
    setReports(old => [
      {
        ...report,
        id: Date.now(),
        date: new Date().toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric"
        })
      },
      ...old
    ]);
  }

  function markAsFound(id) {
    setReports(old =>
      old.map(item =>
        item.id === id ? { ...item, resolved: true } : item
      )
    );
  }

  return (
    <AppContext.Provider
      value={{ reports, user, login, logout, addReport, markAsFound }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
