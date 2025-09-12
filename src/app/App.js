import './App.css';
import React from "react";
import { UserProvider } from "./contexts/UserContext";
import SkinstricFlow from "./SkinstricFlow";

function App() {
  return (
    <UserProvider>
      <SkinstricFlow />
    </UserProvider>
  );
}

export default App