import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import RobotsView from "./views/RobotsView/RobotsView";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="robots" exact element={<RobotsView />} />
        <Route path="robots/:id" exact />
        <Route path="*" element={<Navigate to="robots" replace />} />
      </Routes>
    </div>
  );
}

export default App;
