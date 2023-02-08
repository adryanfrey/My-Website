// sass
import './styles/main.sass'

// react rout
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';

// components
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
