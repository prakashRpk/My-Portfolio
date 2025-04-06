
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Background from './components/background/Backgound'
import Nav from './components/navbar/nav'
import Contact from './components/Contact/contect';
import Home from './components/Home/Home'
import About from './components/Service/Service'
import Html from './components/projects/jsx/html'
import Python from './components/projects/jsx/python'
import FrontEnd from './components/projects/jsx/FrontEnd'
function App() {
  return (
<>
<Background></Background>
<Nav></Nav>
<HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About/>} />
        <Route path="/Projects/html&css" element={<Html/>} />
        <Route path="/Projects/python" element={<Python/>} />
        <Route path="/Projects/Front-end" element={<FrontEnd/>} />
      </Routes>
    </HashRouter>
<Contact></Contact>
</>
  );
}

export default App;
