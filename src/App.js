import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sections from "./sections/Sections";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Sections />
      <Footer />
    </div>
  );
};

export default App;