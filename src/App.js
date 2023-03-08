// sass
import './styles/main.sass'

// hooks
import  { Routes, Route, HashRouter} from 'react-router-dom'
import { useState } from 'react';

// pages
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';


function App() {
 
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/projects/:id' element={<Projects />}/>
        </Routes>
      </HashRouter>
      
    </div>
  );
}

export default App;
