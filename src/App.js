// styles
import './styles/main.sass'
import 'react-toastify/dist/ReactToastify.css'

// hooks
import  { Routes, Route, HashRouter} from 'react-router-dom'
import { useState } from 'react';
import { ToastContainer } from 'react-toastify'

// pages
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';


function App() {
 
  return (
    <div>
      <HashRouter>
        <ToastContainer autoClose={3000}/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/projects/:id' element={<Projects />}/>
        </Routes>
      </HashRouter>
      
    </div>
  );
}

export default App;
