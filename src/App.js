import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Component/Hero';
import Skills from './Component/Skills';
import About from './Component/About';
import Works from './Component/Works';
import Contact from './Component/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/works' element={<Works/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
