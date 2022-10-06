import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Components/Templates/Home/Home";
import About from "./Components/Templates/About/About";
import "./App.css";
import Navigation from "./Components/UI/Organisms/Nav/Nav";

const App = () => (
  <BrowserRouter>
    <div>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
