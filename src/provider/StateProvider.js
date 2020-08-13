import React, { createContext, useContext, useReducer } from "react";

const StateContext = createContext(); // create context OBJECT

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
