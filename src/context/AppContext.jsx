import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [activePage, setActivePage] = useState("form");
  const [boxes, setBoxes] = useState([]);

  const addBox = (box) => setBoxes([...boxes, box]);

  return (
    <AppContext.Provider value={{ activePage, setActivePage, boxes, addBox }}>
      {children}
    </AppContext.Provider>
  );
};
