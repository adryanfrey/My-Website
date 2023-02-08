// sass
import './styles/main.sass'

// react rout
import { HashRouter, Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';

// components
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <HashRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
