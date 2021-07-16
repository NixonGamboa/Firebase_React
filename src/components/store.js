import React, { useReducer, createContext } from "react";

const initialState = {
  students: { list: []},
};
const Store = createContext(initialState);
function reducer(state, action) {
  const stateData = state.students;
  switch (action.type) {
    case "update-students":
      stateData.list = action.students;
      stateData.item = {};
      return { ...state, students: stateData };
    default:
      return state;
  }
}

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};

export default Store;