import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

// import Header from "./Container/Header";
// import Footer from "./Container/Footer";

import "./index.css";
// import Main from "./Pages/Main";

function App() {
  return (
    <div className="main-wrapper">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
