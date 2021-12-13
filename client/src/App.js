import React from 'react';
import {
  BrowserRouter ,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/Home/home';
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;