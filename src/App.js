// sass
import './styles/main.sass'

// hooks
import  { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react';

// pages
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';


function App() {
 
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/projects/:id' element={<Projects />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
