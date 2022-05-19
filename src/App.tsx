import React from "react";
import Onboarding from "./pages/on-boarding";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Onboarding />}>
        <Route path="/welcome" element={<Onboarding />} />
        <Route path="/create-workspace" element={<Onboarding />} />
        <Route path="/workspace-planning" element={<Onboarding />} />
        <Route path="/congratulation" element={<Onboarding />} />
      </Route>
      <Route path="*" element={<h1>NOT FOUND</h1>} />
    </Routes>
  );
}

export default App;
