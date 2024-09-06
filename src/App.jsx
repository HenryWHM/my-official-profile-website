import Preloader from './component/Preloader';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';

function App() {
  return (
    <>
    <Preloader />
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
