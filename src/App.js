import React from "react";
import "./App.css";
import { HomePage } from "./Pages/HomePage";
import { NavBar } from "./Pages/NavBar";
import { AboutPage } from "./Pages/AboutPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./Pages/LoginPage";
import { ContactPage } from "./Pages/ContactPage";
import { MembersGallery } from "./Pages/MembersGallery";

import { useEffect } from 'react';
import { gapi } from 'gapi-script';

const clientId = "104770806637-eu7b9plmra6tugbet2d7a07dk4f02ht6.apps.googleusercontent.com";

// import { TestFileUpload } from "./TestFileUpload";

function App() {


  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId, 
        scope: ""
      })
    }
    gapi.load('client:auth2', start);

  })



  return (
    <div className="App">
      
      <BrowserRouter>
        <NavBar />
       
        <Routes>
          <Route path="/" exact={true} element={<HomePage />} />
          <Route path="/about" exact={true} element={<AboutPage />} />
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
