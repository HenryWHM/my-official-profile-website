import Navbar from './NavBar';
import Introduction from './Introduction';
import AboutMe from './pages/AboutMe.js';
import Hobbies from './pages/Hobbies.js';
import Preloader from './component/Preloader';
import CardList from './CardList.jsx';
import Project from './pages/Project.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Preloader />
    <Router>
      <div className="App">
        <div className="app-container">
          <Navbar />
        </div>
        <div className="content">
          <Routes>
            <Route path="/projects" element={<Project />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/hobbies" element={<Hobbies />} />
          </Routes>
        </div>
        <div className="d-flex w-100 card-container">
          <CardList />
        </div>
      </div>
    </Router>
    </>
  );
}

export default App;
