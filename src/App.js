import React from "react";
import { StoreProvider } from "./components/store";
import StudentsList from "./components/list-students";


function App() {
  return (
    <StoreProvider>
      <StudentsList />
    </StoreProvider>
  );
}

export default App;
