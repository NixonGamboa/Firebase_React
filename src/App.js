import React from "react";
import { StoreProvider } from "./components/store";
import StudentsList from "./components/list-students";
import RankingList from "./components/list-ranking";
import Layout from "./components/layout";

function App() {
  return (
    <StoreProvider>
      <Layout>
        <RankingList />
        <StudentsList />
      </Layout>
    </StoreProvider>
  );
}

export default App;
