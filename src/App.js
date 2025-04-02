
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './Style/Style.css';
import Code from './components/index'
import Nav from './components/nav'
import Home from './components/Home'
import About from './components/About'
import Programs from './components/programs'
import Projects from './components/projects'
function App() {
  return (
<>
<Nav></Nav>
<HashRouter>
      <Routes>
        <Route path="/Projects/Programs" element={<Programs/>} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About/>} />
        <Route path="/Projects" element={<Projects/>} />
      </Routes>
    </HashRouter>
</>
  );
}

export default App;
