import { useState } from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Menu from "./component/Menu/Menu";
import Footer from "./component/Footer/Footer";
import Home from './component/pages/Home';
import Hadiseh from './component/pages/Hadiseh';
import Fatemeh from './component/pages/Fatemeh';
import Matina from './component/pages/Matina'

function App() {
  

  return (
    <>
        <Router>
      
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/hadiseh" element={<Hadiseh />} />
          <Route path="/fatemeh" element={<Fatemeh />} />
          <Route path="/matina" element={<Matina />} />
        </Routes>
        <Footer />
      
    </Router>
    </>
  );
};

export default App;
