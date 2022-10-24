import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Calendar } from "./pages/Calendar/Calendar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Calendar />} />
      </Routes>
    </Router>
  );
}

export default App;
