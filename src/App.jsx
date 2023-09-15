import { BrowserRouter, Routes, Route } from 'react-router-dom';

//css
import './App.css';

//pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { Menu } from '@mui/material';
import PageNotFound from './pages/PageNotFound';



function App() {
  return (
     <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>

      
     </div>
        
  );
}

export default App;
