import React from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import { RouteList } from "./routes";
function App() {
  return (
    <BrowserRouter>
      <RouteList />
    </BrowserRouter>
    
  );
}

export default App;
