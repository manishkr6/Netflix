import React from "react";
import Home from "./pages/Home/Home";
import { Route, Router } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Route path="/" element={<Home />} />
      </Router>
    </div>
  );
};

export default App;
