import React from "react";
import "./App.css";
import Home from "./Components/Home";
import LogIn from "./Components/LogIn";
import JoinNow from "./Components/JoinNow";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<LogIn />} />
          <Route path="/JoinNow" exact element={<JoinNow />} />
          ...
        </Routes>
      </div>
    </Router>
  );
}

export default App;
