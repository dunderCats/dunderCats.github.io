import React from "react";
import './App.css';
import { HomePage } from './Pages/HomePage';
import { NavBar } from './Pages/NavBar';
// import { TestFileUpload } from "./TestFileUpload";


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <HomePage></HomePage>
      {/* <TestFileUpload /> */}
    </div>
  );
}

export default App;
