import React from "react";
import MainWrapper from "./components/mainWrapper/MainWrapper";
import Navbar from "./components/navbar/Navbar";
import Sidenav from "./components/sidenav/Sidenav";

const App = () => {
  return (
    <>
      <Sidenav />
      <Navbar />
      <MainWrapper />
    </>
  );
};

export default App;
