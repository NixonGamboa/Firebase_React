import React, { useReducer, createContext } from "react";
import reducer from "./reducer";

const initialState = {
  students: { list: [] },
};
const Store = createContext(initialState);

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};

export default Store;
