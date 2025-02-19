import Preloader from './component/Preloader';
import { HashRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Hobbies from './pages/Hobbies';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';

function App() {
  return (
    <>
    <Preloader />
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
