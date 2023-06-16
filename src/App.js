import React from "react";
import "./App.css";
import { HomePage } from "./Pages/HomePage";
import { NavBar } from "./Pages/NavBar";
import { AboutPage } from "./Pages/AboutPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./Pages/LoginPage";
import { ContactPage } from "./Pages/ContactPage";
import { MembersGallery } from "./Pages/MembersGallery";
import { TestFileUpload } from "./TestFileUpload";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" exact={true} element={<HomePage />} />
          <Route path="/aboutus" exact={true} element={<AboutPage />} />
          <Route path="/contact" exact={true} element={<ContactPage />} />
          <Route path="/login" exact={true} element={<LoginPage />} />
          <Route path="/membersgallery" exact={true} element={<MembersGallery />}
          />
        </Routes>
      </BrowserRouter>
      {/* <TestFileUpload /> */}
    </div>
  );
}

export default App;
