import React from "react";
import { About, Footer, Header, Skills, Work, Certificate } from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Certificate />
      <Footer />
    </div>
  );
};

export default App;
